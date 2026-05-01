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

export const registerSchema = z
  .object({
    nickname: z
      .string()
      .min(3, 'Minimum 3 characters')
      .max(20, 'Maximum 20 characters')
      .regex(/^[a-z0-9_]+$/, 'Only Latin and numbers')
      .transform(value => value.toLowerCase()),
    password: z
      .string()
      .min(8, 'Minimum 8 characters')
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z\d])[^\s]{8,}$/,
        'Password must be at least 8 characters long and include uppercase, lowercase, number, and special character',
      ),
    confirmPassword: z.string(),
    email: z.string().email('Invalid email address'),
  })
  .refine(data => data.password === data.confirmPassword, {
    message: "Password don't match",
    path: ['confirmPassword'],
  })
  .transform(({ confirmPassword, ...rest }) => rest);

export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;
