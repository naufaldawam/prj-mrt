<<<<<<< HEAD
import InputPinLogin from "../pages/pinInputIfUserLoginPage/InputPin";
import CreatePin from "../pages/createNewPin/CreatePin";
import ConfirmationPin from "../pages/createNewPin/ConfirmationPin";
import Register from "../pages/registrationPage/Register";
import SuccessPin from "../pages/SuccessPin";
import HomePage from "../pages/HomePage/InputNoHp";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import { Navigate } from "react-router-dom";
=======
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import RootLayout from "../layouts/RootLayout";
import ConfirmationPin from "../pages/ConfirmationPin";
import CreatePin from "../pages/CreatePin";
import HomePage from "../pages/Index";
import InputNoHp from "../pages/InputNoHp";
import OTPForm from "../pages/OtpForm";
import Register from "../pages/Register";
import SuccessPin from "../pages/SuccessPin";
>>>>>>> fachrur.rozi

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
