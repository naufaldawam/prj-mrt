import React from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import Flag from "react-world-flags";

import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Cookies from "js-cookie";
import Lottie from "lottie-react";
import PhoneInput from "react-phone-input-2";
import PinInputTemplate from "react-pin-input";
import logobdki from "../assets/icons/JakOne-Pay.png";
import logomartipay from "../assets/icons/Logo-MRT-Jakarta.png";
import logoiconbdki from "../assets/icons/shield-bdki.png";
import logoiconmartipay from "../assets/icons/shield-martipay.png";
import ModalTermsAndConditionTemplate from "../components/ModalSyaratKetentuan";
import AnimationLoader from "../components/lottieFiles/AnimationLoader2.json";

const domain = process.env.LOCAL_HOST;

export const PinInputWithStyle = ({ secretDelay, value, onChange }) => {
  const PinInput = PinInputTemplate;
  const location = useLocation();
  // console.log(value);
  return (
    <PinInput
      length={6}
      autoFocus={true}
      initialValue=""
      secret={true}
      onChange={onChange}
      value={value}
      type="numeric"
      inputMode="number"
      inputStyle={getStyledPinInput()}
      inputFocusStyle={{}}
      onComplete={() => {}}
      autoSelect={true}
      regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
      secretDelay={secretDelay}
      // keyboardType={Device.isAndroid ? "numeric" : "number-pad"}
    />
  );
};

export const ModalTermsAndCondition = ModalTermsAndConditionTemplate;
export const FontAwesomeIconCheckeCircle = (
  <FontAwesomeIcon icon={faCheckCircle} />
);

export const PhoneInputWithStyle = ({ value, onChange }) => {
  // const [value, setValue] = useState(); //to handle change
  // console.log("value fom phone input with style at phone input with style constant", value);
  const PhoneInputTemplate = PhoneInput;
  return (
    <PhoneInputTemplate
      country="id"
      placeholder="input nomor anda"
      masks={{ id: ".... .... ...." }}
      inputStyle={{
        border: "none",
        boxShadow: "none",
        outline: "none",
        width: "230px",
      }}
      value={value}
      onChange={onChange}
    />
  );
};

export const BtnSendWithStyle = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className={getbtnSendStyle()}
      type="button"
      data-ripple-light="true"
    >
      Konfirmasi
    </button>
  );
};

export const getbtnSendStyle = () => {
  const pathName = location.pathname;
  const lastSegment = pathName.split("/");

  return lastSegment[2] === "bdki"
    ? themeStyling.bdki.btnSendStyle
    : themeStyling.martipay.btnSendStyle;
};

export const getChannelID = () => {
  const pathName = location.pathname;
  const path = pathName.split("/");

  // console.log("path[2] : ", path[2]);
  return path[2];
};

export const ButtonWithStyle = ({ onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={getButtonStyleConfirmation()}
      type="button"
      data-ripple-light="true"
    >
      Konfirmasi
    </button>
  );
};
//=============================================================================================== end ===============//

//========================================================================================== handle button to go to some page  ===============//
//========================================================================================================= start //
export const handleButtonGoToPageRegister = (urlvalidation) => {
  // console.log(domain+urlvalidation);
  window.location.href = domain + urlvalidation; // "/register/bdki";
};
export const handleButtonGoToPageCreatePin = (urlvalidation) => {
  // console.log(domain+urlvalidation);
  window.location.href = domain + urlvalidation; // "/create-pin/bdki";
};
export const handleButtonGoToPageLoginInputPin = (urlvalidation) => {
  // console.log(domain+urlvalidation);
  window.location.href = domain + urlvalidation; // "/login/bdki";
};
export const handleButtonGoToPageHome = () => {
  window.location.href = "/";
};
export const handleGoToTopupPage = () => {
  window.location.href = "/topup";
};
//=============================================================================================== end ===============//

//=============== initialize for testing function =============== //
// start
export const initializeAccount = () => {
  return {
    phoneNumber: "081283566949",
    otp: "111111",
  };
};
//=============== end ===============//

//==================================================================================== other component for styling ===================//
//========================================================================================================= start //
import ImagePinImageTemplate from "../assets/icons/account-home.png";

export const PROFILE_NAME = "NAMA USER"; //profile imagae
export const ImagePin = ImagePinImageTemplate; //
export const DescriptionSuccess = "Top Up JakOne Berhasil !"; //profile imagae

//=============================================================================================== end ===============//

