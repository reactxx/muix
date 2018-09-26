import warning from 'warning';

import { TAtomize, TSheeter, TComponents } from 'reactxx-typings'
import { createWithTheme } from './utils/create-with-theme'
import { atomizeRulesetLow } from './atomize-low'

export const atomizeSheet = <R extends TSheeter.Shape = TSheeter.Shape>(sheet: TSheeter.SheetOrCreator<R>, theme) => {
    if (!sheet) return null
    const sh = createWithTheme(sheet, theme)
    for (const p in sh) sh[p] = atomizeRuleset(sh[p], theme, p)
    return sh as any as TAtomize.Sheet<R>
}

export const atomizeRuleset = (ruleset: TSheeter.ClassNameOrCreator, theme, rulesetName?: string) => {
    if (!ruleset) return null
    const rs = createWithTheme(ruleset, theme)
    if (isAtomizedRuleset(rs) || isAtomicArray(rs)) return rs
    return atomizeRulesetLow(rs, rulesetName)
}

export const atomizeStyle = (style: TSheeter.StyleOrCreator, theme) => {
    if (!style) return null
    if (window.isWeb)
        return createWithTheme(style, theme) as TSheeter.StyleOrAtomizedWeb
    else
        return atomizeRuleset(style as TSheeter.ClassNameOrCreator, theme)
}

// export function isRuleset(obj: Object): obj is TSheeter.Ruleset {
//     return isObject(obj) && typeof obj[TAtomize.TypedInterfaceTypes.InterfaceProp] === 'undefined'
// }

export function isAtomizedRuleset(obj: Object): obj is TAtomize.AtomizedRuleset {
    return obj && obj[TAtomize.TypedInterfaceTypes.prop] === TAtomize.TypedInterfaceTypes.atomizedRuleset
}
// export function isAtomizedStyleWeb(obj: Object): obj is TAtomize.StyleWeb {
//     return obj && obj[TAtomize.TypedInterfaceTypes.InterfaceProp] === TAtomize.TypedInterfaceTypes.atomizedStyleWeb
// }

export function isAtomicArray(obj): obj is TAtomize.AtomicArray {
    return obj && obj[TAtomize.TypedInterfaceTypes.prop] === TAtomize.TypedInterfaceTypes.atomicArray
}
export function isAtomizedSheet<R extends TSheeter.Shape = TSheeter.Shape>(sheet: TSheeter.SheetX): sheet is TAtomize.Sheet<R> {
    for (const p in sheet)
        return isAtomizedRuleset(sheet[p])
    return true
}

export function isReactXXComponent (obj): obj is TComponents.ComponentType {
  return obj[TAtomize.TypedInterfaceTypes.prop] === TAtomize.TypedInterfaceTypes.reactxxComponent
}

// export function isRulesetWebArray(obj): obj is TSheeter.RulesetWeb[] {
//     return Array.isArray(obj) && !isAtomicArray(obj)
// }
