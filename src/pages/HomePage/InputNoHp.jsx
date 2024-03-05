import { encode as base64_encode } from "base-64";
import moment from "moment";
import React, { useEffect, useState } from "react";
import "react-phone-input-2/lib/bootstrap.css";
import { useParams } from "react-router-dom";
import {
  FontAwesomeIconCheckeCircle,
  FunctionEncrypt,
  LoadBgColor,
  LoadLogo,
  ModalTermsAndCondition,
  OtpInputWithStyle,
  PhoneInputWithStyle,
  getButtonStyle,
  getChannelID,
  getCookie,
  getbtnSendStyle,
} from "../../constantFile/I_Constant";
import DataEndPoint from "../../services/APIServices";

const InputNoHp = () => {
  const [value, setValue] = useState();
  const [otpvalue, setOtpValue] = useState();
  const [showOTPInput, setShowOTPInput] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [counter, setCounter] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState(5);
  let { idreg, id, url } = useParams();
  const [tfphoneNumber, settfphoneNumber] = useState(true);
  const params = useParams();
  url = "/reset-pin/" + getChannelID() + "/" + params.idreg;

  let { stannum } = useParams();
  stannum = Math.floor(Math.random() * 999999) + 100000;

  const handleStart = () => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(interval);
        } else {
          setSeconds(0);
          setMinutes(minutes - 1);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  };
  handleStart();
  const _getCookie = JSON.parse(getCookie());
  // console.log(_getCookie);

  const [formData, setFormData] = useState({
    phoneNumber: "",
  });

  const requestOTP = () => {
    // handleStart();
    // alert("value : " + value);
    const RequestOtpParam = {
      accountNumber: value,
      channelId: getChannelID(),
      stan: stannum,
      requestDate: moment().format("YYYY-MM-DD"),
      requestTime: moment().format("hh:mm:ss"),
    };
    // console.log("RequestOtpParam : ", RequestOtpParam);
    // contoh menggunakan API services
    DataEndPoint.getRequestOtp(RequestOtpParam)
      .then((res) => {
        // console.log(res);
        if (res.data.resultMessages == "Success") {
          setIsActive(true);
          setShowOTPInput(true);
        } else if (res.data.resultMessages == "Failed") {
          setShowOTPInput(false);
        } else if (res.data.resultMessages == "Error") {
          alert("Server error...!");
        }
      })
      .catch(() => {
        // console.log("error");
      });
  };

  const btnConfirmOTP = () => {
    // window.location.href = url + "/" + base64_encode(FunctionEncrypt(value));
    // console.log(url);
    const ConfirmOTPParam = {
      accountNumber: value,
      otp: otpvalue,
      channelId: getChannelID(),
      stan: stannum,
      requestDate: moment().format("YYYY-MM-DD"),
      requestTime: moment().format("hh:mm:ss"),
    };

    // // contoh menggunakan API services
    DataEndPoint.getValidationOtp(ConfirmOTPParam)
      .then((res) => {
        // console.log(res.resultMessages);
        // console.log(res.data.resultMessages);
        if (res.resultMessages == "Success") {
          window.location.href =
            url + "/" + base64_encode(FunctionEncrypt(value));
        } else if (res.resultMessages == "Failed") {
          alert("Failed respon...!");
        } else if (res.resultMessages == "Error") {
          alert("Server error...!");
        }
      })
      .catch(() => {
        console.log("error");
      });
  };

  const loadDataInquiry = () => {
    const data = {
      phoneNumber: _getCookie.phoneNumber,
    };
    _getCookie.phoneNumber
            ? settfphoneNumber(true)
            : settfphoneNumber(false);
    setFormData(data);
    setValue(data.phoneNumber);
  };

  useEffect(() => {
    loadDataInquiry();
  }, []);

  // <span className="time">{hours}</span> : <span className="time">{minutes}</span> : <span className="time">{seconds}</span>
  return (
    <div>
      <div className={LoadBgColor()}>
        <div>
          <a href="/">
            <h3 className="text-4xl font-bold text-red-600">{LoadLogo()}</h3>
          </a>
        </div>
        <hr className="w-64 h-1 bg-gray-200 border-0 rounded dark:bg-gray-700" />
        <div className="max-w-lg mx-auto bg-white overflow-hidden">
          <div className="p-4">
            <h2 className="text-xl my-2 text-center text-gray-600">Welcome</h2>
            <p className="my-4">
              Experience a new way of transaction with {getChannelID()}
            </p>

            <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row">
              <div className="flex-1 mb-4 sm:mb-4 md:mb-4 lg:mr-2 xl:mr-2">
                <label htmlFor="phone">
                  <b>Phone Number</b>
                </label>
                <div className="border-solid border border-gray-500 rounded py-1">
                  <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">

                    <div className="col-span-2">
                      <input type="text" value={formData.phoneNumber} style={{border:"none",borderColor:"transparent", outline:"none", padding:"1rem", fontWeight:"bold", }}/>
                    </div>

                    <div className="flex items-center  sm:ml-0 md:ml-0 lg:ml-2 xl:ml-2 z-0">
                      <button
                        onClick={requestOTP}
                        className={getbtnSendStyle()}
                        type="button"
                        data-ripple-light="true"
                      >
                        Kirim OTP
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
                  <div className="flex flex-wrap items-center justify-center">
                    {OtpInputWithStyle({
                      secretDelay: 0,
                      value: otpvalue,
                      onChange: setOtpValue,
                    })}
                    <button
                      onClick={btnConfirmOTP}
                      disabled={!isActive}
                      type="button"
                      data-ripple-light="true"
                      className={getButtonStyle()}
                    >
                      Konfirmasi
                    </button>
                  {/* {seconds > 0 || minutes > 0 ? (
                    <p>
                      Time Remaining: {minutes < 10 ? `0${minutes}` : minutes}:
                      {seconds < 10 ? `0${seconds}` : seconds}
                    </p>
                  ) : (
                    <p>Didn't recieve code?</p>
                  )} */}
                  </div>
                </div>
              )}
            </div>

            <div className="mt-20">
              Seluruh transaksi baik dan aman. Dengan melanjutkan proses ini,
              menu menyetujui
              <ModalTermsAndCondition />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputNoHp;
