import { Button } from '@/shared/ui';
import type { ReactElement } from 'react';
import type { TaskDetailsHeaderProps } from '../model';
import { useLanguage } from '@/shared/i18n';

export function TaskDetailsHeader({
  onRemove,
  onEdit,
  onBack,
  isRemoving,
}: TaskDetailsHeaderProps): ReactElement {
  const { text } = useLanguage();

  return (
    <div>
      <Button onClick={onBack}>{text.common.btn.back}</Button>
      <div>
        <Button onClick={onEdit}>{text.common.btn.edit}</Button>
        <Button onClick={onRemove} disabled={isRemoving}>
          {isRemoving ? text.common.removing : text.common.btn.remove}
        </Button>
      </div>
    </div>
  );
}
