import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const ElephantData = 'M19.5,15.5C19.5,15.78 19.28,16 19,16C18.72,16 18.5,15.78 18.5,15.5V8.5C18.5,6.57 16.43,5 14.5,5H6C3.79,5 2,6.79 2,9V19H6V15H11V19H15V14.5C15,14.22 15.22,14 15.5,14C15.78,14 16,14.22 16,14.5V16C16,17.66 17.34,19 19,19C20.66,19 22,17.66 22,16V14H19.5V15.5Z'
export default createSvgIcon(
  ElephantData,
  'Elephant',
  true
)