import { ThemeProvider } from "@material-tailwind/react";
import i18next from "i18next";
import React from "react";
import ReactDOM from "react-dom/client";
import { I18nextProvider } from "react-i18next";
import global_en from "../src/components/configuration_language/ConfigEnLanguage.json";
import global_id from "../src/components/configuration_language/ConfigIdLanguage.json";
import {
  setFooter
} from "../src/constantFile/I_Constant";
import App from "./App.jsx";
import "./index.css";

const savedLanguage = localStorage.getItem('language') || 'us'; //init nilai default awal ubah bahasa

i18next.init({
  interpolation: { escapeValue: false },
  lng: savedLanguage, //potongan kode ini adalah untuk mengambil nilai default yang disimpan kedalam localstorage browser untuk mengisi value dari yang dipilih pada fungsi button ubaha bahasa pada i_constant file
  resources: {
    us: {
      translation: global_en
    },
    id: {
      translation: global_id
    }
  }
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode key="root">
    <ThemeProvider>
      <I18nextProvider i18n={i18next}>
        <App />
        {setFooter()}
      </I18nextProvider>
    </ThemeProvider>
  </React.StrictMode>
);