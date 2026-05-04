import { TaskDetails } from '@/features/TaskDetails';
import { useTaskDetails } from '@/features/TaskDetails/hooks/useTaskDetails';
import type { ReactElement } from 'react';

export default function TaskDetailsPage(): ReactElement {
  const {
    task,
    isLoading,
    error,
    handleBack,
    handleEdit,
    handleRemove,
    isRemoving,
  } = useTaskDetails();

  if (isLoading) return <p>Loading..</p>;
  if (!task || error) return <p>Task not found</p>;

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
