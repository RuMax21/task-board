import { useDroppable } from '@dnd-kit/react';
import type { ReactElement } from 'react';
import type { KanbanColumnProps } from '../model/types';
import { TaskCard } from '@/entities/task/ui';
import { NoData } from '@/shared/ui/NoData';
import { useLanguage } from '@/shared/i18n';
import styles from './KanbanColumn.module.scss';

export function KanbanColumn({
  status,
  tasks,
  onTaskClick,
}: KanbanColumnProps): ReactElement {
  const { ref } = useDroppable({ id: status });
  const { text } = useLanguage();

  return (
    <div className={styles.column} ref={ref}>
      <h3 className={styles.title}>{status}</h3>
      <div className={styles.cards}>
        {tasks.length !== 0 ? (
          tasks.map(task => (
            <TaskCard key={task.id} task={task} onClick={onTaskClick} />
          ))
        ) : (
          <NoData message={text.error.noTasks} />
        )}
      </div>
    </div>
  );
}
