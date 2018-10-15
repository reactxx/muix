import { TWithStyles, TSheeter, TVariants, TComponents } from 'reactxx-typings'
//import { getBreakpoints } from 'reactxx-sheet-widths'

import { Shape, ts } from 'reactxx-core/tests/flow/shape'

export const width: TVariants.getWidths<Shape> =
    //'tabletWidth'
    'mobileWidth'
//'desktopWidth'

export const componentOptions: TWithStyles.ComponentOptions<Shape> = {
    displayName: 'FlowTest',
    defaultProps: {
        classes: theme => ({
            root: {
                flex: 1
            },
            label: {

            }
        }),
        classNameX: {},
        styleX: {},
        themedProps: ({ breakpoints: { mobile, tablet, desktop } }) => ({
            sheetWidths: { mobileWidth: mobile, tabletWidth: tablet, desktopWidth: desktop }
        }),
        transitionGroups: {
            leftDrawer: {
                duration: 300
            }
        },
    }
}

export const fillSheetQuery: TComponents.FillSheetQuery<Shape> = (props, state) => {
    state.sheetQuery = ts.query = {
        $transitionGroups: {
            leftDrawer: state.data.drawerOpened
        } 
    }
}

export const cascading: TComponents.Props<Shape> = {
    classes: { root: {}, label: {} },
    classNameX: {},
    styleX: {}
}

export const props: TComponents.Props<Shape> = {
}

export const classNameX: TSheeter.RulesetOrAtomized<'View', Shape> = [{

}, {
    
}]

export const styleX: TSheeter.StyleOrCreator<Shape> = {
}

