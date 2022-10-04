import {CHAT_ROUTE, LOGIN_ROUTE} from "../Utils/Consts";
import Login from "./Login";
import Chat from "./Chat";

export const PublicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login
    }

]

export const PrivateRoutes = [
    {
        path: CHAT_ROUTE,
        Component: Chat
    }
]