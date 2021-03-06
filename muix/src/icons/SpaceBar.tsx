import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const SpaceBarData = 'M18 9v4H6V9H4v6h16V9z'
export default createSvgIcon(
  SpaceBarData,
  'SpaceBar',
  false
)