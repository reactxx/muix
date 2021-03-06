import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const TrackpadData = 'M4,3H20C21.1,3 22,3.9 22,5V19C22,20.1 21.1,21 20,21H4C2.9,21 2,20.1 2,19V5C2,3.9 2.9,3 4,3M4,5V13H20V5H4M4,19H11V15H4V19M20,19V15H13V19H20Z'
export default createSvgIcon(
  TrackpadData,
  'Trackpad',
  true
)