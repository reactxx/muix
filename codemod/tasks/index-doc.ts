// D:\reactxx\muix\src\ks\common\muix-doc\grid-list\TitlebarGridList.tsx, wrong title

import generate from '@babel/generator';
import { parse, parseExpression } from '@babel/parser';
import * as fsExtra from 'fs-extra';
import { readAllCodes } from '../utils/readAllCodes'
import * as Ast from '../utils/ast';
import * as Config from '../utils/config';
import * as Queries from '../utils/queries';
import { transformConstStyles } from './ast/transform-const-styles';
import { removeDefaultExport } from './ast/remove-default-export'
import { replaceAll, processMatchAll } from '../utils/regexp';

export const codeModDoc = () => {

    Config.setIsDoc(true)

    const { log, codeStr } = readAllCodes()

    try { fsExtra.emptyDirSync(Config.muiWeb) } catch { }

    // refresh list of all example files (save to ./doclist.ts)
    // const _ignoreAll = {}
    // Object.keys(log).forEach(k => _ignoreAll[k] = true)
    // const ignoreAllStr = JSON.stringify(_ignoreAll, null, 2)

    interface SitemapNode { id: string; dir: string; title: string; idx?: number; examples: string[] }
    let groups: SitemapNode[] = []
    const groupAdd = (dir: string, example: string, title: string) => {
        let grp = groups.find(g => g.dir === dir)
        if (!grp) groups.push(grp = { dir, id: replaceAll(dir, '-', '_'), title, examples: [] })
        if (example) grp.examples.push(example)
        else grp.title = title
    }

    for (const path in log) {
        const info = log[path]

        console.log(info.path)

        // ignore some examples
        if (ignores[path]) continue

        // code string modification
        let code = codeStr[path]

        if (info.name.endsWith('.md')) {
            code = mdToTS(code)
            const title = code.match(/#\s*([a-zA-Z0-9 ]*)/m)[1]
            if (!title) throw ''
            groupAdd(info.dir, null, title)
        } else {
            code = codeModFile(code, info)
            code = codeModAst(code, info)
            switch (path) {
                case 'dialogs/SimpleDialog':
                    code = code.replace("const SimpleDialogWrapped = withStylesCreator(", "const SimpleDialogWrapped = withStylesCreator<any>(")
                    break
            }
            // register example
            if (info.name.charAt(0).toUpperCase() === info.name.charAt(0))
                groupAdd(info.dir, info.name, null)
        }

        // output code
        fsExtra.outputFileSync(info.destPath + '.tsx', Config.msgAutoGenerated + code);

    }

    // ******* generate meta.ts files
    groups = groups.sort((a, b) => a.title.localeCompare(b.title))
    groups.forEach((g, idx) => g.idx = idx)

    const meta: string[] = [Config.msgAutoGenerated, `\n export interface SitemapNode { id: string; dir: string; title: string; idx: number; examples: string[] }\n\n`]

    //imports
    groups.forEach(g => {
        meta.push(`import ${g.id} from './${g.dir}/${g.dir}.md'\n`)
        g.examples.forEach(ex => meta.push(`import ${g.id}$${ex} from './${g.dir}/${ex}'\n`))
    })

    //pathToObjs
    meta.push('\nexport const pathToObjs = {\n')
    groups.forEach(g => {
        meta.push(`  '${g.dir}':  ${g.id},\n`)
        g.examples.forEach(ex => meta.push(`  '${g.dir}/${ex}':  ${g.id}$${ex},\n`))
    })
    meta.push('}')

    //sitemap
    meta.push(`\nexport const siteMap = ${JSON.stringify(groups, null, 2)}`)

    // save meta
    fsExtra.outputFileSync(Config.muiWeb + 'meta.ts', meta.join(''));
}

const codeModAst = (code: string, info: Ast.MUISourceInfo) => {
    const root = parseCodeLow(code)
    switch (info.path) {
        case 'hidden/BreakpointDown':
        case 'hidden/BreakpointOnly':
        case 'hidden/BreakpointUp':
        case 'hidden/GridIntegration':
            removeDefaultExport(root, info)
            break
        case 'buttons/ButtonBases':
            //let sheet = Queries.checkSingleResult(Ast.astq().query(root, '// VariableDeclaration/VariableDeclarator [ /Identifier [@name == "styles"] ]'))
            transformConstStyles(root, info)
            break
    }
    return generateCode(root)
}

const parseExpressionLow = (code: string) => parseExpression(code, { plugins: ['jsx', 'objectRestSpread', 'classProperties', 'typescript'] });
const parseCodeLow = (code: string) => parse(code, { sourceType: 'module', plugins: ['jsx', 'objectRestSpread', 'classProperties', 'typescript'] });
const generateCode = (ast: Ast.Ast) => generate(ast, { /* options */ }).code as string

const codeModFile = (code: string, info: Ast.MUISourceInfo) => {
    switch (info.path) {
        case 'autocomplete/IntegrationDownshift':
            code = processMatchAll(/startAdornment(\s|.)*?(}\),)/g, code, (match, res) => res.push(code.substr(match.index, match[0].length - 3) + '} as any),'))
            break
        case 'buttons/CustomizedButtons':
        case 'text-fields/CustomizedInputs':
            code = code.replace(`import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';`,
                `import { ThemeProvider } from 'reactxx-basic';
import createMuiTheme from 'reactxx-mui-web/styles/createMuiTheme';
import withStylesCreator from 'reactxx-mui-web/styles/withStyles'`)
            code = replaceAll(code, '<MuiThemeProvider theme={theme}>', '<ThemeProvider theme={theme as any}>')
            code = replaceAll(code, 'MuiThemeProvider', 'ThemeProvider')
            break
        case 'menus/MenuListComposition':
            code = replaceAll(code, `  handleToggle = () => {`, `  anchorEl\n  handleToggle = () => {`)
            code = replaceAll(code, 'id="menu-list-grow"', '{...{id:"menu-list-grow"}}')
            code = styleToWebStyle(code, 'transformOrigin')
            break
        case 'snackbars/ConsecutiveSnackbars':
        case 'snackbars/SimpleSnackbar':
            code = replaceAll(code, 'handleClose = (event, reason)', 'handleClose = (event, reason?)')
            break
        case 'steppers/HorizontalLinearStepper':
        case 'steppers/HorizontalNonLinearStepperWithError':
            code = replaceAll(code, 'const props = {};', 'const props: any = {};')
            code = replaceAll(code, 'const labelProps = {};', 'const labelProps: any = {};')
            break
        case 'steppers/HorizontalNonLinearAlternativeLabelStepper':
            code = replaceAll(code, 'const props = {};', 'const props: any = {};')
            code = replaceAll(code, 'const buttonProps = {};', 'const buttonProps: any = {};')
            break
        case 'tables/CustomPaginationActionsTable':
            code = replaceAll(code, '(\n  TablePaginationActions,\n);', '(TablePaginationActions);')
            break
        case 'tables/EnhancedTable':
            code = replaceAll(code, 'let EnhancedTableToolbar = ', 'let EnhancedTableToolbar: any = ')
            break
        case 'tables/CustomizedTable':
            const endPart = '}))(TableCell);'
            code = processMatchAll(/withStyles\(theme(\s|.)*?(}\)\)\(TableCell\);)/g, code, (match, res) => res.push(code.substr(match.index, match[0].length - endPart.length) + '} as any), TableCell as any)() as typeof TableCell;'))
            code = replaceAll(code, 'const CustomTableCell = withStyles(theme', 'const CustomTableCell = withStylesCreator((theme: any)')
            break
        case 'selects/MultipleSelect':
            code = replaceAll(code, 'renderValue={selected =>', 'renderValue={(selected: any) =>')
            //code = styleToWebStyle(code, 'transitionDelay')
            //code = processMatchAll(/style={{(\s|.)*?(}})/g, code, (match, res) => res.push(code.substr(match.index, match[0].length - 3) + '} as any}'))
            break
        case 'progress/CircularIndeterminate':
            code = replaceAll(code, '{ color: purple[500] }', '{ color: purple[500] } as any')
            break
        case 'buttons/FloatingActionButtonZoom':
            code = code.replace('const { classes, theme } = this.props;', 'const { classes, $system: {theme} } = this.props;')
            code = code.replace('color={fab.color}', 'color={fab.color as any}')
            code = styleToWebStyle(code, 'transitionDelay')
            break
        case 'cards/MediaControlCard':
            code = code.replace('const { classes, theme } = props;', 'const { classes, $system: {theme} } = props;')
            break
        case 'chips/Chips':
            code = code.replace('href="#chip"', '{...{href:"#chip"}}')
            break
        case 'dialogs/ConfirmationDialog':
            code = code.replace('super();', 'super(props);')
            break
        case 'progress/DelayingAppearance':
            code = styleToWebStyle(code, 'transitionDelay')
            break
        case 'cards/ImgMediaCard':
            code = code.replace('height="140"', '{...{height:140}}')
            break
        case 'transitions/SimpleZoom':
            code = code.replace("transitionDelay: checked ? 500 : 0", "$web: {transitionDelay: checked ? '500' : '0'}")
            break
        case 'grid/ComplexGrid':
            code = code.replace("style={{ cursor: 'pointer' }}", "style={{ $web: {cursor: 'pointer' }}}")
            break
        case 'grid/InteractiveGrid':
            code = code.replace("", "")
            break
        case 'grid/SpacingGrid':
            code = code.replace("Number(spacing)", "spacing")
            break
        case 'hidden/BreakpointDown':
        case 'hidden/BreakpointOnly':
        case 'hidden/BreakpointUp':
        case 'hidden/GridIntegration':
            code += `export default withStylesCreator(styles, withWidth(${info.name}))`
            break
        case 'popover/AnchorPlayground':
            code = code.replace("", "")
            break
        case 'popper/ScrollPlayground':
            code = code.replace("", "")
            break
        case 'transitions/SimpleGrow':
            code = code.replace("style={{ transformOrigin: '0 0 0' }}", "style={{ $web: {transformOrigin: '0 0 0' }}}")
            break
    }

    code = importComponents(code)
    code = importIcons(code)
    code = replaceWithStyles(code)

    code = replaceAll(code, '\n  state = {', '\n  state: any = {')
    code = replaceAll(code, `import { withStyles } from '@material-ui/core/styles';`, `import withStylesCreator from 'reactxx-mui-web/styles/withStyles'`)
    code = replaceAll(code, `import withWidth from '@material-ui/core/withWidth';`, `import withWidth from 'reactxx-mui-web/withWidth/withWidth';`)
    code = replaceAll(code, `.propTypes = {`, `['propTypes'] = {`)
    code = replaceAll(code, `extends React.Component {`, `extends React.Component<any,any> {`)
    code = replaceAll(code, `@material-ui/core/`, `reactxx-mui-web/`)
    code = replaceAll(code, `/static/images/`, `src/ks/common/muix/static/images/`)
    code = code.replace("<Fade {...TransitionProps}","<Fade {...TransitionProps as any}")
    //************ CLASSNAMES
    code = code.replace(`import classNames from 'classnames';`, `import { classNames } from 'reactxx-basic';`)
    code = code.replace("import MarkdownElement from '@material-ui/docs/MarkdownElement'", "import MarkdownElement from '../../mui-doc-app/MarkdownElement'")

    return code
}

