import type { ColumnDef, Table } from '@tanstack/react-table';
import type { ReactNode } from 'react';

export interface TableProps<T extends object> {
  rows: T[];
  columns: ColumnDef<T, unknown>[];
  onRowClick?: (row: T) => void;
  noDataComponent?: ReactNode;
}

export interface TableHeadProps<T extends object> {
  table: Table<T>;
}

export interface TableBodyProps<T extends object> {
  table: Table<T>;
  onRowClick?: (row: T) => void;
  noDataComponent?: ReactNode;
}
