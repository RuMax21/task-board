import { DragDropProvider, type DragEndEvent } from '@dnd-kit/react';
import { useUpdateTaskStatus } from '@/entities/task/hooks';
import { STATUSES, type TaskStatus } from '@/entities/task/model';
import { KanbanColumn } from './ui/KanbanColumn';
import type { ReactElement } from 'react';
import type { KanbanProps } from './model/types';

export function KanbanBoard({ tasks, onTaskClick }: KanbanProps): ReactElement {
  const { mutate: updateStatus } = useUpdateTaskStatus();

  const handleDragEnd = ({ operation }: DragEndEvent): void => {
    const source = operation.source?.id as string;
    const target = operation.target?.id as string;

    if (!source || !target) return;

    const task = tasks.find(t => t.id === source);

    if (task && task.status !== target) {
      updateStatus({
        id: source,
        data: { status: target as TaskStatus },
      });
    }
  };

  return (
    <DragDropProvider onDragEnd={handleDragEnd}>
      <div>
        {STATUSES.map(status => (
          <KanbanColumn
            key={status}
            status={status}
            tasks={tasks.filter(t => t.status === status)}
            onTaskClick={onTaskClick}
          />
        ))}
      </div>
    </DragDropProvider>
  );
}
