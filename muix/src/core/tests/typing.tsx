/** @jsx createElement */
import { TSheeter, TCommonStyles, TVariants } from 'reactxx-typings'


// const v: TVariants.VariantPart = {
// }



// declare module 'reactxx-typings' {
//     export interface IVariants {
//         name2: number
//     }
// }

// const c: IVariants = {
//     name2:null
// }

interface Shape1 extends TSheeter.ShapeAncestor {
    common: TSheeter.ShapeTexts<'root'>
    theme: { color: string }
    //sheetFlags: TSheeter.ShapeFlags<'disabled'>
}
const style1: TSheeter.Ruleset<'Text', Shape1> = {
}

const sheet3: TSheeter.SheetCreator<Shape1> = ({ color }) => ({
    root: {
        color,
        
    }
})





interface Shape2 extends TSheeter.ShapeAncestor {
    common: TSheeter.ShapeTexts<'root'>
    native: TSheeter.ShapeViews<'nativeOnly'>
    web: TSheeter.ShapeWeb<'webOnly'>
    sheetFlags: TSheeter.ShapeFlags<'disabled'>
}

const style2: TSheeter.Ruleset<'Text', Shape2>[] = [
    {
        $web: {},
    },
    {
        $whenFlag: {
        },
        $native: {
            $whenFlag: {
                disabled: {
                    $web: {
                        $mediaq: {},
                    },
                    $whenFlag: {},
                    $mediaq: {},
                    $native: {
                        $mediaq: {},
                    }
                },
            },
        },
    }
]

const sheet: TSheeter.Sheet<Shape2> = {
    webOnly: {},
    nativeOnly: {},
    root: {},
}
