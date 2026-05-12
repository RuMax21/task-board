import type { ReactElement } from 'react';
import {
  TASK_PRIORITY_LABELS,
  TASK_STATUS_LABELS,
  type Task,
} from '@/entities/task/model';
import styles from '../TaskDetails.module.scss';

export function TaskDetailsInfo({ task }: { task: Task }): ReactElement {
  return (
    <div className={styles.info}>
      <h1 className={styles.taskTitle}>{task.title}</h1>
      {task.description && (
        <p className={styles.description}>{task.description}</p>
      )}
      <div className={styles.meta}>
        <span className={styles.statusBadge}>
          {TASK_STATUS_LABELS[task.status]}
        </span>
        <span className={styles.priorityBadge}>
          {TASK_PRIORITY_LABELS[task.priority]}
        </span>
        <span className={styles.date}>{task.createdAt}</span>
      </div>
    </div>
  );
}
