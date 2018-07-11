import * as React from 'react';
import { StandardProps } from 'reactxx-muix/typings';
import { Orientation } from 'reactxx-muix/typings/Stepper';

export type StepConnectorIcon = React.ReactElement<any> | string | number;

export interface StepConnectorProps
  extends StandardProps<React.HTMLAttributes<HTMLDivElement>, StepConnectorClasskey> {
  alternativeLabel?: boolean;
  orientation?: Orientation;
}

export type StepConnectorClasskey =
  | 'root'
  | 'horizontal'
  | 'vertical'
  | 'alternativeLabel'
  | 'line'
  | 'lineHorizontal'
  | 'lineVertical';

declare const StepConnector: React.ComponentType<StepConnectorProps>;

export default StepConnector;
