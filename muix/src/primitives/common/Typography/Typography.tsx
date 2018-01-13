import React from 'react'
import ReactN from 'react-native'

import { capitalizeFirstLetter } from 'material-ui/utils/helpers'
import { TypographyNativeX } from 'muix-primitives'
//import { Text as TextRN } from 'react-native'

import { sheetCreator, withStyles } from 'muix-styles'

export const sheet = sheetCreator<MuixTypography.Shape>(({ typographyX: typoX, palette, spacing }) => ({
  root: {
    margin: 0,
    $web: { display: 'block' }
  },
  style: {},
  display4: typoX.display4,
  display3: typoX.display3,
  display2: typoX.display2,
  display1: typoX.display1,
  headline: typoX.headline,
  title: typoX.title,
  subheading: typoX.subheading,
  body2: typoX.body2,
  body1: typoX.body1,
  caption: typoX.caption,
  button: typoX.button,
  alignLeft: { textAlign: 'left' },
  alignCenter: { textAlign: 'center', },
  alignRight: { textAlign: 'right', },
  alignJustify: {
    $web: { textAlign: 'justify' }
  },
  noWrap: {
    $web: {
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
    },
    $native: {
      ellipsizeMode: 'tail',
      numberOfLines: 1
    } as any
  },
  gutterBottom: {
    $web: { marginBottom: '0.35em' },
    $native: { marginBottom: 0.35 * 16 }
  },
  paragraph: {
    marginBottom: spacing.unit * 2,
  },
  colorInherit: {
    $web: { color: 'inherit', }
  },
  colorPrimary: { color: palette.primary[500], },
  colorSecondary: { color: palette.text.secondary }, 
  colorAccent: { color: palette.secondary.A400, },
  colorError: { color: palette.error.A400, },
}))

const typography: Muix.CodeSFCNative<MuixTypography.Shape> = (props => {
  const {
    align = 'inherit',
    classes,
    color = 'default',
    gutterBottom,
    noWrap,
    paragraph,
    type = 'body1',
    style,
    getStyleWithSideEffect,
    theme, flip, innerRef,
    children,
    ...rest
  } = props

  console.log('### typography', color, classes)

  const className = getStyleWithSideEffect(
    classes.root,
    classes[type],
    color !== 'default' && classes[`color${capitalizeFirstLetter(color)}`],
    gutterBottom && classes.gutterBottom,
    paragraph && classes.paragraph,
    align !== 'inherit' && classes[`align${capitalizeFirstLetter(align)}`],
    classes.style,
  )

  console.log(className)
  return <TypographyNativeX
    className={className} style={style}
    $native={rest as ReactN.ScrollViewProperties} $web={rest as React.HTMLAttributes<HTMLDivElement>}
    $type={type}
    $noWrapStyle={noWrap && classes.noWrap}
    children={children} />
})

const Typography = withStyles<MuixTypography.Shape>(sheet, { name: 'MuiTypography' })(typography)

export default Typography