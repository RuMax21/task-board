import type { ReactElement } from 'react';
import { TaskDetailsHeader, TaskDetailsInfo } from './ui';
import type { TaskDetailsProps } from './model';

export function TaskDetails({
  task,
  onRemove,
  onEdit,
  onBack,
  isRemoving,
}: TaskDetailsProps): ReactElement {
  return (
    <section>
      <TaskDetailsHeader
        onRemove={onRemove}
        onEdit={onEdit}
        onBack={onBack}
        isRemoving={isRemoving}
      />
      <TaskDetailsInfo task={task} />
    </section>
  );
}
