import React from 'react'
import { MuiThemeContextTypes } from './index'
import { MuiThemeProviderInner } from 'muix-styles'

class MuiThemeProvider extends React.PureComponent<Muix.IMuiThemeProps> {

  constructor(props, context: Muix.MuiThemeContextValue) {
    super(props, context)
    this.localTheme = this.mergeOuterLocalTheme(context.theme)
  }

  localTheme: Muix.ThemeNew

  getChildContext(): Muix.MuiThemeContextValue {
    return { theme: this.localTheme }
  }

  mergeOuterLocalTheme(outerTheme: Muix.ThemeNew) {
    const { props: { theme } } = this
    if (typeof theme === 'function') return theme(outerTheme)
    return theme
    //if (!outerTheme) return theme
    //return { ...outerTheme, ...theme };
  }

  render() {
    const child = React.Children.only(this.props.children)
    return MuiThemeProviderInner ? <MuiThemeProviderInner theme={this.localTheme}>{child} </MuiThemeProviderInner> : child
  }

  static childContextTypes = MuiThemeContextTypes
  static contextTypes = MuiThemeContextTypes
}

export default MuiThemeProvider