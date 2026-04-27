import type { Tag } from '@/entities/tag';

export type TaskStatus = 'TODO' | 'IN_PROGRESS' | 'DONE';
export type TaskPriority = 'LOW' | 'MEDIUM' | 'HIGH';
export type TaskVisibility = 'ONLY_ME' | 'LIST' | 'ANYONE';
export type AssignedStatus = 'NONE' | 'PENDING' | 'APPROVED' | 'REJECTED';

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
  priority: TaskPriority;
  visibility: TaskVisibility;
  creator: string;
  assignee: string | null;
  assignmentStatus: AssignedStatus;
  assignedId: string | null;
  viewerUserIds: string[];
  tags: Tag[];
  createdAt: string;
  updatedAt: string;
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
