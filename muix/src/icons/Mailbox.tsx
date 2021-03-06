import React from 'react'
import ReactN from 'react-native';
import createSvgIcon from 'reactxx-mui-web/internal/svg-icons/create-svg-icon'
import { SvgIconProps, Shape } from 'reactxx-mui-web/SvgIcon/SvgIcon'

import { Types, TAddIn } from 'reactxx-basic'; 

export const MailboxData = 'M20,6H10V12H8V4H14V0H6V6H4C2.9,6 2,6.9 2,8V20C2,21.1 2.9,22 4,22H20C21.1,22 22,21.1 22,20V8C22,6.9 21.1,6 20,6Z'
export default createSvgIcon(
  MailboxData,
  'Mailbox',
  true
)