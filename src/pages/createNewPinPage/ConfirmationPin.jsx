import { decode as base64_decode, encode as base64_encode } from "base-64";
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
  getCookie,
  getMessageHeaderConfirmationPin
} from "../../constantFile/I_Constant";
import DataEndPoint from "../../services/APIServices";

const ConfirmationPin = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [pin, setPin] = useState("");
  let { idreg, id } = useParams();
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const _getCookie = JSON.parse(getCookie());

  const modalclose = () => {
    window.location.reload();
  };

  const enkripPIN = (pin) => {
    DataEndPoint.getEnkripAes(pin)
      .then((res) => {
        return res;
      })
      .catch((err) => {
      });
  };

  const handlePinComplete = (value) => {
    const paramsid = FunctionDecryptAES(base64_decode(params.id));
    if (value.length === 6) {
      if (paramsid === value) {
        setIsLoading(true);
        const jsonPin = {
          idRequest: params.id,
          pin: base64_encode(FunctionEncrypt(value)),
        };
        let pPostRegistrationAccount = Object.assign(_getCookie, jsonPin);
        
        DataEndPoint.getPostRegistrationAccount(pPostRegistrationAccount)
          .then((res) => {
            if (res.resultMessages == "Success") {
              window.location.href = "/success-pin";
            } else {
              alert("Connection error...!");
            }
            setIsLoading(false);
          })
          .catch((err) => {
            setIsLoading(false);
            alert("Connection error...!");
          });
      } else {
        setShowModal(true);
      }
    }
  };

  return (
    <>
      <div>
    {isLoading ? <LoaderPageWithLottie /> : ConfirmationPin}
        <div className={LoadBgColor()}>
          <div>
            <a href="/">
              <h3 className="text-4xl font-bold text-red-600">{LoadLogo()}</h3>
            </a>
          </div>
          <hr className="w-64 h-1 bg-gray-200 border-0 rounded dark:bg-gray-700" />
          <h4>{getMessageHeaderConfirmationPin()}</h4>
          <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white sm:max-w-lg sm:rounded-lg bg-opacity-0">
            <div className="p-4 items-center justify-center">
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
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Syarat & Ketentuan</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={modalclose}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                    Confimation PIN is not match...!
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="bg-blue-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full"
                    type="button"
                    onClick={modalclose}
                  >
                    Close
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

export default ConfirmationPin;
