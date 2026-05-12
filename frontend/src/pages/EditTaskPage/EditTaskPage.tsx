import { useTask, useUpdateTask } from '@/entities/task/hooks';
import type { UpdateTaskRequest } from '@/entities/task/model';
import { TaskForm } from '@/features/TaskForm';
import { ROUTE_PATHS } from '@/shared/config';
import { useLanguage } from '@/shared/i18n';
import type { ReactElement } from 'react';
import { useNavigate, useParams } from 'react-router';
import styles from './EditTaskPage.module.scss';

export default function EditTaskPage(): ReactElement {
  const { text } = useLanguage();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { data: task, isLoading, error } = useTask(id!);
  const { mutate: updateTask, isPending } = useUpdateTask();

  const handleSubmit = (data: UpdateTaskRequest): void => {
    updateTask(
      { id: id!, data: { ...data, viewerUserIds: task?.viewerUserIds ?? [] } },
      {
        onSuccess: () => {
          navigate(ROUTE_PATHS.taskDetails(id!));
        },
      },
    );
  };

  if (isLoading) return <p>{text.common.loading}</p>;
  if (error || !task) return <p>{text.task.notFound}</p>;

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>{text.task.edit}</h2>
      <TaskForm
        defaultValues={{
          title: task.title,
          description: task.description ?? '',
          status: task.status,
          priority: task.priority,
          visibility: task.visibility,
        }}
        onSubmit={handleSubmit}
        isSubmitting={isPending}
        onCancel={() => navigate(`/tasks/${id}`)}
      />
    </section>
  );
}
