﻿import React from 'react'
import { platform, useWidths } from 'reactxx-styles';
import { TTyped, TComponents, O} from 'reactxx-typings';
import { useConfig } from './use-config';
import { useDefaults } from './use-defaults';
import { useProps } from './use-props';
import { useTheme } from './use-theme';

export const useSheeterUntyped = (props, authorConfig, displayName, userConfig?) => useSheeter(props, authorConfig, displayName, userConfig) as any

const useSheeter = <R extends TTyped.Shape = TTyped.Shape>(
    props: TComponents.Props<R>,
    authorConfig: TComponents.AuthorConfig<R>,
    displayName: string,
    userConfig?: TComponents.UserConfig<R>
) => {

    const config = useConfig(authorConfig, userConfig)

    // theme
    const [theme] = useTheme<TTyped.getTheme<R>>()

    // from defaults
    const { sheet, propsDefault, themedPropsDefault, propsOverride, themedPropsOverride
    } = useDefaults(theme, config, displayName)

    // from props
    const { classes, className, style, propsRest, themedProps
    } = useProps<R>(theme, sheet, props)

    // this component isntance unique ID
    const uniqueIdRef = React.useRef(0) // unique ID
    if (!uniqueIdRef.current) uniqueIdRef.current = ++platform._styles.instanceIdCounter

    // widths
    const [, forceUpdate] = React.useState<never>(null)
    const { actWidth, getWidthMap, breakpoints } = useWidths(uniqueIdRef.current, forceUpdate)

    // merge props with default's
    const propsCode: TTyped.PropsCode<R> = {
        $widths: { actWidth, breakpoints },
    }
    mergeCodeProps(propsCode, [
        propsDefault, themedPropsDefault && themedPropsDefault(theme),
        propsOverride, themedPropsOverride && themedPropsOverride(theme),
        propsRest, themedProps && themedProps(theme),
    ])

    const styleWeb = (...rulesets: TTyped.RulesetSimple[]) =>
        platform.styleProps(propsCode, rulesets) as TTyped.StylePropsWeb
    const styleRootWeb = (...rulesets: TTyped.RulesetSimple[]) =>
        platform.styleProps(propsCode, rulesets.length>0 ? rulesets : [classes['root']], className, style) as TTyped.StylePropsWeb

    const styleNative = <R extends TTyped.RulesetIds>(...rulesets: TTyped.RulesetSimple<R>[]) =>
        platform.styleProps(propsCode, rulesets) as TTyped.StylePropsNative<R>
    const styleRootNative = <R extends TTyped.RulesetIds = O>(...rulesets: TTyped.RulesetSimple<R>[]) =>
        platform.styleProps(propsCode, rulesets.length>0 ? rulesets : [classes['root']], className, style) as TTyped.StylePropsNative<R>

    return { propsCode, classes, className, style, getWidthMap, styleNative, styleRootNative, styleWeb, styleRootWeb,  }
}

const mergeCodeProps = (propsCode: TTyped.PropsCode | any, props: TComponents.Props[]) => {
    if (!props || props.length === 0) return
    let rootWebProps, rootNativeProps, rootProps
    for (const p of props) {
        if (!p) continue
        Object.assign(propsCode, p)
        // merge child component root props
        const { $rootWebProps, $rootNativeProps, $rootProps } = p
        $rootWebProps && Object.assign(rootWebProps || (rootWebProps = {}), $rootWebProps)
        $rootNativeProps && Object.assign(rootNativeProps || (rootNativeProps = {}), $rootNativeProps)
        $rootProps && Object.assign(rootProps || (rootProps = {}), $rootProps)
    }
    if (rootWebProps) propsCode.$rootWebProps = rootWebProps
    if (rootNativeProps) propsCode.$rootNativeProps = rootNativeProps
    if (rootProps) propsCode.$rootProps = rootProps
}

export default useSheeter