import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import HomePage from "../pages/HomePage/InputNoHp";
import SuccessPin from "../pages/SuccessPin";
import AccordionTopUp from "../pages/accordionTopupPage/AccordionTopUp";
import ConfirmationPin from "../pages/createNewPinPage/ConfirmationPin";
import CreatePin from "../pages/createNewPinPage/CreatePin";
import StartPage from "../pages/pageStart/StartPageRegisttraion";
import InputPinLogin from "../pages/pinInputIfUserLoginPage/InputPin";
import Register from "../pages/registrationPage/Register";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <StartPage/>
    // element: <Navigate to="/home/bdki" />,
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
