import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import InputNoHp from "../pages/HomePage/InputNoHp";
import SuccessPayment from "../pages/SuccessPayment";
import SuccessPin from "../pages/SuccessPin";
import Topup from "../pages/accordionTopupPage/TopUp";
import ConfirmationPin from "../pages/createNewPinPage/ConfirmationPin";
import CreatePin from "../pages/createNewPinPage/CreatePin";
// import ExampleEncDec from "../pages/exampleEncDecBisaHapusNantiKalauUdhGkButuh/ExampleEncDec";
import ExpiredPage from "../components/ExpiredPage";
import LoaderPageWithLottie from "../pages/loaderPage/LoaderPageWithLottie";
import Load404 from "../pages/pageStart/load404";
import PostRequestPayment from "../pages/pinBeforePayment/PaymentPin";
import InputPinLogin from "../pages/pinInputIfUserLoginPage/InputPin";
import PostConfirmationResetPin from "../pages/postChangePIN/ConfirmationResetPin";
import PostResetePin from "../pages/postChangePIN/ResetPin";
import Register from "../pages/registrationPage/Register";
import SuccesPageWithLottie from "../pages/successPage/SuccessPageWithLottie";
import SuccessPinLogin from "../pages/SuccessPinLogin";


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
        path: "/success-login/:channel/",
        element: <SuccessPinLogin/>
      },
      {
        path: "/success-login/:channel/:idreg",
        element: <SuccessPinLogin/>
      },
      { // Contoh : http://localhost:9999/home/bdki
        path: "/requestotp/:channel/:idreg",
        element: <InputNoHp />,
      },
      { // Contoh : http://localhost:9999/login/bdki/RVI0cnEvNVF4c2xTWjVta1BSUTFqZz09
        path: "login/:channel/:id",
        element: <InputPinLogin />,
      },
      { // Contoh : http://localhost:9999/register/bdki/RVI0cnEvNVF4c2xTWjVta1BSUTFqZz09
        path: "register/:channel/:idreg",
        element: <Register />,
      },
      { // Contoh : http://localhost:9999/create-pin/bdki/bDc4OEs2S1ZFNnBKNDIvRGFvejllQT09
        path: "create-pin/:channel/:idreg",
        element: <CreatePin />,
      },
      { // Contoh : http://localhost:9999/confirmation-pin/bdki/bDc4OEs2S1ZFNnBKNDIvRGFvejllQT09/SFJsa0VyVlk1SksvdW5uWmlyWXA0QT09
        path: "confirmation-pin/:channel/:idreg/:id",
        element: <ConfirmationPin />,
      },
      { // Contoh : http://localhost:9999/reset-pin/bdki/bDc4OEs2S1ZFNnBKNDIvRGFvejllQT09
        path: "reset-pin/:channel/:idreg/:phone",
        element: <PostResetePin />,
      },
      { // Contoh : http://localhost:9999/confirmation-reset-pin/bdki/bDc4OEs2S1ZFNnBKNDIvRGFvejllQT09/SFJsa0VyVlk1SksvdW5uWmlyWXA0QT09
        path: "confirmation-reset-pin/:channel/:idreg/:id/:phone",
        element: <PostConfirmationResetPin />,
      },
      { // Contoh : http://localhost:9999/Success-pin/bdki/T0s0elZmQ0VRQWRRYVN4dUpFakZqUT09
        path: "success-pin/:channel/:idreg",
        element: <SuccessPin />,
      },
      { // Contoh : http://localhost:9999/Success-pin/bdki/T0s0elZmQ0VRQWRRYVN4dUpFakZqUT09
        path: "success-payment/:channel",
        element: <SuccessPayment />,
      },
      { // Contoh : http://localhost:9999/postRequestPayment/bdki/T0s0elZmQ0VRQWRRYVN4dUpFakZqUT09
        path: "postRequestPayment/:channel/:idreg",
        element: <PostRequestPayment />,
      },
      { // Contoh : http://localhost:9999/top-up/bdki
        path: "top-up/:channel",
        element: <Topup />,
      },
      {
        path: "success/:channel",
        element: <SuccesPageWithLottie />,
      },
      {
        path: "loader",
        element: <LoaderPageWithLottie />,
      },
      {
        path: "expired-pin/:channel",
        element: <ExpiredPage />,
      },
      {
        path: "expired-link/:channel",
        element: <ExpiredPage />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
