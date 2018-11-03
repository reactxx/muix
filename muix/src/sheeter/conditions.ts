import warning from 'warning'
import { TVariants, TWithStyles } from 'reactxx-typings'
import { platform } from 'reactxx-sheeter'
import { IVariantHandler } from './variants'

export const registerVariantHandler = (handler: IVariantHandler) => {
    const { variantHandlers, variantHandlersDir } = platform._sheeter
    warning(handler && handler.name && handler.testAtomicRuleset && handler.toAtomicRuleset && !variantHandlersDir[handler.name], `"${handler.name}" variant already registered (or not "par.name && par.testCondition && par.toVariantProc")`)
    variantHandlers.push(handler)
    variantHandlersDir[handler.name] = handler
}

// process variant part of ruleset: $switch, $transition etc.
export const atomizeVariants: TVariants.ToAtomicRuleset<TVariants.VariantPart> = 
    (list, ruleset, path, pseudoPrefixes, conditions, rulesetToQueue) => {
        const { variantHandlers } = platform._sheeter
        variantHandlers.forEach(variantHandler => {
            // for every variant handler ...
            const rulesetsVariant = ruleset[variantHandler.name]
            // ... does exist variant in ruleset?
            if (!rulesetsVariant) return
            // ... apply handler proc to ruleset's variant
            variantHandler.toAtomicRuleset(list, rulesetsVariant, path, pseudoPrefixes, conditions, rulesetToQueue)
        })
    }

export const testConditions = (conditions: TVariants.Conditions, state: TWithStyles.PipelineState) => {
    if (!conditions || conditions.length === 0) return true
    const { variantHandlersDir } = platform._sheeter
    const findWrong = conditions.find(cond => {
        warning(variantHandlersDir[cond.type], `Missing initVariant${cond.type} call`)
        return !variantHandlersDir[cond.type].testAtomicRuleset(cond, state)
    })
    return !findWrong
}