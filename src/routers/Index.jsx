import InputPinLogin from "../pages/pinInputIfUserLoginPage/InputPin";
import CreatePin from "../pages/createNewPin/CreatePin";
import ConfirmationPin from "../pages/createNewPin/ConfirmationPin";
import Register from "../pages/registrationPage/Register";
import SuccessPin from "../pages/SuccessPin";
import HomePage from "../pages/HomePage/InputNoHp";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import { Navigate } from "react-router-dom";

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
        path: "confirmation-pin",
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
