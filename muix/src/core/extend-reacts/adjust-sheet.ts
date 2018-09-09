import { TSheeter, TCompiler } from '../typings'
import { adjustSheetCompiled } from '../compiler/ruleset'

export const adjustSheet = <R extends TSheeter.Shape = TSheeter.Shape>(sheet: TSheeter.SheetX<R>, classes: TSheeter.PartialSheet<R>) => {
    // adjust sheet compiled (in place)
    adjustSheetCompiled(sheet)
    // no classes => return sheet
    if (!classes) return sheet
    // adjust classes compiled (in place)
    adjustSheetCompiled(classes)
    // merge sheet with classes
    let res = { ...sheet as TCompiler.Sheet } as TCompiler.Sheet<R>
    for (const p in classes) {
        const rs = {...sheet[p]} as TCompiler.Ruleset
        rs.list = rs.list.concat(classes[p].list)
        res[p] = rs
    }
    return res
}