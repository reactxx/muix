﻿import React from 'react'

import { toPlatformSheet, withStyles, classNames } from 'muix-styles'

import { MaterialCommunityIcons as MIcon } from '@expo/vector-icons'

import { getClasses, sheet } from '../../common/Icon/Icon'

const icon: Muix.CodeSFCNative<MuixIcon.Shape> = props => {
  const { classes: { iconClass }, name, style, rest, innerRef } = getClasses<Muix.RNIconStyle>(props)
  return <MIcon name={name as any} style={classNames(style as Muix.RNIconStyle, ...iconClass)} ref={div => innerRef && innerRef(div)} {...rest} />
}

let t: Muix.SheetNative<MuixIcon.Shape>


const Icon = withStyles<MuixIcon.Shape>(sheet, { name: 'MuiIcon' })(icon)

export default Icon
