import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const ImportData = 'M14,12L10,8V11H2V13H10V16M20,18V6C20,4.89 19.1,4 18,4H6C4.9,4 4,4.9 4,6V9H6V6H18V18H6V15H4V18C4,19.1 4.9,20 6,20H18C19.1,20 20,19.1 20,18Z'
export default createSvgIcon(
  ImportData,
  'Import',
  true
)