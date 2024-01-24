import RootLayout from "../layouts/RootLayout";
import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import HomePage from "../pages/Index";
import Register from "../pages/Register";
import CreatePin from "../pages/CreatePin";
import ConfirmationPin from "../pages/ConfirmationPin";
import SuccessPin from "../pages/SuccessPin";
import InputNoHp from "../pages/InputNoHp";
import OTPForm from "../pages/OtpForm";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
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
        path: "input-no-hp",
        element: <InputNoHp />,
      },
      {
        path: "otp-form",
        element: <OTPForm />,
      },
    ],
  },
]);
