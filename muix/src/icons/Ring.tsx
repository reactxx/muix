import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const RingData = 'M12,10L8,4.4L9.6,2H14.4L16,4.4L12,10M15.5,6.8L14.3,8.5C16.5,9.4 18,11.5 18,14C18,17.31 15.31,20 12,20C8.69,20 6,17.31 6,14C6,11.5 7.5,9.4 9.7,8.5L8.5,6.8C5.8,8.1 4,10.8 4,14C4,18.42 7.58,22 12,22C16.42,22 20,18.42 20,14C20,10.8 18.2,8.1 15.5,6.8Z'
export default createSvgIcon(
  RingData,
  'Ring',
  true
)