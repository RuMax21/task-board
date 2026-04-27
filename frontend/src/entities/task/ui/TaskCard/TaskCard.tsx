import { TASK_PRIORITY_LABELS, TASK_STATUS_LABELS } from '../../model';
import type { TaskCardProps } from './types';

export function TaskCard({ task, onClick }: TaskCardProps): React.ReactNode {
  return (
    <div onClick={() => onClick?.(task)}>
      <div>
        <h3>{task.title}</h3>
        <span>{TASK_STATUS_LABELS[task.status]}</span>
      </div>

      {task.description && <p>{task.description}</p>}

      <div>
        <span>{TASK_PRIORITY_LABELS[task.priority]}</span>
        {task.assignedId && <span>assigned</span>}
      </div>
    </div>
  );
}
