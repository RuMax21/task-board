import { Routes, Route, Navigate } from 'react-router';
import { ROUTES } from '../../shared/config/routes';
import { PrivateRoute } from './PrivateRoute';
import { lazy } from 'react';

const MainLayout = lazy(() => import('@/app/layouts/MainLayout'));
const LoginPage = lazy(() => import('@/pages/LoginPage'));
const RegisterPage = lazy(() => import('@/pages/RegisterPage'));
const CreateTaskPage = lazy(() => import('@/pages/CreateTaskPage'));
const TaskPage = lazy(() => import('@/pages/TaskPage'));
const TaskDetailsPage = lazy(() => import('@/pages/TaskDetailsPage'));
const EditTaskPage = lazy(() => import('@/pages/EditTaskPage'));
const ProfilePage = lazy(() => import('@/pages/ProfilePage'));

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={ROUTES.LOGIN} replace />} />
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.REGISTER} element={<RegisterPage />} />
      <Route element={<PrivateRoute />}>
        <Route element={<MainLayout />}>
          <Route path={ROUTES.TASKS} element={<TaskPage />} />
          <Route path={ROUTES.CREATE_TASK} element={<CreateTaskPage />} />
          <Route path={ROUTES.TASK_DETAILS} element={<TaskDetailsPage />} />
          <Route path={ROUTES.EDIT_TASK} element={<EditTaskPage />} />
          <Route path={ROUTES.PROFILE} element={<ProfilePage />} />
        </Route>
      </Route>
    </Routes>
  );
}
