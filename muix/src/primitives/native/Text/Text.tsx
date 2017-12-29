﻿import React from 'react'
import ReactN from 'react-native'

import { classNames, withStyles } from 'muix-styles'
import { sheet } from '../../common/Text/Text' 
import { Text as RNText } from 'react-native' 

const text: Muix.CodeSFCNative<MuixText.Shape> = props => {
  const { classes, style, innerRef, ...rest } = props
  return <RNText style={classNames<ReactN.TextStyle>(classes.root, style)} ref={div => innerRef && innerRef(div)} {...rest} />
}

const Text = withStyles<MuixText.Shape>(sheet, { name: 'MuiText' })(text)

export default Text