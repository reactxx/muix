import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const SendSecureData = 'M23,18V17.5C23,16.12 21.88,15 20.5,15C19.12,15 18,16.12 18,17.5V18C17.45,18 17,18.45 17,19V23C17,23.55 17.45,24 18,24H23C23.55,24 24,23.55 24,23V19C24,18.45 23.55,18 23,18M22,18H19V17.5C19,16.67 19.67,16 20.5,16C21.33,16 22,16.67 22,17.5V18M23,12L2,21V14L17,12L2,10V3L23,12Z'
export default createSvgIcon(
  SendSecureData,
  'SendSecure',
  true
)