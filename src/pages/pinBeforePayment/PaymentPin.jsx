import { encode as base64_encode, decode as base64_decode } from "base-64";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  FunctionDecryptAES,
  FunctionDecryptBase64,
  FunctionEncrypt,
  LoadBgColor,
  LoadIconShield,
  LoadLogo,
  LoaderPageWithLottie,
  PinInputWithStyle,
  getChannelID
} from "../../constantFile/I_Constant";
import DataEndPoint from "../../services/APIServices";

function PaymentPin() {
  const [showModal, setShowModal] = React.useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [pin, setPin] = useState("");
  const params = useParams();
  let { idreg, msg } = useParams();
  let { stannum } = useParams();
  stannum = Math.floor(Math.random() * 999999) + 100000;

  const getBlockPayment = () => {
    const getValueIdReg = FunctionDecryptAES(base64_decode(params.idreg))
    const getValue = getValueIdReg.split("||");
    const getDate = Date.parse(getValue[2]);
    // console.log(getValueIdReg);
    return getDate;
  };

  const handlePinChange = (value) => {
    setPin(value);
    if (value.length === 6) {
      setIsLoading(true);
      const pabParams = {
        keyReference: params.idreg,
        stan: stannum,
        pin: base64_encode(FunctionEncrypt(value)),
        requestDate: moment().format("YYYY-MM-DD"),
        requestTime: moment().format("hh:mm:ss"),
      };
      // console.log("postRequestPayment : ", pabParams);
      // console.log("postRequestPayment : ", idreg);
      DataEndPoint.getPostRequestPayment(pabParams).then((res) => {
        console.log(res);
        if (res.responseCode == "00" || res.resultMessage == "Success") {
          setIsLoading(false);
          window.location.href = "/Success-payment/" + getChannelID();
        } else if (res.responseCode == "06" || res.resultMessage == "Expired") {
          window.location.href = urlExpired;
        } else {
          // console.log(res.resultMessage);
          params.msg = res.resultMessage;
          setIsLoading(false);
          setShowModal(true);
        }
      });
    }
  };

  const modalclose = () => {
    window.location.reload();
  };

  useEffect(() => {
    getBlockPayment();
    const urlExpired = "/expired-pin/" + getChannelID();
    const getDateFromBlockPayment = getBlockPayment();
    const date = Date.parse(moment().format("DD-MM-YYYY HH:mm:SS"));
    if (date > getDateFromBlockPayment) {
      window.location.replace(urlExpired);
    }

  });

  return (
    <>
      {isLoading ? <LoaderPageWithLottie /> : PaymentPin}
      <div className={LoadBgColor()}>
        <div>
          <a href="/">
            <h3 className="text-4xl font-bold text-red-600">{LoadLogo()}</h3>
          </a>
        </div>
        <hr className="w-64 h-1 bg-gray-200 border-0 rounded dark:bg-gray-700" />
        <h4 className="text-xl pt-4 text-center text-gray-600">Enter your {getChannelID()} PIN</h4>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white sm:max-w-lg sm:rounded-lg">
          <div className="flex flex-wrap flex-col items-center">
            <div className="text-center p-4">
              {PinInputWithStyle({
                secretDelay: 0,
                value: "",
                onChange: handlePinChange,
              })}
            </div>

            <div className="flex items-center justify-center my-4">
              {LoadIconShield()}
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
                {/* <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h5 className="text-3xl font-semibold">Incorrect PIN</h5>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={modalclose}
                  >
                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div> */}
                {/*body*/}
                <div className="relative p-6 flex-auto">
                  <p className="text-blueGray-500 text-lg leading-relaxed">
                    <h4>{msg}</h4>
                  </p>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-2 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="bg-blue-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-lg"
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
}

export default PaymentPin;
