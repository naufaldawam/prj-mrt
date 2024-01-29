import InputPinLogin from "../pages/pinInputIfUserLoginPage/InputPin";
import CreatePin from "../pages/createNewPin/CreatePin";
import ConfirmationPin from "../pages/createNewPin/ConfirmationPin";
import Register from "../pages/registrationPage/Register";
import SuccessPin from "../pages/SuccessPin";
import HomePage from "../pages/pageHome/InputNoHp";
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
        path: "login/bdki",
        element: <InputPinLogin />,
      },
      {
        path: "login/mrt",
        element: <InputPinLogin />,
      },
      {
        path: "register/bdki",
        element: <Register />,
      },
      // {
      //   path: "register/mrt",
      //   element: <Register />,
      // },
      {
        path: "create-pin/bdki",
        element: <CreatePin />,
      },
      {
        path: "create-pin/mrt",
        element: <CreatePin />,
      },
      {
        path: "confirmation-pin/bdki",
        element: <ConfirmationPin />,
      },
      {
        path: "confirmation-pin/mrt",
        element: <ConfirmationPin />,
      },
      {
        path: "success-pin",
        element: <SuccessPin />,
      },
    ],
  },
]);
