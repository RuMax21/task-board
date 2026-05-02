import type { CreateTaskFormProps } from '../model';
import { useCreateTaskForm } from '../hooks';
import { Button, FormField } from '@/shared/ui';
import { FormSelect } from '@/shared/ui/FormSelect';
import {
  PRIORITY_OPTIONS,
  STATUS_OPTIONS,
  VISIBILITY_OPTIONS,
} from '@/entities/task/model';

export function CreateTaskForm({
  defaultValues,
  onSubmit,
  isSubmitting,
  onCancel,
}: CreateTaskFormProps): React.JSX.Element {
  const { form, handleSubmit, errors } = useCreateTaskForm({
    defaultValues,
    onSubmit,
  });
  const { register } = form;

  return (
    <form onSubmit={handleSubmit}>
      <FormField
        label="Title"
        placeholder="Enter the task name"
        error={errors.title?.message}
        {...register('title')}
      />
      <FormField
        label="Description"
        placeholder="Enter the task description"
        error={errors.description?.message}
        {...register('description')}
      />

      <FormSelect
        label="Status"
        options={STATUS_OPTIONS}
        {...register('status')}
      />
      <FormSelect
        label="Priority"
        options={PRIORITY_OPTIONS}
        {...register('priority')}
      />
      <FormSelect
        label="Visibility"
        options={VISIBILITY_OPTIONS}
        {...register('visibility')}
      />

      <div>
        <Button type="button" onClick={onCancel}>
          Cancel
        </Button>
        <Button type="submit" disabled={isSubmitting}>
          Save
        </Button>
      </div>
    </form>
  );
}