const styleToWebStyle = (code: string, wrongPart: string) => {
    return processMatchAll(/style={{((\s|.)*?)}}/g, code, (match, res) => {
        if (match[1].indexOf(wrongPart) >= 0)
            res.push(`style={{ $web:{${match[1]}}}}`)
        else
            res.push(match[0])
    })
}

const importComponents = (example: string) => processMatchAll(/^import ([A-Z]\w+).*@material-ui\/core\/\w+';/gm, example, (match, res) => {
    let matchStr = example.substr(match.index, match[0].length - 2)
    res.push(matchStr.replace('@material-ui/core/', 'reactxx-mui-web/'))
    res.push('/')
    res.push(match[1])
    res.push("';")
})

const importIcons = (example: string) => processMatchAll(/^import .*@material-ui\/icons\//gm, example, (match, res) => {
    res.push(example.substr(match.index, match[0].length).replace('@material-ui/icons/', 'reactxx-icons/'))
})

const replaceWithStyles = (example: string) => processMatchAll(/withStyles\((\w+)(.*?)\)\((\w+)\);$/gm, example, (match, res) => {
    res.push(`withStylesCreator(${match[1]} as any, ${match[3]}${match[2]})();`)
})

const ignores = {
    'autocomplete/IntegrationAutosuggest': true,
    'autocomplete/IntegrationReactSelect': true,
    'snackbars/CustomizedSnackbars': true,
    'chips/ChipsPlayground': true,
    'dialogs/ResponsiveDialog': true,
}

const mdToTS = (code: string) => {
    code = code.replace(/---(.|\s)*?---/gm, '')
    code = code.replace('<p class="description">','### ')
    code = code.replace('</p>','')
    code = processMatchAll(/{{"demo": "pages\/\w+\/([a-z-A-Z]+)\/([a-z-A-Z]+)\.js"}}/gm, code, (match, res) => {
        res.push(`!ReactxxDocExample[${match[1]}/${match[2]}]`)
    })
    return `
const code = \`${replaceAll(code, '`', '\\`')}\`
export default code
    `
}