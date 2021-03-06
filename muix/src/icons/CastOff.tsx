import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const CastOffData = 'M1.6,1.27L0.25,2.75L1.41,3.8C1.16,4.13 1,4.55 1,5V8H3V5.23L18.2,19H14V21H20.41L22.31,22.72L23.65,21.24M6.5,3L8.7,5H21V16.14L23,17.95V5C23,3.89 22.1,3 21,3M1,10V12C5.97,12 10,16.03 10,21H12C12,14.92 7.08,10 1,10M1,14V16C3.76,16 6,18.24 6,21H8C8,17.13 4.87,14 1,14M1,18V21H4C4,19.34 2.66,18 1,18Z'
export default createSvgIcon(
  CastOffData,
  'CastOff',
  true
)