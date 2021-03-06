import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const UmbrellaData = 'M12,2C16.97,2 21,6.03 21,11H13V19C13,20.66 11.66,22 10,22C8.34,22 7,20.66 7,19V18H9V19C9,19.55 9.45,20 10,20C10.55,20 11,19.55 11,19V11H3C3,6.03 7.03,2 12,2Z'
export default createSvgIcon(
  UmbrellaData,
  'Umbrella',
  true
)