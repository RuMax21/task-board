import { useDraggable } from '@dnd-kit/react';
import { ASSIGNMENT_STATUS_LABELS, TASK_PRIORITY_LABELS } from '../../model';
import type { TaskCardProps } from './types';
import { TaskAssignment } from '@/features/TaskAssignment';
import { useLanguage } from '@/shared/i18n';

export function TaskCard({ task, onClick }: TaskCardProps): React.ReactNode {
  const { ref, listeners, attributes } = useDraggable({
    id: task.id,
  });
  const { text } = useLanguage();
  return (
    <div ref={ref} {...listeners} {...attributes}>
      <div onClick={() => onClick?.(task)}>
        <h3>{task.title}</h3>
        {/* <span>{TASK_STATUS_LABELS[task.status]}</span> */}
      </div>

      {task.description && <p>{task.description}</p>}

      <div>
        <span>{TASK_PRIORITY_LABELS[task.priority]}</span>
        <span>
          {text.task.assigned}[{task.assignmentStatus}]:{' '}
          {task.assignee?.nickname}
        </span>

        {task.assignmentStatus ===
          ASSIGNMENT_STATUS_LABELS.PENDING.toUpperCase() && (
          <TaskAssignment task={task} />
        )}
      </div>
    </div>
  );
}
