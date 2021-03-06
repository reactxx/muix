import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const CallReceivedData = 'M20 5.41L18.59 4 7 15.59V9H5v10h10v-2H8.41z'
export default createSvgIcon(
  CallReceivedData,
  'CallReceived',
  false
)