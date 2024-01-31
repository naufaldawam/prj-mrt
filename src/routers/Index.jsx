import { Navigate, createBrowserRouter } from "react-router-dom";
import InputPinLogin from "../pages/pinInputIfUserLoginPage/InputPin";
import CreatePin from "../pages/createNewPinPage/CreatePin";
import ConfirmationPin from "../pages/createNewPinPage/ConfirmationPin";
import Register from "../pages/registrationPage/Register";
import SuccessPin from "../pages/SuccessPin";
import HomePage from "../pages/pageHome/InputNoHp";
import ErrorPage from "../components/ErrorPage";
import AccordionTopUp from "../pages/accordionTopupPage/AccordionTopUp";

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
      {
        path: "topup",
        element: <AccordionTopUp/>
      }
      
    ],
  },
]);
