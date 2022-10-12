import { CHAT_ROUTE, LOGIN_ROUTE, USER_ROUTE } from '../Utils/Consts';
import Login from './Login';
import Chat from './Chat';
import UserProfile from './UserProfile';

export const PublicRoutes = [
  {
    path: LOGIN_ROUTE,
    Component: Login,
  },
];

export const PrivateRoutes = [
  {
    path: CHAT_ROUTE,
    Component: Chat,
  },
  {
    path: USER_ROUTE,
    Component: UserProfile,
  },
];
