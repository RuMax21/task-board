import { Routes, Route } from 'react-router';
import { ROUTES } from './routes';
import { PrivateRoute } from './PrivateRoute';

// TODO: temp elements
const LoginPage = () => <div>Login</div>;
const RegisterPage = () => <div>Register</div>;
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
