import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const ForumOutlineData = 'M4,2C2.9,2 2,2.9 2,4V17L6,13H15C16.1,13 17,12.1 17,11V4C17,2.9 16.1,2 15,2H4M4,4H15V11H6L4,13V4M19,6V8H20V18L18,16H8V15H6V16C6,17.1 6.9,18 8,18H18L22,22V8C22,6.9 21.1,6 20,6H19Z'
export default createSvgIcon(
  ForumOutlineData,
  'ForumOutline',
  true
)