//============== init conditional url for change style =================//
//========================================================================================================= start //
import themeStyling from "../components/configuration_css/Config.json";

export const getButtonStyle = () => {
  const pathName = location.pathname;
  const lastSegment = pathName.split("/");
  // console.log(lastSegment[2]);
  return lastSegment[2] === "bdki"
    ? themeStyling.bdki.buttonStyle
    : themeStyling.martipay.buttonStyle;
};

export const getButtonStyleConfirmation = () => {
  const pathName = location.pathname;
  const lastSegment = pathName.split("/");

  return lastSegment[2] === "bdki"
    ? themeStyling.bdki.buttonStyleConfirmation
    : themeStyling.martipay.buttonStyleConfirmation;
};

export const getStyledPinInput = () => {
  // this code for customize your button || example : classname={getStyledPinInput()}
  const pathName = location.pathname;
  const lastSegment = pathName.split("/"); // .pop();

  return lastSegment[2] === "bdki"
    ? themeStyling.bdki.pinInputStyle
    : themeStyling.martipay.pinInputStyle;
};
//=============================================================================================== end ===============//

//========================================================================== to get transalation in config language || to use check the const file ===============//
//========================================================================================================= start //
export const useTranslationHook = () => {
  return useTranslation();
};

//===========================================================//
// ============== start message input number phone =============//
//===========================================================//

export const getHeaderMessageHome = () => {
  const { t } = useTranslation();
  return t("headerHome.message");
};

export const getBodyHome = () => {
  const { t } = useTranslation();
  return t("bodyHome.body");
};

export const getDescriptionTermsAndCondition = () => {
  const { t } = useTranslation();
  return t("descriptionTermsAndCondition.body");
};

//===========================================================//
// ============== end message input number phone =============//
//===========================================================//

//===========================================================//
// ============== start message input pin login phone =============//
//===========================================================//

export const getHeaderMessageInputPinLogin = () => {
  const { t } = useTranslation();
  return t("headerInputPinLoginAccount.body");
};

export const getMessageHeaderPinAccess = () => {
  const { t } = useTranslation();
  const [bankName, accessMessage] = t("accessRequest.bank", {
    returnObjects: true,
  });
  return (
    <div>
      <strong>{bankName}</strong> {accessMessage}
    </div>
  );
};

export const getMessageInputPinAccess = () => {
  const { t } = useTranslation();

  return t("accessRequest.message");
};

// get description input message
export const getDescriptionMessageInputPinAccess = () => {
  const { t } = useTranslation();
  const descriptionMessageInputPinAccess = t("accessRequest.details", {
    returnObjects: true,
  });

  return (
    <div className="ml-8 mb-12">
      <ul className="list-disc">
        {descriptionMessageInputPinAccess.map((key, index) => (
          <li key={index} className="mb-4 mt-4">
            {t(`accessRequest.${key}`).substring("accessRequest.".length)}
          </li>
        ))}
      </ul>
    </div>
  );
};

//===========================================================//
// ============== end message input pin login phone =============//
//===========================================================//

//===========================================================//
// ============== start message create input pin login phone =============//
//===========================================================//
export const getMessageHeaderCreatePinPage = () => {
  const { t } = useTranslation();
  return t("headerCreatePin.headerPage");
};

export const getMessageHeaderCreatePin = () => {
  const { t } = useTranslation();
  return t("headerCreatePin.headerMessage");
};
//===========================================================//
// ============== end message create input pin login phone =============//
//===========================================================//

//===========================================================//
// ============== start message confirmation create input pin login phone =============//
//===========================================================//

export const getMessageHeaderConfirmationPinPage = () => {
  const { t } = useTranslation();
  return t("headerConfirmation.headerPage");
};

export const getMessageHeaderConfirmationPin = () => {
  const { t } = useTranslation();
  return t("headerConfirmation.headerMessage");
};
//===========================================================//
// ============== end message confirmation create input pin login phone =============//
//===========================================================//

//===========================================================//
// ============== start button change language with flag =============//
//===========================================================//

export const changeLanguageAndRenderButton = ({ country, i18n }) => {
  const handleButtonClick = () => {
    // console.log("i18n:", i18n);
    // console.log(`Button clicked for ${country}`);
    i18n.changeLanguage(country);
    // console.log("Bahasa berhasil diubah ", country);
    localStorage.setItem("language", country);
  };

  return (
    <button
      onClick={handleButtonClick}
      style={{
        display: "flex",
        alignItems: "center",
        marginRight: "0.5rem",
        padding: "0.5rem    ",
      }}
    >
      <Flag code={country} height="24" />
      {country}
    </button>
  );
};

