//https://babeljs.io/docs/en/next/babel-generator
//https://babeljs.io/docs/en/next/babel-parser.html

//https://nodejs.org/api/fs.html

//https://github.com/isaacs/node-glob

//https://github.com/rse/astq
export const MUI_VERSION = 'v1.4.2'

const driver = 'd:/'
const basicReactXX = driver + 'reactxx/muix/'
export const src = basicReactXX + 'src/mui-web/'
export const reactxxMuiWeb = basicReactXX + 'src/muix/reactxx-mui-web/'
export const reactxxMuiWebShapesDest = reactxxMuiWeb + 'typings/shapes/'
export const reactxxMuiWebShapes = reactxxMuiWeb + 'typings/shapes/'
export const reactxxMuiWebComps = basicReactXX + 'src/muix/web/'

const basicCodemod = driver + 'reactxx/codemod/'
export const patchPrepare = basicCodemod + 'patch-prepare/'
export const patchOriginal = basicCodemod + 'patch-original/'

export const tempDump = driver + 'temp/dump/'

