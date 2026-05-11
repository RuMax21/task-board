import { flexRender } from '@tanstack/react-table';
import type { TableHeadProps } from '../types';
import styles from '../Table.module.scss';

export const TableHead = <T extends object>({ table }: TableHeadProps<T>) => {
  return (
    <thead className={styles.thead}>
      {table.getHeaderGroups().map(({ id, headers }) => (
        <tr key={id}>
          {headers.map(header => (
            <th key={header.id} className={styles.th}>
              {flexRender(header.column.columnDef.header, header.getContext())}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  );
};
