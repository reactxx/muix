import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const CiscoWebexData = 'M12,3C16.97,3 21,7.03 21,12C21,16.97 16.97,21 12,21C7.03,21 3,16.97 3,12C3,7.03 7.03,3 12,3M5.94,8.5C4,11.85 5.15,16.13 8.5,18.06C11.85,20 18.85,7.87 15.5,5.94C12.15,4 7.87,5.15 5.94,8.5Z'
export default createSvgIcon(
  CiscoWebexData,
  'CiscoWebex',
  true
)