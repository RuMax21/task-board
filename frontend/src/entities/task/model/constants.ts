import type {
  AssignedStatus,
  TaskPriority,
  TaskStatus,
  TaskVisibility,
} from './types';

export const TASK_STATUS_LABELS: Record<TaskStatus, string> = {
  TODO: 'To do',
  IN_PROGRESS: 'In progress',
  DONE: 'Done',
};

export const TASK_PRIORITY_LABELS: Record<TaskPriority, string> = {
  LOW: 'Low',
  MEDIUM: 'Medium',
  HIGH: 'High',
};

export const ASSIGNMENT_STATUS_LABELS: Record<AssignedStatus, string> = {
  NONE: 'Not assigned',
  PENDING: 'Pending',
  APPROVED: 'Accepted',
  REJECTED: 'Rejected',
};

export const TASK_VISIBILITY_LABELS: Record<TaskVisibility, string> = {
  ONLY_ME: 'Only me',
  LIST: 'According to the list',
  ANYONE: 'Everyone',
};
