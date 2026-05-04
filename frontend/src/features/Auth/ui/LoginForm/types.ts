import type { UseFormReturn } from "react-hook-form";
import type { LoginFormData } from "../../model";

export interface UseLoginFormReturn {
  form: UseFormReturn<LoginFormData>;
  onSubmit: (data: LoginFormData) => Promise<void>;
  error: string;
  isLoading: boolean;
}
