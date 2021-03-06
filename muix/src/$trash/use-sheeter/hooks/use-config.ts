﻿import React from 'react'
import warning from 'warning'

import { platform } from 'reactxx-sheeter'

import { TTyped, TComponents } from 'reactxx-typings';

export const useConfig = <R extends TTyped.Shape = TTyped.Shape>(
    authorConfig: TComponents.AuthorConfig<R>,
    userConfig?: TComponents.UserConfig<R>
) => {

    // configs check
    //if (!authorConfig)
        //throw 'authorConfig expected'

    const authorConfigRef = React.useRef(authorConfig)
    const userConfigRef = React.useRef(userConfig)
    if (authorConfigRef.current !== authorConfig || userConfigRef.current != userConfig)
        warning(false, 'authorConfig or userConfig changed. Last version will be ignored.')

    const { _useSheeter } = platform

    if (authorConfig && !authorConfig.id)
        authorConfig.id = ++_useSheeter.configIdCounter


    if (userConfig) {
        const authorConfigId = authorConfig ? authorConfig.id : -1
        if (!userConfig.id) { // first userConfigussage
            userConfig.id = ++_useSheeter.configIdCounter
            userConfig.myAuthorConfigId = authorConfigId // connect it to authorConfig
            // config merging: keep userConfig pointer, change its content
            const value = Object.assign({}, authorConfig, userConfig)
            Object.assign(userConfig, value)
        } else if (userConfig.myAuthorConfigId != authorConfigId)
            warning(false, 'userConfig already inherited from different authorConfig. Last authorConfig ignored.')
    }

    return userConfig || authorConfig || {}
}