import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const HospitalBuildingData = 'M2,22V7C2,6.45 2.45,6 3,6H7V2H17V6H21C21.55,6 22,6.45 22,7V22H14V17H10V22H2M9,4V10H11V8H13V10H15V4H13V6H11V4H9M4,20H8V17H4V20M4,15H8V12H4V15M16,20H20V17H16V20M16,15H20V12H16V15M10,15H14V12H10V15Z'
export default createSvgIcon(
  HospitalBuildingData,
  'HospitalBuilding',
  true
)