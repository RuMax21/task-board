import { flexRender } from '@tanstack/react-table';
import type { TableBodyProps } from '../types';
import styles from '../Table.module.scss';

export const TableBody = <T extends object>({
  table,
  onRowClick,
  noDataComponent,
}: TableBodyProps<T>) => {
  if (!table.getRowModel().rows.length && noDataComponent) {
    return (
      <tbody>
        <tr>
          <td
            colSpan={table.getAllColumns().length}
            className={styles.emptyList}
          >
            {noDataComponent}
          </td>
        </tr>
      </tbody>
    );
  }

  return (
    <tbody>
      {table.getRowModel().rows.map(row => (
        <tr key={row.id} onClick={() => onRowClick?.(row.original)}>
          {row.getVisibleCells().map(cell => (
            <td key={cell.id} className={styles.td}>
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};
