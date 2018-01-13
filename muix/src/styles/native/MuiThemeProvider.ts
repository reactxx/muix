import React from 'react'
import { MuiThemeContextTypes } from '../common/index'

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
    return React.Children.only(this.props.children)
  }

  static childContextTypes = MuiThemeContextTypes
  static contextTypes = MuiThemeContextTypes
}

export default MuiThemeProvider