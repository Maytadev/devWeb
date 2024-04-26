import { Navigate, Outlet, useRoutes } from 'react-router-dom';
import RootLayout from '../layouts/root-layout';
import Blog from '../pages/blog/blog';
import SignIn from '../pages/auth/signin';
import SignUp from '../pages/auth/signup';

export default function Routes() {
  return useRoutes([
    {
      path: '/',
      element: (
        <RootLayout>
          <Outlet />
        </RootLayout>
      ),
      children: [
        // Ruta principal
        { path: '', element: <Blog /> },
        // Ruta de autenticación...
        {
          path: 'auth',
          children: [
            { path: 'signin', element: <SignIn /> },
            { path: 'signup', element: <SignUp /> },
          ],
        },
      ],
    },
  ]);
}
