import { decode as base64_decode, encode as base64_encode } from "base-64";
import moment from "moment";
import React, { useState } from "react";
import { useParams } from "react-router-dom";

import {
  FunctionDecryptAES,
  FunctionEncrypt,
  LoadBgColor,
  LoadIconShield,
  LoadLogo,
  LoaderPageWithLottie,
  PinInputWithStyle,
  getChannelID,
  getCookie,
  getMessageHeaderConfirmationPin
} from "../../constantFile/I_Constant";
import DataEndPoint from "../../services/APIServices";

const ConfirmationResetPin = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [pin, setPin] = useState("");
  let { idreg, id, phone, url } = useParams();
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);  
  const [msg, setMsg] = useState('');
  const [btnCaption, setBtnCaption] = useState('');
  
  let { stannum } = useParams();
  stannum = Math.floor(Math.random() * 999999) + 100000;

  const _getCookie = JSON.parse(getCookie());
  url = "/login/" + getChannelID() + "/" + params.idreg;
  const modalclose = () => {
    if(msg !== ''){
      window.location.href = url;
    }else{
      window.location.reload();
    }
  };
  const enkripPIN = (pin) => {
    DataEndPoint.getEnkripAes(pin)
      .then((res) => {
        return res;
      })
      .catch((err) => {});
  };

  const handlePinComplete = (value) => {
    const paramsid = FunctionDecryptAES(base64_decode(params.id));
    if (value.length === 6) {
      if (paramsid === value) {
        setIsLoading(true);
        const jsonPin = {
          accountNumber: FunctionDecryptAES(base64_decode(FunctionDecryptAES(base64_decode(params.phone)))),
          channelId: getChannelID(),
          stan: stannum,
          pin: base64_encode(FunctionEncrypt(value)),
          requestDate: moment().format("YYYY-MM-DD"),
          requestTime: moment().format("hh:mm:ss"),
        };
        DataEndPoint.getPostChangePin(jsonPin)
          .then((res) => {
            if (res.responseCode == "00") {
              setMsg(res.resultMessages); // window.location.href = url;
              setBtnCaption(`Continue`)
              setShowModal(true);
            } else {
              alert(res.resultMessages);
            }
            setIsLoading(false);
          })
          .catch((err) => {
            setIsLoading(false);
            alert(err.message);
          });
      } else {
        setShowModal(true);
      }
    }
  };

  return (
    <>
      <div>
        {isLoading ? <LoaderPageWithLottie /> : ConfirmationResetPin}
        <div className={LoadBgColor()}>
          <div>
            <a href="/">
              <h3 className="text-4xl font-bold text-red-600">{LoadLogo()}</h3>
            </a>
          </div>
          <hr className="w-64 h-1 bg-gray-200 border-0 rounded dark:bg-gray-700" />
          <h4 className="text-xl pt-4 text-center text-gray-600">{getMessageHeaderConfirmationPin()}</h4>
          <div className="w-full py-2 mt-6 overflow-hidden bg-white sm:max-w-lg sm:rounded-lg bg-opacity-0">
            <div className="items-center justify-center">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="phoneNumber"
              ></label>
              <div className="flex flex-wrap flex-col items-center">
                <div className="flex items-center">
                  {PinInputWithStyle({
                    secretDelay: 0,
                    onChange: handlePinComplete,
                  })}
                </div>
                <div className="flex items-center justify-center my-4">
                  {LoadIconShield()}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="relative p-6 flex-auto">
                  <p className="my-1 text-blueGray-500 text-lg leading-relaxed">
                    {msg ? msg : `Confimation PIN is not match...!`}
                  </p>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="bg-blue-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full"
                    type="button"
                    onClick={modalclose}
                  >
                    {btnCaption ? btnCaption : `Close`}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default ConfirmationResetPin;
