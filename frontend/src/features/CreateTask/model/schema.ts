import z from 'zod';
import { PRIORITIES, STATUSES, VISIBILITIES } from '@/entities/task/model';

export const createTaskSchema = z.object({
  title: z.string().min(2, 'Title is required'),
  description: z.string().optional(),
  status: z.enum(STATUSES).optional(),
  priority: z.enum(PRIORITIES).optional(),
  visibility: z.enum(VISIBILITIES).optional(),
});

export type CreateTaskData = z.infer<typeof createTaskSchema>;
