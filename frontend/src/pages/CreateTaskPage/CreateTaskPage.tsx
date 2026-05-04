import { useCreateTask } from '@/entities/task/hooks';
import type { CreateTaskRequest } from '@/entities/task/model';
import { CreateTaskForm } from '@/features/CreateTask/ui';
import { useNavigate } from 'react-router';

export default function CreateTaskPage(): React.ReactNode {
  const navigate = useNavigate();
  const { mutate: createTask, isPending } = useCreateTask();

  const handleSubmit = (data: CreateTaskRequest): void => {
    createTask(data, {
      onSuccess: () => {
        navigate('/tasks');
      },
    });
  };

  return (
    <section>
      <h1>Create a new task</h1>
      <CreateTaskForm
        onSubmit={handleSubmit}
        isSubmitting={isPending}
        onCancel={() => navigate(-1)}
      />
    </section>
  );
}
