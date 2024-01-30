import { Navigate, createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import HomePage from "../pages/HomePage/InputNoHp";
import SuccessPin from "../pages/SuccessPin";
import ConfirmationPin from "../pages/createNewPin/ConfirmationPin";
import CreatePin from "../pages/createNewPin/CreatePin";
import InputPinLogin from "../pages/pinInputIfUserLoginPage/InputPin";
import Register from "../pages/registrationPage/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to="/home/bdki" />,
  },
  {
    errorElement: <ErrorPage />,
    children: [

      {
        path: "/home/bdki",
        element: <HomePage />,
      },
      {
        path: "/home/mrt",
        element: <HomePage />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "create-pin",
        element: <CreatePin />,
      },
      {
        path: "confirmation-pin/:id",
        element: <ConfirmationPin />,
      },
      {
        path: "success-pin",
        element: <SuccessPin />,
      },
      {
        path: "login",
        element: <InputPinLogin />,
      },
    ],
  },
]);
