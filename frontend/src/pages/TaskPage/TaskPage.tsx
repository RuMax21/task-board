import { useTasks } from '@/entities/task/hooks';
import type { Task } from '@/entities/task/model';
import { useNavigate } from 'react-router';
import { Button } from '@/shared/ui';
import { TaskList } from '@/entities/task/ui';

export default function TaskPage(): React.ReactNode {
  const { data, isLoading, error } = useTasks();
  const navigate = useNavigate();

  const handleTaskClick = (task: Task): void => {
    navigate(`/tasks/${task.id}`);
  };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Task loading error</p>;

  return (
    <section>
      <div>
        <h1>Tasks</h1>
        <Button onClick={() => navigate(`/tasks/create`)}>Create a task</Button>
      </div>
      <TaskList tasks={data?.items ?? []} onTaskClick={handleTaskClick} />
    </section>
  );
}
