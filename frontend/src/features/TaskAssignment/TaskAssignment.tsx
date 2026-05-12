import {
  useApproveAssignment,
  useRejectAssignment,
} from '@/entities/task/hooks';
import { useAuthStore } from '../Auth/model';
import { Button } from '@/shared/ui';
import { useLanguage } from '@/shared/i18n';
import type { ReactNode } from 'react';
import type { TaskAssignmentProps } from './types';
import { ASSIGNMENT_STATUS_LABELS } from '@/entities/task/model';
import styles from './TaskAssignment.module.scss';

export function TaskAssignment({ task }: TaskAssignmentProps): ReactNode {
  const userId = useAuthStore(state => state.user?.id);
  const { text } = useLanguage();
  const { mutate: approve, isPending: isApproving } = useApproveAssignment();
  const { mutate: reject, isPending: isRejecting } = useRejectAssignment();

  const handleApproveTask = (): void => {
    approve(task.id);
  };

  const handleRejectTask = (): void => {
    const comment = window.prompt(text.modal.refusal);
    const blockAssigner = window.confirm(text.modal.blockAssigner);
    reject({ id: task.id, data: { comment: comment ?? '', blockAssigner } });
  };

  if (
    task.assignee?.id !== userId ||
    task.assignmentStatus !== ASSIGNMENT_STATUS_LABELS.PENDING.toUpperCase()
  )
    return null;

  return (
    <div className={styles.wrapper}>
      <Button
        className={styles.approve}
        onClick={handleApproveTask}
        disabled={isApproving}
      >
        {text.common.btn.approveTask}
      </Button>
      <Button
        className={styles.reject}
        onClick={handleRejectTask}
        disabled={isRejecting}
      >
        {text.common.btn.rejectTask}
      </Button>
    </div>
  );
}
