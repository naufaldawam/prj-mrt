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

export const router = createBrowserRouter([
  {
    path: "*",
    element: <Load404 />,
    // element: <StartPage />,
  },
  {
    errorElement: <ErrorPage />,
    children: [
      { // Contoh : http://localhost:9999/home/bdki
        path: "/requestotp/bdki/:idreg",
        element: <InputNoHp />,
      },
      { // Contoh : http://localhost:9999/home/martipay
        path: "/requestotp/martipay/:idreg",
        element: <InputNoHp />,
      },
      { // Contoh : http://localhost:9999/login/bdki/RVI0cnEvNVF4c2xTWjVta1BSUTFqZz09
        path: "login/bdki/:id",
        element: <InputPinLogin />,
      },
      { // Contoh : http://localhost:9999/login/martipay/RVI0cnEvNVF4c2xTWjVta1BSUTFqZz09
        path: "login/martipay/:id",
        element: <InputPinLogin />,
      },
      { // Contoh : http://localhost:9999/register/bdki/RVI0cnEvNVF4c2xTWjVta1BSUTFqZz09
        path: "register/bdki/:idreg",
        element: <Register />,
      },
      { // Contoh : http://localhost:9999/register/martipay/RVI0cnEvNVF4c2xTWjVta1BSUTFqZz09
        path: "register/martipay/:idreg",
        element: <Register />,
      },
      { // Contoh : http://localhost:9999/create-pin/bdki/bDc4OEs2S1ZFNnBKNDIvRGFvejllQT09
        path: "create-pin/bdki/:idreg",
        element: <CreatePin />,
      },
      { // Contoh : http://localhost:9999/create-pin/martipay/bDc4OEs2S1ZFNnBKNDIvRGFvejllQT09
        path: "create-pin/martipay/:idreg",
        element: <CreatePin />,
      },
      { // Contoh : http://localhost:9999/confirmation-pin/bdki/bDc4OEs2S1ZFNnBKNDIvRGFvejllQT09/SFJsa0VyVlk1SksvdW5uWmlyWXA0QT09
        path: "confirmation-pin/bdki/:idreg/:id",
        element: <ConfirmationPin />,
      },
      { // Contoh : http://localhost:9999/confirmation-pin/martipay/bDc4OEs2S1ZFNnBKNDIvRGFvejllQT09/SFJsa0VyVlk1SksvdW5uWmlyWXA0QT09
        path: "confirmation-pin/martipay/:idreg/:id",
        element: <ConfirmationPin />,
      },
      { // Contoh : http://localhost:9999/reset-pin/bdki/bDc4OEs2S1ZFNnBKNDIvRGFvejllQT09
        path: "reset-pin/bdki/:idreg/:phone",
        element: <PostResetePin />,
      },
      { // Contoh : http://localhost:9999/reset-pin/martipay/bDc4OEs2S1ZFNnBKNDIvRGFvejllQT09
        path: "reset-pin/martipay/:idreg/:phone",
        element: <PostResetePin />,
      },
      { // Contoh : http://localhost:9999/confirmation-reset-pin/bdki/bDc4OEs2S1ZFNnBKNDIvRGFvejllQT09/SFJsa0VyVlk1SksvdW5uWmlyWXA0QT09
        path: "confirmation-reset-pin/bdki/:idreg/:id/:phone",
        element: <PostConfirmationResetPin />,
      },
      { // Contoh : http://localhost:9999/confirmation-reset-pin/martipay/bDc4OEs2S1ZFNnBKNDIvRGFvejllQT09/SFJsa0VyVlk1SksvdW5uWmlyWXA0QT09
        path: "confirmation-reset-pin/martipay/:idreg/:id/:phone",
        element: <PostConfirmationResetPin />,
      },
      { // Contoh : http://localhost:9999/Success-pin/bdki/T0s0elZmQ0VRQWRRYVN4dUpFakZqUT09
        path: "Success-pin/bdki/:idreg",
        element: <SuccessPin />,
      },
      { // Contoh : http://localhost:9999/Success-pin/martipay/T0s0elZmQ0VRQWRRYVN4dUpFakZqUT09
        path: "Success-pin/martipay/:idreg",
        element: <SuccessPin />,
      },
      { // Contoh : http://localhost:9999/Success-pin/bdki/T0s0elZmQ0VRQWRRYVN4dUpFakZqUT09
        path: "success-payment/bdki",
        element: <SuccessPayment />,
      },
      { // Contoh : http://localhost:9999/Success-pin/martipay/T0s0elZmQ0VRQWRRYVN4dUpFakZqUT09
        path: "success-payment/martipay",
        element: <SuccessPayment />,
      },
      { // Contoh : http://localhost:9999/postRequestPayment/bdki/T0s0elZmQ0VRQWRRYVN4dUpFakZqUT09
        path: "postRequestPayment/bdki/:idreg",
        element: <PostRequestPayment />,
      },
      { // Contoh : http://localhost:9999/postRequestPayment/martipay/T0s0elZmQ0VRQWRRYVN4dUpFakZqUT09
        path: "postRequestPayment/martipay/:idreg",
        element: <PostRequestPayment />,
      },
      { // Contoh : http://localhost:9999/top-up/bdki
        path: "top-up/bdki",
        element: <Topup />,
      },
      { // Contoh : http://localhost:9999/top-up/martipay
        path: "top-up/martipay",
        element: <Topup />,
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
        path: "expired-pin/bdki",
        element: <ExpiredPage />,
      },
      {
        path: "expired-pin/martipay",
        element: <ExpiredPage />,
      },
      {
        path: "expired-link/bdki",
        element: <ExpiredPage />,
      },
      {
        path: "expired-link/martipay",
        element: <ExpiredPage />,
      },
      
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);
