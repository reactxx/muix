//autogenerated--------------------------------------------------------------------
// 
// This code was generated from material-ui v1.5.0 by reactxx-codemod tool
// (https://github.com/reactxx/reactxx/tree/master/codemod)
// 
//----------------------------------------------------------------------------------

import { TCommon, Types, TProvider, WithStyleCreator as TWithStyleCreator } from 'reactxx-basic';
import withStyles, { Theme, toAtomic } from '../styles/withStyles';
import React from "react";
import PropTypes from "prop-types";
import { classNames } from "reactxx-basic";
import Typography from "../Typography/Typography";
import { StandardProps } from "..";
import { TypographyProps } from "../Typography/Typography";
export interface CardHeaderProps
  extends StandardProps<
      React.HTMLAttributes<HTMLDivElement>,
      CardHeaderClassKey,
      "title"
    > {
  action?: React.ReactNode;
  avatar?: React.ReactNode;
  component?: React.ReactType<CardHeaderProps>;
  disableTypography?: boolean;
  subheader?: React.ReactNode;
  subheaderTypographyProps?: Partial<TypographyProps>;
  title?: React.ReactNode;
  titleTypographyProps?: Partial<TypographyProps>;
}
export type CardHeaderClassKey =
  | "root"
  | "avatar"
  | "action"
  | "content"
  | "title"
  | "subheader";

const styles = theme => ({
  /* Styles applied to the root element. */
  root: theme.mixins.gutters({
    display: "flex",
    alignItems: "center",
    paddingTop: 16,
    paddingBottom: 16
  }),

  /* Styles applied to the avatar element. */
  avatar: {
    flex: "0 0 auto",
    marginRight: 16
  },

  /* Styles applied to the action element. */
  action: {
    flex: "0 0 auto",
    alignSelf: "flex-start",
    marginTop: -8,
    marginRight: -12,
    [theme.breakpoints.up("sm")]: {
      marginRight: -20
    }
  },

  /* Styles applied to the content wrapper element. */
  content: {
    flex: "1 1 auto"
  },

  /* Styles applied to the title Typography element. */
  title: {},

  /* Styles applied to the subheader Typography element. */
  subheader: {}
});

const CardHeader: Types.CodeSFCWeb<Shape> & {
  muiName?: string;
} = props => {
  const {
    action,
    avatar,
    classes,
    className: classNameProp,
    component: Component,
    disableTypography,
    subheader: subheaderProp,
    subheaderTypographyProps,
    title: titleProp,
    titleTypographyProps,
    ...other
  } = props;
  let title: any = titleProp;

  if (title != null && title.type !== Typography && !disableTypography) {
    title = (
      <Typography
        variant={avatar ? "body2" : "headline"}
        className={classes.title}
        component="span"
        {...titleTypographyProps as any}
      >
        {title}
      </Typography>
    );
  }

  let subheader: any = subheaderProp;

  if (
    subheader != null &&
    subheader.type !== Typography &&
    !disableTypography
  ) {
    subheader = (
      <Typography
        variant={avatar ? "body2" : "body1"}
        className={classes.subheader}
        color="textSecondary"
        component="span"
        {...subheaderTypographyProps as any}
      >
        {subheader}
      </Typography>
    );
  }

  return (
    <Component
      className={classNames(classes.root, classNameProp)}
      {...other as any}
    >
      {avatar && <div className={classes.avatar}>{avatar}</div>}
      <div className={classes.content}>
        {title}
        {subheader}
      </div>
      {action && <div className={classes.action}>{action}</div>}
    </Component>
  );
};

export type Shape = Types.OverwriteShape<{
  common: TCommon.ShapeTexts<CardHeaderClassKey>,
  props: CardHeaderProps,
  theme: Theme
}>
export type ComponentType = React.ComponentClass<Types.PropsX<Shape>> & TProvider<Shape>
export type CodeComponentType = Types.CodeComponentType<Shape>
export type SheetCreatorX = Types.SheetCreatorX<Shape>
export type PropsX = Types.PropsX<Shape>
export type CodeProps = Types.CodePropsWeb<Shape>
export type WithStyleCreator = TWithStyleCreator<Shape>

export const defaultProps  = CardHeader.defaultProps = {
  component: 'div',
  disableTypography: false
} as CodeProps;
export const CardHeaderCode: CodeComponentType = CardHeader as any
export const CardHeaderStyles: SheetCreatorX = styles as any
export const CardHeaderCreator: WithStyleCreator = withStyles<Shape>(CardHeaderStyles, CardHeaderCode, {isMui:true, defaultProps});
export const CardHeaderComponent: React.ComponentType<PropsX> = CardHeaderCreator();
if ((CardHeader as any).muiName) (CardHeaderComponent as any).muiName = (CardHeader as any).muiName;


export default CardHeader
