import { z } from 'zod';

export const loginSchema = z.object({
  nickname: z
    .string()
    .min(3, 'Minimum 3 characters')
    .max(20, 'Maximum 20 characters')
    .regex(/^[a-z0-9_]+$/, 'Only Latin and numbers')
    .transform(value => value.toLowerCase()),
  password: z.string().min(8, 'Minimum 8 characters'),
});

export type LoginFormData = z.infer<typeof loginSchema>;
