import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const CoffeeOutlineData = 'M2,21V19H20V21H2M20,8V5H18V8H20M20,3C21.1,3 22,3.9 22,5V8C22,9.1 21.1,10 20,10H18V13C18,15.21 16.21,17 14,17H8C5.79,17 4,15.21 4,13V3H20M16,5H6V13C6,14.1 6.9,15 8,15H14C15.1,15 16,14.1 16,13V5Z'
export default createSvgIcon(
  CoffeeOutlineData,
  'CoffeeOutline',
  true
)