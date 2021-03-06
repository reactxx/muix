import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const ArrowDropDownData = 'M7 10l5 5 5-5z'
export default createSvgIcon(
  ArrowDropDownData,
  'ArrowDropDown',
  false
)