//===========================================================//
// ============== end button change language with flag =============//
//===========================================================//

// ini testing mas ozy
export const setButtonYellow = () => {
  const pathName = location.pathname;

  return pathName.includes("/home/bdki")
    ? themButton.bdki.btnYellow
    : themButton.martipay.btnYellow;
};

//===========================================================//
// ============== start message register page =============//
//===========================================================//
export const getHeaderMessageRegister = () => {
  const { t } = useTranslation();
  return t("registerPageDescription.header");
};

export const getBodyMessageRegister = () => {
  const { t } = useTranslation();
  return t("registerPageDescription.body");
};

export const getFormAndRegister = () => {
  const { t } = useTranslation();
  const testing = t("registerPageDescription.formBody", {
    returnObjects: true,
  });
  return testing;
};

//===========================================================//
// ============== end message register page =============//
//===========================================================//

//===========================================================//
// ============== start message how to top up =============//
//===========================================================//
export const getHeaderPageHowToTopUpWithJakonePay = () => {
  const { t } = useTranslation();
  return (
    <>
      <b>{t("headerDescriptionTopup.header")}</b>
    </>
  );
};

export const getDescriptionHeaderTopUpWithATMBankDki = () => {
  const { t } = useTranslation();
  const headerDescription = t("topupDescription.header", {
    returnObjects: true,
  });
  return headerDescription.map((key, index) => (
    <div key={index}>
      {index === 0 && (
        <b>
          {t(`topupDescription.${key}`).substring("topupDescription.".length)}
        </b>
      )}
      {index === 1 && (
        <small>
          {t(`topupDescription.${key}`).substring("topupDescription.".length)}
        </small>
      )}
    </div>
  ));
};

export const getBodyDescriptionTopUpWithATMBankDki = () => {
  const { t } = useTranslation();
  return t("topupDescription.body");
};

export const getDescriptionTopUpWithATMBankDki = () => {
  const { t } = useTranslation();
  const descriptionHowToTopUpWithATMBankDki = t(
    "topupDescription.description",
    { returnObjects: true }
  );

  return (
    <div className="grid grid-cols-6 my-4">
      {descriptionHowToTopUpWithATMBankDki.map((step, index) => (
        <React.Fragment key={index}>
          <div className="w-8 h-8 bg-red-500 rounded text-white flex items-center justify-center mb-2">
            {index + 1}
          </div>
          <div className="col-span-4">
            {step
              .split("<span>")
              .map((part, i) =>
                i % 2 === 0 ? (
                  <React.Fragment key={i}>{part}</React.Fragment>
                ) : (
                  <span key={i}>{part}</span>
                )
              )}
          </div>
          <br />
        </React.Fragment>
      ))}
    </div>
  );
};

// ATM Bank Lain
export const getDescriptionHeaderTopUpWithATMBankLain = () => {
  const { t } = useTranslation();
  const headerDescription = t("topupDescriptionBankLain.header", {
    returnObjects: true,
  });
  return headerDescription.map((key, index) => (
    <div key={index}>
      {index === 0 && (
        <b>
          {t(`topupDescriptionBankLain.${key}`).substring(
            "topupDescriptionBankLain.".length
          )}
        </b>
      )}
      {index === 1 && (
        <small>
          {t(`topupDescriptionBankLain.${key}`).substring(
            "topupDescriptionBankLain.".length
          )}
        </small>
      )}
    </div>
  ));
};

export const getBodyDescriptionTopUpWithATMBankLain = () => {
  const { t } = useTranslation();
  return t("topupDescriptionBankLain.body");
};

export const getDescriptionTopUpWithATMBankLain = () => {
  const { t } = useTranslation(); // Pastikan Anda mengganti dengan hook translation yang sesuai
  const descriptionHowToTopUpWithATMBankLain = t(
    "topupDescriptionBankLain.description",
    { returnObjects: true }
  );

  return (
    <div className="grid grid-cols-6 my-4">
      {descriptionHowToTopUpWithATMBankLain.map((step, index) => (
        <React.Fragment key={index}>
          <div className="w-8 h-8 bg-red-200 rounded flex items-center justify-center mb-2">
            {index + 1}
          </div>
          <div className="col-span-4">
            {step.split("<span>").map((part, i) =>
              i % 2 === 0 ? (
                <React.Fragment key={i}>{part}</React.Fragment>
              ) : (
                <span key={i} className="text-red-500">
                  {part}
                </span>
              )
            )}
          </div>
          <br />
        </React.Fragment>
      ))}
    </div>
  );
};

