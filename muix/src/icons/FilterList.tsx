import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const FilterListData = 'M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z'
export default createSvgIcon(
  FilterListData,
  'FilterList',
  false
)