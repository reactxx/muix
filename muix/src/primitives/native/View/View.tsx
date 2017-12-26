﻿import React from 'react'
import ReactN from 'react-native'

import { classNames, withStyles } from 'muix-styles'
import { sheet, Shape} from '../../common/View/View' 
import { View as RNView } from 'react-native' 

const view: Mui.CodeSFCNative<Shape> = props => {
  const { classes, style, innerRef, ...rest } = props
  return <RNView style={classNames(classes.root, style)} ref={div => innerRef && innerRef(div)} {...rest} />
}

const View = withStyles<Shape>(sheet, { name: 'MuiView' })(view)

export default View