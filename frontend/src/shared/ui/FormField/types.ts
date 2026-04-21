import type { InputHTMLAttributes } from 'react';
import type { FieldError } from 'react-hook-form';

export interface FormFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: FieldError;
}
