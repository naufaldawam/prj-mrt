import "./App.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers/Index";
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';


function App() {
  return (
    <>
      <I18nextProvider i18n={i18n}>
        <RouterProvider router={router}>
        </RouterProvider>
      </I18nextProvider>
    </>
  );
}

export default App;
