import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const VectorPolylineData = 'M16,2V8H17.08L14.95,13H14.26L12,9.97V5H6V11H6.91L4.88,16H2V22H8V16H7.04L9.07,11H10.27L12,13.32V19H18V13H17.12L19.25,8H22V2M18,4H20V6H18M8,7H10V9H8M14,15H16V17H14M4,18H6V20H4'
export default createSvgIcon(
  VectorPolylineData,
  'VectorPolyline',
  true
)