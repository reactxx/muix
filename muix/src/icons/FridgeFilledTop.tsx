import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const FridgeFilledTopData = 'M7,2C5.9,2 5,2.9 5,4V19C5,20.1 5.9,21 7,21V22H9V21H15V22H17V21C18.1,21 19,20.1 19,19V4C19,2.9 18.1,2 17,2H7M8,6H10V8H8V6M7,11H17V19H7V11M8,12V15H10V12H8Z'
export default createSvgIcon(
  FridgeFilledTopData,
  'FridgeFilledTop',
  true
)