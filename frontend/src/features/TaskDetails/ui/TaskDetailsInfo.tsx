import type { ReactElement } from 'react';
import {
  TASK_PRIORITY_LABELS,
  TASK_STATUS_LABELS,
  type Task,
} from '@/entities/task/model';

export function TaskDetailsInfo({ task }: { task: Task }): ReactElement {
  return (
    <div>
      <h1>{task.title}</h1>
      {task.description && <p>{task.description}</p>}
      <div>
        <span>{TASK_STATUS_LABELS[task.status]}</span>
        <span>{TASK_PRIORITY_LABELS[task.priority]}</span>
        <span>{task.createdAt}</span>
      </div>
    </div>
  );
}
