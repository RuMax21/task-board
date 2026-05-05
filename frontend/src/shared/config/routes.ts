export const ROUTES = {
  LOGIN: '/login',
  REGISTER: '/register',
  TASKS: '/tasks',
  CREATE_TASK: '/tasks/create',
  TASK_DETAILS: '/tasks/:id',
  EDIT_TASK: '/tasks/:id/edit',
};

export const ROUTE_PATHS = {
  editTask: (id: string): string => `/tasks/${id}`,
};
