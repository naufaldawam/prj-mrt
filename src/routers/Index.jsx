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
        path: "confirmation-pin/:id",
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
