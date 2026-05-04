import { useRemoveTask, useTask } from '@/entities/task/hooks';
import { useNavigate, useParams } from 'react-router';
import type { UseTaskDetailsReturn } from './types';

export function useTaskDetails(): UseTaskDetailsReturn {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: task, error, isLoading } = useTask(id!);
  const { mutate: removeTask, isPending: isRemoving } = useRemoveTask();

  const handleRemove = (): void => {
    if (!window.confirm('Remove task?')) return;
    removeTask(id!, {
      onSuccess: () => navigate('/tasks'),
    });
  };

  const handleEdit = (): void => {
    navigate(`/tasks/${id}/edit`);
  };

  const handleBack = (): void => {
    navigate('/tasks');
  };

  return {
    task,
    error,
    isLoading,
    isRemoving,
    handleRemove,
    handleEdit,
    handleBack,
  };
}
