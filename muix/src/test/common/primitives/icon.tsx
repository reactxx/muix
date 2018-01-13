import React from 'react'
import { Icon, iconColor, iconSize } from 'muix-primitives'
import { AppContainer, MuiThemeProvider, createMuiTheme } from 'muix-styles'
import color from 'material-ui/colors/orange'

import { Text, View } from 'muix-primitives'

const theme = createMuiTheme({
  overridesNew: {
    MuiIcon: {
      colorInherit: iconColor(color[500]),
    }
  }
})

const app2: React.SFC = props => <AppContainer>
  <Icon children={MuixIcons.ArrowDownBoldBox} style={iconColor('brown')} classes={{ root: iconSize(36) }} />
</AppContainer>


const app: React.SFC = props => <View style={{ flexShrink: 0 }}>
  <Icon children={MuixIcons.ArrowDownBoldBox} />
  <Icon children={MuixIcons.ArrowDownBoldBox} color='inherit' />
  <Icon children={MuixIcons.ArrowDownBoldBox} color='accent' />
  <Icon children={MuixIcons.ArrowDownBoldBox} color='action' />
  <View style={{ backgroundColor: 'darkgray', padding: 5 }}>
    <Icon children={MuixIcons.ArrowDownBoldBox} color='contrast' />
  </View>
  <Icon children={MuixIcons.ArrowDownBoldBox} color='disabled' />
  <Icon children={MuixIcons.ArrowDownBoldBox} color='error' />
  <Icon children={MuixIcons.ArrowDownBoldBox} color='primary' />
  <Icon children={MuixIcons.ArrowDownBoldBox} style={iconColor('brown')} />
  <Icon children={MuixIcons.ArrowDownBoldBox} classes={{ colorInherit: iconColor('green') }} />
  <Icon children={MuixIcons.ArrowDownBoldBox} classes={{ root: iconSize(32) }} />
  <MuiThemeProvider theme={theme}>
    <View>
      <Icon children={MuixIcons.ArrowDownBoldBox} />
      <Icon children={MuixIcons.ArrowDownBoldBox} classes={{ colorInherit: iconColor(color[200]) }} />
    </View>
  </MuiThemeProvider>
</View>

export default app
//export default app2