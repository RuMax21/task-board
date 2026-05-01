import type { UseFormReturn } from "react-hook-form";
import type { RegisterFormData } from "../../model";

export interface UseRegisterFormReturn {
  form: UseFormReturn<RegisterFormData>;
  onSubmit: (data: RegisterFormData) => Promise<void>;
  error: string;
  isLoading: boolean;
}
