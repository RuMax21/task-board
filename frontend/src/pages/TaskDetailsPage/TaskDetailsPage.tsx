import { TaskDetails } from '@/features/TaskDetails';
import { useTaskDetails } from '@/features/TaskDetails/hooks/useTaskDetails';
import { useLanguage } from '@/shared/i18n';
import type { ReactElement } from 'react';

export default function TaskDetailsPage(): ReactElement {
  const { text } = useLanguage();
  const {
    task,
    isLoading,
    error,
    handleBack,
    handleEdit,
    handleRemove,
    isRemoving,
  } = useTaskDetails();

  if (isLoading) return <p>{text.common.loading}</p>;
  if (!task || error) return <p>{text.task.notFound}</p>;

  return (
    <TaskDetails
      task={task}
      onBack={handleBack}
      onEdit={handleEdit}
      onRemove={handleRemove}
      isRemoving={isRemoving}
    />
  );
}
