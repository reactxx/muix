import React from 'react'
import { TSheeter, TCommonStyles, TVariants } from 'reactxx-typings'
import { processTree, makeTemporary } from '../../utils/atomize-low'
import { intervalToSelector, test } from './parser'
import { QueryState } from '../../utils/to-classnames'

export interface $WidthsQuery extends QueryState {
    actWidth?: number
    breakpoints?: Set<number>
}

const $width = <T extends TCommonStyles.RulesetNativeIds = 'Text'>(interval: number | [number, number], ...rulesets: TSheeter.RulesetNativeOrAtomized<T>[]) => {
    return rulesets && makeTemporary<T>((atomizedVariants, path, pseudoPrefixes, conditions) => {
        if (window.isWeb) {
            // WEB: use media query CSS
            pseudoPrefixes = [...pseudoPrefixes, intervalToSelector(interval)]
        } else {
            // NATIVE: use conditional ruleset
            conditions = [...conditions, {
                type: '$width',
                test: ({ actWidth, breakpoints }: $WidthsQuery = {}) => test(interval, actWidth, breakpoints)
            }]
        }
        processTree(rulesets, atomizedVariants, path + '/$width', pseudoPrefixes, conditions)
    })
}



export default $width