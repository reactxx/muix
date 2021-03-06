import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const UploadMultipleData = 'M9,14V8H5L12,1L19,8H15V14H9M5,18V16H19V18H5M19,20H5V22H19V20Z'
export default createSvgIcon(
  UploadMultipleData,
  'UploadMultiple',
  true
)