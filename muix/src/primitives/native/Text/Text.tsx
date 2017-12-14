﻿import React from 'react'

import { classNames, withStyles } from 'muix-styles/native/withStyles'
import { sheet } from 'muix-primitives/common/Text/Text' 
import { Text as RNText } from 'react-native' 

const text: Mui.CodeSFCNative<MuiText.Shape> = props => {
  const { classes, style, innerRef, ...rest } = props
  return <RNText style={classNames<ReactN.TextStyle>(classes.root, style)} ref={div => innerRef && innerRef(div)} {...rest} />
}

const Text = withStyles<MuiText.Shape>(sheet, { name: 'MuiText' })(text)

export default Text