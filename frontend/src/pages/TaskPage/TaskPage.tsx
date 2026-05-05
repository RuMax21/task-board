import { useTasks } from '@/entities/task/hooks';
import type { Task } from '@/entities/task/model';
import { useNavigate } from 'react-router';
import { Button } from '@/shared/ui';
import { TaskList } from '@/entities/task/ui';
import { useLanguage } from '@/shared/i18n';
import { ROUTE_PATHS, ROUTES } from '@/shared/config';

export default function TaskPage(): React.ReactNode {
  const { text } = useLanguage();
  const { data, isLoading, error } = useTasks();
  const navigate = useNavigate();

  const handleTaskClick = (task: Task): void => {
    navigate(ROUTE_PATHS.taskDetails(task.id));
  };

  if (isLoading) return <p>{text.common.loading}</p>;
  if (error) return <p>{text.task.notFound}</p>;

  return (
    <section>
      <div>
        <h1>{text.task.title}</h1>
        <Button onClick={() => navigate(ROUTES.CREATE_TASK)}>
          {text.task.create}
        </Button>
      </div>
      <TaskList tasks={data?.items ?? []} onTaskClick={handleTaskClick} />
    </section>
  );
}
