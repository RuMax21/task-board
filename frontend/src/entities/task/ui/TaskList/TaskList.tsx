import { TaskCard } from '../TaskCard';
import type { TaskListProps } from './types';

export function TaskList({
  tasks,
  onTaskClick,
}: TaskListProps): React.ReactNode {
  if (tasks.length === 0) return <p>No tasks yet</p>;

  return (
    <div>
      {tasks.map(task => (
        <TaskCard key={task.id} task={task} onClick={onTaskClick} />
      ))}
    </div>
  );
}
