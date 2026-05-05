import { useCreateTask } from '@/entities/task/hooks';
import type { CreateTaskRequest } from '@/entities/task/model';
import { TaskForm } from '@/features/TaskForm/ui';
import { ROUTES } from '@/shared/config';
import { useLanguage } from '@/shared/i18n';
import { useNavigate } from 'react-router';

export default function CreateTaskPage(): React.ReactNode {
  const { text } = useLanguage();
  const navigate = useNavigate();
  const { mutate: createTask, isPending } = useCreateTask();

  const handleSubmit = (data: CreateTaskRequest): void => {
    createTask(data, {
      onSuccess: () => {
        navigate(ROUTES.TASKS);
      },
    });
  };

  return (
    <section>
      <h1>{text.task.create}</h1>
      <TaskForm
        onSubmit={handleSubmit}
        isSubmitting={isPending}
        onCancel={() => navigate(-1)}
      />
    </section>
  );
}