//JakOneMobile
export const getDescriptionHeaderTopUpWithATMJakOneMobile = () => {
  const { t } = useTranslation();
  const headerDescription = t("topupDescriptionJakOneMobile.header", {
    returnObjects: true,
  });
  return headerDescription.map((key, index) => (
    <div key={index}>
      {index === 0 && (
        <b>
          {t(`topupDescriptionJakOneMobile.${key}`).substring(
            "topupDescriptionJakOneMobile.".length
          )}
        </b>
      )}
      {index === 1 && (
        <small>
          {t(`topupDescriptionJakOneMobile.${key}`).substring(
            "topupDescriptionJakOneMobile.".length
          )}
        </small>
      )}
    </div>
  ));
};

export const getBodyDescriptionTopUpWithATMJakOneMobile = () => {
  const { t } = useTranslation();
  return t("topupDescriptionJakOneMobile.body");
};

export const getDescriptionTopUpWithATMJakOneMobile = () => {
  const { t } = useTranslation();
  const descriptionHowToTopUpWithATMJakOneMobile = t(
    "topupDescriptionJakOneMobile.description",
    { returnObjects: true }
  );

  return (
    <div className="grid grid-cols-6 my-4">
      {descriptionHowToTopUpWithATMJakOneMobile.map((step, index) => (
        <React.Fragment key={index}>
          <div className="w-8 h-8 bg-red-200 rounded flex items-center justify-center mb-2">
            {index + 1}
          </div>
          <div className="col-span-4">
            {step.split("<span>").map((part, i) =>
              i % 2 === 0 ? (
                <React.Fragment key={i}>{part}</React.Fragment>
              ) : (
                <span key={i} className="text-red-500">
                  {part}
                </span>
              )
            )}
          </div>
          <br />
        </React.Fragment>
      ))}
    </div>
  );
};

export const getDescriptionHeaderTopUpWithATMDebitKredit = () => {
  const { t } = useTranslation();
  const headerDescription = t("topupDescriptionDebitKredit.header", {
    returnObjects: true,
  });
  return headerDescription.map((key, index) => (
    <div key={index}>
      {index === 0 && (
        <b>
          {t(`topupDescriptionDebitKredit.${key}`).substring(
            "topupDescriptionDebitKredit.".length
          )}
        </b>
      )}
      {index === 1 && (
        <small>
          {t(`topupDescriptionDebitKredit.${key}`).substring(
            "topupDescriptionDebitKredit.".length
          )}
        </small>
      )}
    </div>
  ));
};

export const getBodyDescriptionTopUpWithATMDebitKredit = () => {
  const { t } = useTranslation();
  return t("topupDescriptionDebitKredit.body");
};

export const getDescriptionTopUpWithATMDebitKredit = () => {
  const { t } = useTranslation();
  const descriptionHowToTopUpWithATMDebitKredit = t(
    "topupDescriptionDebitKredit.description",
    { returnObjects: true }
  );

  return (
    <div className="grid grid-cols-6 my-4">
      {descriptionHowToTopUpWithATMDebitKredit.map((step, index) => (
        <React.Fragment key={index}>
          <div className="w-8 h-8 bg-red-200 rounded flex items-center justify-center mb-2">
            {index + 1}
          </div>
          <div className="col-span-4">
            {step.split("<span>").map((part, i) =>
              i % 2 === 0 ? (
                <React.Fragment key={i}>{part}</React.Fragment>
              ) : (
                <span key={i} className="text-red-500">
                  {part}
                </span>
              )
            )}
          </div>
          <br />
        </React.Fragment>
      ))}
    </div>
  );
};

export const LoaderPageWithLottie = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: "40%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        opacity: 0.7,
      }}
    >
      <div className="centered-container">
        <Lottie
          animationData={AnimationLoader}
          loop={true}
          autoplay={true}
          speed={1}
          style={{ width: "1%", height: "1%" }}
        />
      </div>
    </div>
  );
};

export const LoadLogo = () => {
  const pathName = location.pathname;
  const lastSegment = pathName.split("/");
  // console.log("LoadImage : ", lastSegment[2]);
  return lastSegment[2] === "bdki" ? (
    <img className="" width={200} src={logobdki} alt="My Image" />
  ) : (
    <img className="" width={200} src={logomartipay} alt="My Image" />
  );
};

