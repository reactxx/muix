import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const PotMixData = 'M19,19C19,20.1 18.1,21 17,21H7C5.9,21 5,20.1 5,19V13H3V10H14L18,3.07L19.73,4.07L16.31,10H21V13H19V19Z'
export default createSvgIcon(
  PotMixData,
  'PotMix',
  true
)