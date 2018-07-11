import * as React from 'react';
import { StandardProps } from 'reactxx-muix/typings';
import { IconButtonProps } from 'reactxx-muix/typings/IconButton/IconButton';

export interface TablePaginationActionsProps extends React.HTMLAttributes<HTMLDivElement> {
  backIconButtonProps?: Partial<IconButtonProps>;
  count: number;
  nextIconButtonProps?: Partial<IconButtonProps>;
  onChangePage: (event: React.MouseEvent<HTMLButtonElement> | null, page: number) => void;
  page: number;
  rowsPerPage: number;
}

declare const TablePaginationActions: React.ComponentType<TablePaginationActionsProps>;

export default TablePaginationActions;
