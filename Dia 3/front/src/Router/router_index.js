import { createBrowserRouter } from "react-router-dom";
import { OtherUserScreen } from "../Screens/OtherUserScreen/otherUserScreen.screen.jsx";
import {
  HomePage,
  LogoutScreen,
  LoginScreen,
  RegisterScreen,
  DashboardScreen,
  ProfileScreen,
  SearchPeopleScreen,
  MyFriendsScreen,
  EditarPerfilScreen,
} from "../Screens/screens_index.js";
import PrivateRoute from "./privateRoute.js";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/login",
    element: <LoginScreen />,
  },
  {
    path: "/logout",
    element: <PrivateRoute Screen={LogoutScreen} />,
  },
  {
    path: "/cadastro",
    element: <RegisterScreen />,
  },
  {
    path: "/dashboard",
    element: <DashboardScreen />,
  },
  {
    path: "/perfil",
    element: <PrivateRoute Screen={ProfileScreen} />,
  },
  {
    path: "/buscar",
    element: <PrivateRoute Screen={SearchPeopleScreen} />,
  },
  {
    path: "/amigos",
    element: <PrivateRoute Screen={MyFriendsScreen} />,
  },
  {
    path: "/perfil/:id",
    element: <PrivateRoute Screen={OtherUserScreen} />,
  },
  {
    path: "/editar",
    element: <PrivateRoute Screen={EditarPerfilScreen} />,
  },
]);
