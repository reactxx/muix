import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const PentagonData = 'M12,2.5L2,9.8L5.8,21.5H18.2L22,9.8L12,2.5Z'
export default createSvgIcon(
  PentagonData,
  'Pentagon',
  true
)