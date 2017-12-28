import React from 'react'
import Button from 'muix-components/Button/Button'
import { AppContainer, MuiThemeProvider, createMuiTheme } from 'muix-styles'
//import color from 'material-ui/colors/orange'

import { View } from 'muix-primitives'

//import Cancel from 'material-ui/svg-icons/Cancel'

//const theme = createMuiTheme({
//  overrides: {
//    [Mui.Names.Icon]: {
//      common: {
//        colorInherit: iconColor(color[500]), 
//      }
//    } as Mui.Sheet<MuiIcon.ISheet>
//  }
//})

const app: React.SFC = props => <AppContainer>
  <View style={{ marginTop: 60 }}>
    <Button color='primary' raised onClick={ev => ev && ev.preventDefault()}>Hallo Button</Button>
  </View>
</AppContainer>

export default app
//export default app2