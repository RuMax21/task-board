import { Routes, Route } from 'react-router';
import { ROUTES } from '../../shared/config/routes';
import { PrivateRoute } from './PrivateRoute';
import { lazy } from 'react';

// TODO: temp elements
const LoginPage = lazy(() => import('@/pages/LoginPage'));
const RegisterPage = lazy(() => import('@/pages/RegisterPage'));
const TasksPage = () => <div>Tasks</div>;

export function Router() {
  return (
    <Routes>
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={ROUTES.REGISTER} element={<RegisterPage />} />

      <Route element={<PrivateRoute />}>
        <Route path={ROUTES.TASKS} element={<TasksPage />} />
      </Route>
    </Routes>
  );
}
