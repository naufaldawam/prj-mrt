import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import HomePage from "../pages/HomePage/InputNoHp";
import SuccessPin from "../pages/SuccessPin";
import AccordionTopUp from "../pages/accordionTopupPage/AccordionTopUp";
import ConfirmationPin from "../pages/createNewPinPage/ConfirmationPin";
import CreatePin from "../pages/createNewPinPage/CreatePin";
import ExampleEncDec from "../pages/exampleEncDecBisaHapusNantiKalauUdhGkButuh/ExampleEncDec";
import LoaderPageWithLottie from "../pages/loaderPage/LoaderPageWithLottie";
import StartPage from "../pages/pageStart/StartPageRegisttraion";
import InputPinLogin from "../pages/pinInputIfUserLoginPage/InputPin";
import Register from "../pages/registrationPage/Register";
import SuccesPageWithLottie from "../pages/successPage/SuccessPageWithLottie";

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
        path: "/home/martipay",
        element: <HomePage />,
      },
      {
        path: "login/bdki/:id",
        element: <InputPinLogin />,
      },
      {
        path: "login/martipay/:id",
        element: <InputPinLogin />,
      },
      {
        path: "register/bdki/:id",
        element: <Register />,
      },
      {
        path: "register/martipay/:id",
        element: <Register />,
      },
      {
        path: "create-pin/bdki/:id",
        element: <CreatePin />,
      },
      {
        path: "create-pin/martipay/:id",
        element: <CreatePin />,
      },
      {
        path: "confirmation-pin/bdki/:id",
        element: <ConfirmationPin />,
      },
      {
        path: "confirmation-pin/martipay/:id",
        element: <ConfirmationPin />,
      },
      {
        path: "success-pin",
        element: <SuccessPin />,
      },
      {
        path: "topup",
        element: <AccordionTopUp/>
      },
      {
        path: "success",
        element: <SuccesPageWithLottie />,
      },
      {
        path: "loader",
        element: <LoaderPageWithLottie />,
      },
      {
        path: "encdec",
        element: <ExampleEncDec />,
      }
    ],
  },
]);