export const LoadIconShield = () => {
  const pathName = location.pathname;
  const lastSegment = pathName.split("/");
  // console.log("LoadImage : ", lastSegment[2]);
  return lastSegment[2] === "bdki" ? (
    <img className="" width={200} src={logoiconbdki} alt="My Image" />
  ) : (
    <img className="" width={200} src={logoiconmartipay} alt="My Image" />
  );
};

export const LoadBgColor = () => {
  const pathName = location.pathname;
  const lastSegment = pathName.split("/");
  // console.log("LoadImage : ", lastSegment[2]);
  return lastSegment[2] === "bdki"
    ? themeStyling.bdki.styleloadBgColor
    : themeStyling.martipay.styleloadBgColor;
};
//===========================================================//
// ============== end message how to top up =============//
//===========================================================//

//=============================================================================================== end ===============//

//===========================================================//
// ============== start encrypt decyrpt =============//
//===========================================================//
import CryptoJS from "crypto-js";

// const IvEnkrip = "Y198HJ34BMH4D9EB";
// const KeyEnkrip = "RACPBQMF68R6BPOZKNW7ERD7ZYWO849T";
// const SaltEnkrip = "GET2L0JVOB4S2U0UBV920IT4T415IYA6";

const IvEnkrip = "my16digitIvKey12";
const KeyEnkrip = "my32digitkey12345678901234567890";
// const SaltEnkrip = "GET2L0JVOB4S2U0UBV920IT4T415IYA6";

export const FunctionEncrypt = (inputData) => {
  const iv = CryptoJS.enc.Utf8.parse(IvEnkrip);
  const key = CryptoJS.enc.Utf8.parse(KeyEnkrip);
  const encrypt = CryptoJS.AES.encrypt(inputData, key, { iv: iv }).toString();
  return encrypt;
};

export const FunctionEncryptBase64 = (inputData) => {
  const iv = CryptoJS.enc.Utf8.parse(IvEnkrip);
  // const salt = CryptoJS.enc.Utf8.parse(SaltEnkrip);
  const key = CryptoJS.enc.Utf8.parse(KeyEnkrip);
  const encrypt = CryptoJS.AES.encrypt(inputData, key, { iv: iv }).toString();
  const encryptWithBase64 = CryptoJS.enc.Base64.parse(encrypt).toString();

  return encryptWithBase64;
};

export const FunctionDecryptAES = (textEncrypt) => {
  const iv = CryptoJS.enc.Utf8.parse(IvEnkrip);
  // const salt = CryptoJS.enc.Utf8.parse(SaltEnkrip);
  const key = CryptoJS.enc.Utf8.parse(KeyEnkrip);
  const decrypt = CryptoJS.AES.decrypt(textEncrypt, key, { iv: iv }).toString(
    CryptoJS.enc.Utf8
  );

  return decrypt;
};

export const FunctionDecryptBase64 = (textEncryptBase64) => {
  const encrypt = CryptoJS.enc.Base64.parse(textEncryptBase64).toString();
  const iv = CryptoJS.enc.Utf8.parse(IvEnkrip);
  // const salt = CryptoJS.enc.Utf8.parse(SaltEnkrip);
  const key = CryptoJS.enc.Utf8.parse(KeyEnkrip);
  const decryptEncryptWithBase64 = CryptoJS.AES.decrypt(encrypt, key, {
    iv: iv,
  }).toString(CryptoJS.enc.Utf8);

  return decryptEncryptWithBase64;
};
// ============== Setup Cookies =============//
export const setCookie = (value) => {
  const expirationTime = 60000; // newDate(newDate().getTime() + 60000);
  Cookies.set("data", JSON.stringify(value), {
    expires: expirationTime,
    secure: true,
  }); // , { expires: 7, secure: true }
};

export const getCookie = () => {
  const data = Cookies.get("data"); // Get the value of the cookie
  //   alert(`User Token: ${data || "Not found"}`);
  return data;
};

export const deleteCookie = () => {
  Cookies.remove("data"); // Remove the cookie
};

// ============== End Setup Cookies =============//
// Footer
export const setFooter = () => {
  const pathName = location.pathname;
  const path = pathName.split("/");

  return path[2] === "bdki" ? (
    <div></div>
  ) : (
    <footer className="... sticky bottom-0 w-full bg-white p-5 text-center flex justify-center items-center">
    <p className="font-sans text-gray-600">&copy; Powered by</p>
      <img className="float-end" width={90} src={logobdki} alt="My Image" />
    </footer>
  );
};
