export * from './variants'
import { TComponents, TSheeter, TVariants } from 'reactxx-typings'
import { registerVariantHandler, atomizeRulesetLow, isAtomicArray, resetPlatform, platform } from 'reactxx-sheeter'
import { Consts } from './variants'

export const initSwitch = (force?: boolean) => {
    if (force) resetPlatform()
    if (platform._switch) return
    platform._switch = true
    registerSwitchHandler()
}

const registerSwitchHandler = () => registerVariantHandler({
    name: Consts.name,
    toAtomicRuleset,
    testAtomicRuleset
})

//*********************************************************
//  PRIVATE
//*********************************************************
interface SwitchCondition extends TVariants.Condition {
    type: Consts.name
    case: string
}

const toAtomicRuleset: TVariants.ToAtomicRuleset<Record<string, TSheeter.RulesetOrAtomized>> = (
    list, cases, path, pseudoPrefixes, conditions
) => {
    for (const p in cases) {
        const casep = cases[p]
        if (Array.isArray(casep) && !isAtomicArray(casep))
            casep.forEach((ruleset, idx) =>
                atomizeRulesetLow(
                    ruleset,
                    list,
                    `${path}/$switch.${p}[${idx}]`,
                    pseudoPrefixes,
                    [...conditions, { type: Consts.name, case: p } as SwitchCondition]
                )
            )
        else
            atomizeRulesetLow(
                casep,
                list,
                `${path}/$switch.${p}`,
                pseudoPrefixes,
                [...conditions, { type: Consts.name, case: p } as SwitchCondition])
    }
}

const testAtomicRuleset: TComponents.TestAtomicRuleset = (cond: SwitchCondition, state) => {
    const { propsCode: { sheetQuery } } = state
    return sheetQuery && sheetQuery.$switch && sheetQuery.$switch[cond.case]
}
