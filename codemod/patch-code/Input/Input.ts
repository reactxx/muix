import * as Ast from '../../utils/ast'
import * as Tasks from '../../tasks/default-modifier'
import * as Parser from '../../utils/parser'
import * as Queries from '../../utils/queries'

import { Specials } from '../../tasks'

export const registerInput = (specials: Specials) => {
    specials['Input/Input'] = {
        transform: (ast, info) => {
            const func = Tasks.getRenderFunc(ast, info.name)
            const body = func.body.body as any[];
            const returnIdx = body.findIndex(node => node.type === 'ReturnStatement')
            body.splice(returnIdx, 0, Parser.parseCode("if (typeof InputComponent === 'string') inputClassName = classNamesStr(inputClassName); else inputProps.$system = this.props.$system;"))
            const res = Tasks.withStylesTaskDefaultCreator()(ast, info)
            //před 'return' of RENDER funkce dat:
            //if (typeof InputComponent === 'string') inputClassName = classNamesStr(inputClassName); else inputProps.$system = this.props.$system;
            return res
        }
    }
}
