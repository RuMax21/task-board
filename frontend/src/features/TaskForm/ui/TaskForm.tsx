import type { TaskFormProps } from '../model';
import { useTaskForm } from '../hooks';
import { Button, FormField } from '@/shared/ui';
import { FormSelect } from '@/shared/ui/FormSelect';
import {
  PRIORITY_OPTIONS,
  STATUS_OPTIONS,
  VISIBILITY_OPTIONS,
} from '@/entities/task/model';
import type { ReactElement } from 'react';
import { useLanguage } from '@/shared/i18n';
import { useAssigneeOptions } from '../hooks/useAssigneeOptions';
import styles from './TaskForm.module.scss';

export function TaskForm({
  defaultValues,
  onSubmit,
  isSubmitting,
  onCancel,
}: TaskFormProps): ReactElement {
  const { form, handleSubmit, errors } = useTaskForm({
    defaultValues,
    onSubmit,
  });
  const { register } = form;
  const { text } = useLanguage();
  const assigneeOptions = useAssigneeOptions();

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <FormField
        label={text.task.form.titleLabel}
        placeholder={text.task.form.titlePlaceholder}
        error={errors.title?.message}
        {...register('title')}
      />
      <FormField
        label={text.task.form.descriptionLabel}
        placeholder={text.task.form.descriptionPlaceholder}
        error={errors.description?.message}
        {...register('description')}
      />

      <FormSelect
        label={text.task.form.statusLabel}
        options={STATUS_OPTIONS}
        {...register('status')}
      />
      <FormSelect
        label={text.task.form.priorityLabel}
        options={PRIORITY_OPTIONS}
        {...register('priority')}
      />
      <FormSelect
        label={text.task.form.visibilityLabel}
        options={VISIBILITY_OPTIONS}
        {...register('visibility')}
      />
      <FormSelect
        label={text.task.form.assigneeLabel}
        options={assigneeOptions}
        {...register('assigneeId')}
      />

      <div className={styles.actions}>
        <Button type="button" onClick={onCancel}>
          {text.common.btn.cancel}
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          {text.common.btn.save}
        </Button>
      </div>
    </form>
  );
}
