//autogenerated--------------------------------------------------------------------
// 
// This code was generated from material-ui v3.0.0 by reactxx-codemod tool
// (https://github.com/reactxx/reactxx/tree/master/codemod)
// 
//----------------------------------------------------------------------------------

import { TCommon, Types, TProvider, WithStyleCreator as TWithStyleCreator } from 'reactxx-basic';
import withStyles, { Theme, toAtomic } from '../styles/withStyles';
import React from "react";
import PropTypes from "prop-types";
import { classNames } from "reactxx-basic";
import { capitalize } from "../utils/helpers";
import { isHorizontal } from "../Drawer/Drawer";

const styles = theme => ({
  /* Styles applied to the root element. */
  root: {
    $web: {
      position: "fixed",
      top: 0,
      left: 0,
      bottom: 0,
      zIndex: theme.zIndex.drawer - 1
    }
  },
  anchorLeft: {
    $web: {
      right: "auto"
    }
  },
  anchorRight: {
    $web: {
      left: "auto",
      right: 0
    }
  },
  anchorTop: {
    $web: {
      bottom: "auto",
      right: 0
    }
  },
  anchorBottom: {
    $web: {
      top: "auto",
      bottom: 0,
      right: 0
    }
  }
});
/**
 * @ignore - internal component.
 */

const SwipeArea: Types.CodeSFCWeb<Shape> & {
  muiName?: string;
} = props => {
  const { anchor, classes, width, ...other } = props;
  return (
    <div
      className={classNames(
        classes.root,
        classes[`anchor${capitalize(anchor)}`]
      )}
      style={{
        [isHorizontal(props) ? "width" : "height"]: width
      }}
      {...other as any}
    />
  );
};

export interface SwipeAreaProps {
  anchor?;
  width?;
}

export interface Shape extends Types.ShapeDefault {
  
  props: SwipeAreaProps
  style: 'Text'
  theme: Theme
}
export type ComponentType = React.ComponentClass<Types.PropsX<Shape>> & TProvider<Shape>
export type CodeComponentType = Types.CodeComponentType<Shape>
export type SheetCreatorX = Types.SheetCreatorX<Shape>
export type PropsX = Types.PropsX<Shape>
export type CodeProps = Types.CodePropsWeb<Shape>
export type WithStyleCreator = TWithStyleCreator<Shape>

export const defaultProps  = SwipeArea.defaultProps = {} as CodeProps;
export const SwipeAreaCode: CodeComponentType = SwipeArea as any
export const SwipeAreaStyles: SheetCreatorX = styles as any
export const SwipeAreaCreator: WithStyleCreator = withStyles<Shape>(SwipeAreaStyles, SwipeAreaCode, {isMui:true, defaultProps});
export const SwipeAreaComponent: React.ComponentType<PropsX> = SwipeAreaCreator();
if ((SwipeArea as any).muiName) (SwipeAreaComponent as any).muiName = (SwipeArea as any).muiName;


export default SwipeAreaComponent