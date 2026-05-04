import { Button } from '@/shared/ui';
import type { ReactElement } from 'react';
import type { TaskDetailsHeaderProps } from '../model';

export function TaskDetailsHeader({
  onRemove,
  onEdit,
  onBack,
  isRemoving,
}: TaskDetailsHeaderProps): ReactElement {
  return (
    <div>
      <Button onClick={onBack}>Back to list</Button>
      <div>
        <Button onClick={onEdit}>Edit</Button>
        <Button onClick={onRemove} disabled={isRemoving}>
          {isRemoving ? 'Removing..' : 'Remove'}
        </Button>
      </div>
    </div>
  );
}
