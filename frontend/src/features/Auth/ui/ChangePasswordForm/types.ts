import type { UseFormReturn } from 'react-hook-form';
import type { ChangePasswordFormData } from '../../model';

export interface UseChangePasswordFormReturn {
  form: UseFormReturn<ChangePasswordFormData>;
  onSubmit: (data: ChangePasswordFormData) => Promise<void>;
  errors: string;
  isPending: boolean;
}
