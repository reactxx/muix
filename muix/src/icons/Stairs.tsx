import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const StairsData = 'M15,5V9H11V13H7V17H3V20H10V16H14V12H18V8H22V5H15Z'
export default createSvgIcon(
  StairsData,
  'Stairs',
  true
)