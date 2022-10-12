import { useContext } from 'react';
import { Route, Routes, Router, Navigate } from 'react-router-dom';
import { PrivateRoutes, PublicRoutes } from './Routes';
import { CHAT_ROUTE, LOGIN_ROUTE, USER_ROUTE } from '../Utils/Consts';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Context } from '../index';
import UserProfile from './UserProfile';

const AppRoutes = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);
  return user ? (
    <Routes>
      {PrivateRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path="*" element={<Navigate to={CHAT_ROUTE} replace />} />
      <Route path="/profile" element={<Navigate to={USER_ROUTE} />} />
    </Routes>
  ) : (
    <Routes>
      {PublicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
      <Route path="*" element={<Navigate to={LOGIN_ROUTE} replace />} />
    </Routes>
  );
};
export default AppRoutes;
