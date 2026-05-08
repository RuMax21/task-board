import type { Tag } from '@/entities/tag';
import type { PRIORITIES, STATUSES, VISIBILITIES } from './constants';

// export type TaskStatus = 'TODO' | 'IN_PROGRESS' | 'DONE';
export type TaskStatus = (typeof STATUSES)[number];
// export type TaskPriority = 'LOW' | 'MEDIUM' | 'HIGH';
export type TaskPriority = (typeof PRIORITIES)[number];
// export type TaskVisibility = 'ONLY_ME' | 'LIST' | 'ANYONE';
export type TaskVisibility = (typeof VISIBILITIES)[number];
export type AssignedStatus = 'NONE' | 'PENDING' | 'APPROVED' | 'REJECTED';

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  visibility: TaskVisibility;
  creator: string;
  assignee: TaskAssignee | null;
  assignmentStatus: AssignedStatus;
  viewerUserIds: string[];
  tags: Tag[];
  createdAt: string;
  updatedAt: string;
}

export interface TaskAssignee {
  id: string;
  nickname: string;
  email: string;
}

export interface TaskListResponse {
  items: Task[];
  total: number;
  page: number;
  pageSize: number;
}

export interface CreateTaskRequest {
  title: string;
  description: string;
  status?: TaskStatus;
  priority?: TaskPriority;
  visibility?: TaskVisibility;
  viewerUserIds?: string[];
  assigneeId?: string;
}

export interface UpdateTaskRequest {
  title?: string;
  description?: string;
  status?: TaskStatus;
  priority?: TaskPriority;
  visibility?: TaskVisibility;
  viewerUserIds?: string[];
  assigneeId?: string;
}

export interface UpdateTaskStatusRequest {
  status: TaskStatus;
}

export interface RejectAssignmentRequest {
  comment?: string;
  blockAssigner?: boolean;
}

export interface UpdateTaskVariables {
  id: string;
  data: UpdateTaskRequest;
}

export interface UpdateTaskContext {
  prevData: TaskListResponse | undefined;
}

export interface UpdateTaskStatusVariables {
  id: string;
  data: UpdateTaskStatusRequest;
}

export interface RejectTaskVariables {
  id: string;
  data: RejectAssignmentRequest;
}
