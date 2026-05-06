import { useDroppable } from '@dnd-kit/react';
import type { ReactElement } from 'react';
import type { KanbanColumnProps } from '../model/types';
import { TaskCard } from '@/entities/task/ui';

export function KanbanColumn({
  status,
  tasks,
  onTaskClick,
}: KanbanColumnProps): ReactElement {
  const { ref } = useDroppable({ id: status });

  return (
    <div ref={ref}>
      <h3>{status}</h3>
      {tasks.map(task => (
        <TaskCard key={task.id} task={task} onClick={onTaskClick} />
      ))}
    </div>
  );
}
