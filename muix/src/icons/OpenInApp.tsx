import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const OpenInAppData = 'M12,10L8,14H11V20H13V14H16M19,4H5C3.89,4 3,4.9 3,6V18C3,19.1 3.9,20 5,20H9V18H5V8H19V18H15V20H19C20.1,20 21,19.1 21,18V6C21,4.9 20.1,4 19,4Z'
export default createSvgIcon(
  OpenInAppData,
  'OpenInApp',
  true
)