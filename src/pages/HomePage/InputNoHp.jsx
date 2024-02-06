import React, { useState } from "react";
import "react-phone-input-2/lib/bootstrap.css";
import PinInput from "react-pin-input";
import {
  FontAwesomeIconCheckeCircle,
  ModalTermsAndCondition,
  PhoneInputWithStyle,
  getButtonStyle,
  getButtonStyleConfirmation
} from "../../constantFile/I_Constant";
import DataEndPoint from "../../services/APIServices";

const CreatePin = () => {
  const [value, setValue] = useState();
  const [otpvalue, setOtpValue] = useState();
  const [showOTPInput, setShowOTPInput] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const handleOTPButtonClick = () => {
    const RequestOtpParam = {
      phoneNumber: value ? value : null,
      datetimerequest: '15-11-2021 10:00:21',
      channelid: 'MARTIPAY',
      flag: '1'
    };

    // contoh menggunakan API services
    DataEndPoint.getRequestOtp(RequestOtpParam)
      .then((res) => {
        console.log(res.data.response.data);
        if (res.data.response.data == "success") {
          setIsActive(true);
          setShowOTPInput(true);
        } else if (res.data.resultMessages == "Failed") {
          setShowOTPInput(false);
        } else if (res.data.resultMessages == "Error") {
          alert("Server error...!");
        }
      })
      .catch(() => {
        console.log("error");
      });
  };

  const btnConfirmOTP = () => {
    alert(otpvalue);
    const ConfirmOTPParam = {
      token: otpvalue ? otpvalue : null,
      nohp: value ? value : null,
      datetimerequest: "15-11-2021 10:00:21",
      channelid: 'MARTIPAY'
    };

    // // contoh menggunakan API services
    DataEndPoint.getValidationOtp(ConfirmOTPParam).then((res) => {
      console.log(res);
      console.log(res.data.resultMessages);
      if (res.data.resultMessages == "Success") {
        console.log("Masuk :" + res.data.resultMessages);
        handleButtonGoToPageRegister();
      } else if (res.data.resultMessages == "Failed") {
        alert("Failed respon...!");
      } else if (res.data.resultMessages == "Error") {
        alert("Server error...!");
      }
    }).catch(() => {
      console.log("error");
    });
  };

  return (
    <div className="max-w-lg mx-auto bg-white overflow-hidden">
      <div className="p-4">
        <h2 className="text-xl font-semibold my-2 text-center">Welcome</h2>
        <p className="my-4">
          Experience a new way of transaction with JakOnePay
        </p>

        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row">
          <div className="flex-1 mb-4 sm:mb-4 md:mb-4 lg:mr-2 xl:mr-2">
            <label htmlFor="phone">
              <b>Phone Number</b>
            </label>
            <div className="border-solid border border-gray-500 rounded py-1">
              <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
                <div className="col-span-2">
                  <PhoneInputWithStyle
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
                    onChange={setValue}
                  />
                </div>
                <div className="flex items-center  sm:ml-0 md:ml-0 lg:ml-2 xl:ml-2 z-1">
                  <button
                    onClick={handleOTPButtonClick}
                    className={getButtonStyle()}
                  >
                    <span>Send OTP</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {showOTPInput && (
            <div className="flex flex-wrap items-center">
              <p className="mt-8 pb-4">
                Enter 6 digit OTP code {FontAwesomeIconCheckeCircle}
              </p>
              <div className="flex flex-wrap items-center">
              <PinInput
                  length={6}
                  initialValue=""
                  secret={false}
                  secretDelay={1000}
                  value={otpvalue}
                  onChange={setOtpValue}
                  type="numeric"
                  inputMode="number"
                  inputStyle={{
                    borderColor: "orange",
                    height: "3rem",
                    width: "2.5rem",
                    marginRight: "0.5em",
                    border: "1px solid",
                    borderBottom: "4px solid rgb(248 113 113)",
                    borderRadius: "0.375rem",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.875rem",
                    fontWeight: "100",
                    textAlign: "center",
                  }}
                  inputFocusStyle={{}}
                  onComplete={() => { }}
                  autoSelect={true}
                  regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                />
              </div>
            </div>
          )}
        </div>

        <div className="mt-20">
          Seluruh transaksi baik dan aman. Dengan melanjutkan proses ini, menu
          menyetujui
          <ModalTermsAndCondition />
        </div>

        <button
          onClick={btnConfirmOTP}
          disabled={!isActive}
          className={getButtonStyleConfirmation()}
          type="button"
          data-ripple-light="true"
        >
          Konfirmasi
        </button>
      </div>
    </div>
  );
};

export default CreatePin;

// import "react-phone-input-2/lib/bootstrap.css";
// import React from "react";
// import { getButtonStyle,getButtonStyleConfirmation } from "../../constantFile/I_Constant";

// const CreatePin = () => {

//   return (
//     <div className="max-w-lg mx-auto bg-white overflow-hidden">
//       <div className="p-4">
//         <h2 className="text-xl font-semibold my-2 text-center">Welcome</h2>
//         <p className="my-4">Experience a new way of transaction with JakOnePay</p>
//         <button className={getButtonStyle()}>COK</button>
//         <button type="button" className={getButtonStyle()}>
//           Send kode otp
//         </button>
//         <button type="button" className={getButtonStyleConfirmation()}>
//           Konfirmasi
//         </button>

//       </div>
//     </div>
//   );
// };

// export default CreatePin;
