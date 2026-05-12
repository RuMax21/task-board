import { useTasks } from '@/entities/task/hooks';
import type { Task } from '@/entities/task/model';
import { useNavigate } from 'react-router';
import { Button } from '@/shared/ui';
import { useLanguage } from '@/shared/i18n';
import { ROUTE_PATHS, ROUTES } from '@/shared/config';
import { KanbanBoard } from '@/widgets/KanbanBoard';
import styles from './TaskPage.module.scss';

export default function TaskPage(): React.ReactNode {
  const { text } = useLanguage();
  const { data, isLoading, error } = useTasks();
  const navigate = useNavigate();

  const handleTaskClick = (task: Task): void => {
    navigate(ROUTE_PATHS.taskDetails(task.id));
  };

  if (isLoading) return <p>{text.common.processing.loading}</p>;
  if (error) return <p>{text.task.notFound}</p>;

  return (
    <section className={styles.section}>
      <div className={styles.topBar}>
        <h1 className={styles.heading}>{text.task.title}</h1>
        <Button onClick={() => navigate(ROUTES.CREATE_TASK)}>
          {text.task.create}
        </Button>
      </div>
      {/* <TaskList tasks={data?.items ?? []} onTaskClick={handleTaskClick} /> */}
      <KanbanBoard tasks={data?.items ?? []} onTaskClick={handleTaskClick} />
    </section>
  );
}
