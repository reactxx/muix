import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const OarData = 'M20.23,15.21C18.77,13.75 14.97,10.2 12.77,11.27L4.5,3L3,4.5L11.28,12.79C10.3,15 13.88,18.62 15.35,20.08C17.11,21.84 18.26,20.92 19.61,19.57C21.1,18.08 21.61,16.61 20.23,15.21Z'
export default createSvgIcon(
  OarData,
  'Oar',
  true
)