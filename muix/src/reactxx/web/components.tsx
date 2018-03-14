import React from 'react'
import ReactN from 'react-native'
import warning from 'warning'
import { rulesetsToClassNames } from './fela'

import { withStyles } from '../common/withStyles'
import * as sheets from '../common/components'

const view: ReactXX.CodeSFCWeb<ReactXX.ViewShape> = props => {
  const { style, classes, className, mergeRulesetWithOverrides, theme, animations, mediaq,...rest } = props
  const rootStyle = mergeRulesetWithOverrides(classes.root, className)
  return <div className={rulesetsToClassNames(rootStyle)} style={style} {...rest} />
}

const icon: ReactXX.CodeSFCWeb<ReactXX.IconShape> = props => {
  const { style, classes, className, data, mergeRulesetWithOverrides, theme, animations, viewBox, children/*this children*/, mediaq, url, onClick, ...rest } = props
  const rootStyle = mergeRulesetWithOverrides(classes.root, onClick && classes.pressable, className)
  //replace fontSize with width x height
  if (rootStyle.fontSize) { rootStyle.height = rootStyle.width = rootStyle.fontSize; delete rootStyle.fontSize }
  if (style && style.fontSize) { style.height = style.width = style.fontSize; delete style.fontSize }
  const svg = <svg className={rulesetsToClassNames(rootStyle)} style={style} focusable='false' viewBox={viewBox || '0 0 24 24'} onClick={url ? undefined : onClick} {...rest}>
    {data && <path d={data} />}
    {!data && children}
  </svg>
  return url ? <a href={url}>{svg}</a> : svg
}

const text: ReactXX.CodeSFCWeb<ReactXX.TextShape> = props => {
  const { style, classes, className, numberOfLines, mergeRulesetWithOverrides, theme, animations, mediaq, url, onClick, ...rest } = props
  const rootStyle = mergeRulesetWithOverrides(classes.root, onClick && classes.pressable, numberOfLines === 1 && classes.singleLineStyle, className) 
  const tagProps = { className: ReactXX.CompNames.textClassName + ' ' + rulesetsToClassNames(rootStyle), style, ...rest, onClick: url ? undefined : onClick, ...rootStyle.$props }
  return url ? <a href={url} {...tagProps} /> : <div {...tagProps}/>
}

const scrollView: ReactXX.CodeSFCWeb<ReactXX.ScrollViewShape> = props => {
  const { style, classes, className, horizontal, mergeRulesetWithOverrides, theme, animations, children, mediaq,...rest } = props
  const rootStyle = mergeRulesetWithOverrides(classes.root, horizontal && classes.rootHorizontal, className)
  const containerStyle = mergeRulesetWithOverrides(classes.container, horizontal && classes.containerHorizontal)
  //checkChildLayoutProps(style); checkChildLayoutProps(className)
  return <div className={rulesetsToClassNames(rootStyle)} style={style} {...rest}>
    <div className={rulesetsToClassNames(containerStyle)}>
      {children}
    </div>
  </div>
}

const animatedView = view
const animatedIcon = icon
const animatedText = text
const animatedScrollView = scrollView

export const Text = withStyles<ReactXX.TextShape>(ReactXX.CompNames.Text, sheets.textSheet)(text)
export const AnimatedText = withStyles<ReactXX.TextShape>(ReactXX.CompNames.AnimatedText, sheets.textSheet)(animatedText)
export const View = withStyles<ReactXX.ViewShape>(ReactXX.CompNames.View, sheets.viewSheet)(view)
export const AnimatedView = withStyles<ReactXX.ViewShape>(ReactXX.CompNames.AnimatedView, sheets.viewSheet)(animatedView)
export const Icon = withStyles<ReactXX.IconShape>(ReactXX.CompNames.Icon, sheets.iconSheet)(icon)
export const AnimatedIcon = withStyles<ReactXX.IconShape>(ReactXX.CompNames.AnimatedIcon, sheets.iconSheet)(animatedIcon)
export const ScrollView = withStyles<ReactXX.ScrollViewShape>(ReactXX.CompNames.ScrollView, sheets.scrollViewSheet)(scrollView)
export const AnimatedScrollView = withStyles<ReactXX.ScrollViewShape>(ReactXX.CompNames.AnimatedScrollView, sheets.scrollViewSheet)(animatedScrollView)

//const checkChildLayoutProps = (css: React.CSSProperties) => {
//  if (/*process.env.NODE_ENV === 'production' ||*/ !css) return
//  const childLayoutProps = ['alignItems', 'justifyContent'].filter(prop => css && css[prop] !== undefined)
//  warning(childLayoutProps.length === 0, `ScrollView child layout (${JSON.stringify(childLayoutProps)}) must be applied through the contentContainerStyle prop.`)
//}
