import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import InputNoHp from "../pages/HomePage/InputNoHp";
import SuccessPin from "../pages/SuccessPin";
import Topup from "../pages/accordionTopupPage/TopUp";
import ConfirmationPin from "../pages/createNewPinPage/ConfirmationPin";
import CreatePin from "../pages/createNewPinPage/CreatePin";
import ExampleEncDec from "../pages/exampleEncDecBisaHapusNantiKalauUdhGkButuh/ExampleEncDec";
import LoaderPageWithLottie from "../pages/loaderPage/LoaderPageWithLottie";
import Load404 from "../pages/pageStart/load404";
import PostRequestPayment from "../pages/pinBeforePayment/PaymentPin";
import InputPinLogin from "../pages/pinInputIfUserLoginPage/InputPin";
import Register from "../pages/registrationPage/Register";
import SuccesPageWithLottie from "../pages/successPage/SuccessPageWithLottie";

export const router = createBrowserRouter([
  {
    path: "*",
    element: <Load404 />,
    // element: <StartPage />,
  },
  {
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/home/bdki",
        element: <InputNoHp />,
      },
      {
        path: "/home/martipay",
        element: <InputNoHp />,
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
        path: "register/bdki/:idreg",
        element: <Register />,
      },
      {
        path: "register/martipay/:idreg",
        element: <Register />,
      },
      {
        path: "create-pin/bdki/:idreg",
        element: <CreatePin />,
      },
      {
        path: "create-pin/martipay/:idreg",
        element: <CreatePin />,
      },
      {
        path: "confirmation-pin/bdki/:idreg/:id",
        element: <ConfirmationPin />,
      },
      {
        path: "confirmation-pin/martipay/:idreg/:id",
        element: <ConfirmationPin />,
      },
      {
        path: "Success-pin",
        element: <SuccessPin />,
      },
      {
        path: "postRequestPayment/bdki/:idreg",
        element: <PostRequestPayment />,
      },
      {
        path: "postRequestPayment/martipay/:idreg",
        element: <PostRequestPayment />,
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
      },
      {
        path: "top-up/bdki",
        element: <Topup />,
      },,
      {
        path: "top-up/martipay",
        element: <Topup />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
