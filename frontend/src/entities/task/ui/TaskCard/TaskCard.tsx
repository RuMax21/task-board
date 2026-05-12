import { useDraggable } from '@dnd-kit/react';
import { ASSIGNMENT_STATUS_LABELS, TASK_PRIORITY_LABELS } from '../../model';
import type { TaskCardProps } from './types';
import { TaskAssignment } from '@/features/TaskAssignment';
import { useLanguage } from '@/shared/i18n';
import styles from './TaskCard.module.scss';

export function TaskCard({ task, onClick }: TaskCardProps): React.ReactNode {
  const { ref, listeners, attributes } = useDraggable({
    id: task.id,
  });
  const { text } = useLanguage();
  return (
    <div className={styles.card} ref={ref} {...listeners} {...attributes}>
      <div onClick={() => onClick?.(task)}>
        <h3 className={styles.title}>{task.title}</h3>
      </div>

      {task.description && (
        <p className={styles.description}>{task.description}</p>
      )}

      <div className={styles.footer}>
        <span className={styles.priority}>
          {TASK_PRIORITY_LABELS[task.priority]}
        </span>
        <span className={styles.assignee}>
          {task.assignmentStatus}: {task.assignee?.nickname}
        </span>

        {task.assignmentStatus ===
          ASSIGNMENT_STATUS_LABELS.PENDING.toUpperCase() && (
          <TaskAssignment task={task} />
        )}
      </div>
    </div>
  );
}
