import React, { useState } from "react";
import "react-phone-input-2/lib/bootstrap.css";
import {
  ButtonWithStyle,
  FontAwesomeIconCheckeCircle,
  ModalTermsAndCondition,
  PhoneInputWithStyle,
  PinInputWithStyle,
  changeLanguageAndRenderButton,
  getBodyHome,
  getDescriptionTermsAndCondition,
  getHeaderMessageHome,
  handleButtonGoToPageLoginInputPin,
  useTranslationHook
} from "../../constantFile/I_Constant";

const CreatePin = () => {
  const [showOTPInput, setShowOTPInput] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const handleOTPButtonClick = () => {
    setShowOTPInput(true);
    setIsActive(true);
    const paramOtp = {
      id: 'Rl39SPjDO'
    };

    // contoh menggunakan API services
    DataEndPoint.getOtp(paramOtp).then((res) => {
      console.log(res);
    });
  };

  const { i18n } = useTranslationHook();


  return (
    <div className="max-w-lg mx-auto bg-white overflow-hidden">
      
      <div className="flex justify-start">
        {changeLanguageAndRenderButton({ country: 'us', i18n })}
        {changeLanguageAndRenderButton({ country: 'id', i18n })}
      </div>

      <div className="p-4">

        <h2 className="text-xl font-semibold my-2 text-center">{getHeaderMessageHome()}</h2>
        <p className="my-4">{getBodyHome()}</p>
        <b>Phone Number</b>

        <div className="border-solid border border-gray-500 rounded py-1">
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
            
            <div className="col-span-2">
              {PhoneInputWithStyle()}
            </div>

            <div className="flex items-center  sm:ml-0 md:ml-0 lg:ml-2 xl:ml-2 z-1">
              <button
                onClick={handleOTPButtonClick}
                className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              >
                <span>Send OTP</span>
              </button>
            </div>

          </div>
        </div>


        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row flex-col">
          {showOTPInput && (
            
            <div>
              <p className="mt-8 pb-4">Enter 6 digit OTP code {FontAwesomeIconCheckeCircle}</p>
              <div className="flex flex-wrap flex-col items-center">
                <div className="flex items-center">
                  {PinInputWithStyle({ secretDelay: 0 })}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-20">
          <p>{getDescriptionTermsAndCondition()}
            <ModalTermsAndCondition />
          </p>
        </div>

        <div>
          {ButtonWithStyle({ onClick: handleButtonGoToPageLoginInputPin, disabled: !isActive })}
        </div>

      </div>
    </div>
  );
};

export default CreatePin;

// import "react-phone-input-2/lib/bootstrap.css";
// import React from "react";
// import { getButtonStyle, getButtonStyleConfirmation, getButtonStyleMaterial, changeLanguageAndRenderButton, useTranslationHook } from "../../constantFile/I_Constant";

// const CreatePin = () => {
//   const { i18n } = useTranslationHook();
//   console.log('i18n in component:', i18n);

//   return (
//     <div className="max-w-lg mx-auto bg-white overflow-hidden">
//       <div className="p-4">
//         {/* <button onClick={() => changeLanguage('en', i18n)} className="">English</button> */}
//         {/* //         <button onClick={() => changeLanguage('id', i18n)}>Indonesia</button> */}
//         {changeLanguageAndRenderButton({ country: 'us', i18n })}
//         {changeLanguageAndRenderButton({ country: 'id', i18n })}

//         <h2 className="text-xl font-semibold my-2 text-center">ini te</h2>
//         <p className="my-4">testing</p>
//         <button type="button" className={getButtonStyle()}>
//           Send kode otp
//         </button>
//         {getButtonStyleMaterial()}
//         <button type="button" className={getButtonStyleConfirmation()}>
//           Konfirmasi
//         </button>

//       </div>
//     </div>
//   );
// };

// export default CreatePin;
