import { getCoreRowModel, useReactTable } from '@tanstack/react-table';
import type { TableProps } from './types';
import styles from './Table.module.scss';
import { TableBody, TableHead } from './components';

export const Table = <T extends object>({
  rows,
  columns,
  onRowClick,
  noDataComponent,
}: TableProps<T>) => {
  const table = useReactTable({
    data: rows,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <TableHead table={table} />
        <TableBody
          table={table}
          onRowClick={onRowClick}
          noDataComponent={noDataComponent}
        />
      </table>
    </div>
  );
};
