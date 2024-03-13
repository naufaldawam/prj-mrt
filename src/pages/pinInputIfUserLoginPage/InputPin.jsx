import { decode as base64_decode, encode as base64_encode } from "base-64";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  FunctionDecryptAES,
  FunctionEncrypt,
  LoadBgColor,
  LoadLogo,
  LoaderPageWithLottie,
  PinInputWithStyle,
  getButtonStyle,
  getChannelID,
  getDescriptionMessageInputPinAccess,
  getDescriptionTermsAndCondition,
  getHeaderMessageInputPinLogin,
  getMessageHeaderPinAccess,
  getMessageInputPinAccess,
  setCookie
} from "../../constantFile/I_Constant";
import DataEndPoint from "../../services/APIServices";

function PinInputPage() {
  const [isActive, setIsActive] = useState(false);
  const [pin, setPin] = useState("");
  const [phones, setPhones] = useState("");
  const [msg, setMsg] = useState("");
  let { id, nama, dataResponse, url, urlExpired } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const params = useParams();
  // const _getCookie = JSON.parse(getCookie());
  // console.log(_getCookie);
  url = "/requestotp/" + getChannelID() + "/" + params.id; // + "/" + base64_encode(FunctionEncrypt(_getCookie.phoneNumber));
  urlExpired = "/expired-pin/" + getChannelID();

  const getTimeExpired = () => {
    const getValueIdReg = FunctionDecryptAES(base64_decode(params.id))
    const getValue = getValueIdReg.split("||");
    const getDate = Date.parse(getValue[1]);
    return getDate;
  };

  const pParams = {
    idRequest: params.id, // value ? value : null,
    requestDate: moment().format("YYYY-MM-DD"),
    requestTime: moment().format("hh:mm:ss"),
    channelId: getChannelID(), // path[2] // "MARTIPAY" // sesData.channelId, //
  };

  // console.log(pin);
  if (pin === '') {
    DataEndPoint.getinquiryDataByIdRequest(pParams).then((res) => {
      if (res.resultMessages == "Success") {
        setCookie(res.result);
        params.dataResponse = res;
        setPhones(res.result.phoneNumber);
        if (res.result.username === null || res.result.fullname === null) {
          window.location.href = "/";
        }
      }
    });
  }

  const BtnPostAccountBinding = () => {
    // console.log("dataResponse : ", params.dataResponse);
    const pabParams = {
      idRequest: params.id, // value ? value : null,
      phoneNumber: params.dataResponse.result.phoneNumber,
      pin: base64_encode(FunctionEncrypt(pin)),
      channelId: params.dataResponse.result.channelId,
      stan: params.dataResponse.result.stan,
      requestDate: moment().format("YYYY-MM-DD"),
      requestTime: moment().format("hh:mm:ss"),
    };
    // console.log("BtnPostAccountBinding : ", pabParams,pin, base64_encode(FunctionEncrypt(pin)), FunctionEncrypt(pin));
    DataEndPoint.getPostAccountBinding(pabParams).then((res) => {
      // console.log("getPostAccountBinding : ", res);
      if (res.responseCode == "00") {
        setIsLoading(false);
        setIsActive(false);
        window.location.href = "/success-login/" + params.dataResponse.result.channelId + "/" + params.id;
      } else if (res.resultMessages == "Expired" || res.responseCode == "06") {
        window.location.replace = urlExpired;
      } else {
        
        // console.log(res.resultMessages);
        setIsActive(false);
        setIsLoading(false);
        setShowModal(true);
      }
      setPin('');
      setMsg(res.resultMessages);
    });

    setIsActive(true);
    setIsLoading(true);
  };

  const handlePinChange = (value) => {
    setPin(value);
  };
  const modalclose = () => {
    window.location.reload();
  };

  useEffect(() => {
    const fetchData = async () => {
        getTimeExpired();
        const urlExpired = "/expired-link/" + getChannelID();
        const getDateFromBlockPayment = getTimeExpired();
        const date = Date.parse(moment().format("DD-MM-YYYY HH:mm:SS"));
        // console.log("cuks" + getDateFromBlockPayment)
        if (date > getDateFromBlockPayment) {
            window.location.replace(urlExpired);
        }
    };

    fetchData();
}, []);

  return (
    <>
      {isLoading ? <LoaderPageWithLottie /> : PinInputPage}
      <div className={LoadBgColor()}>
        <div>
          <a href="/">
            <h3 className="text-4xl font-bold text-red-600">{LoadLogo()}</h3>
          </a>
        </div>
        <hr className="w-64 h-1 bg-gray-200 border-0 rounded dark:bg-gray-700" />
        <h4 className="text-xl pt-4 text-center text-gray-600">{getHeaderMessageInputPinLogin()}</h4>
        <div className="w-full py-2 mt-4 overflow-hidden bg-white sm:max-w-lg sm:rounded-lg">
          <div className="flex flex-wrap flex-col items-center">
            <div className="text-center">
              {PinInputWithStyle({
                secretDelay: 0,
                value: "",
                onChange: handlePinChange,
              })}
            </div>
          </div>
        </div>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white sm:max-w-lg sm:rounded-lg">
          <div className="flex flex-wrap flex-col items-center">
            <div className="mt-4 text-grey-600">
              Reset your PIN when you aren't signed.{" "}
              <span>
                <a
                  className="text-red-600 hover:underline"
                  href={url}
                >
                  Forget PIN
                </a>
              </span>
            </div>
          </div>
          <form>
            <hr />
            {getMessageHeaderPinAccess()}

            <div className="my-2">
              <div className="font-extrabold text-xl">

                <p className="text-center">{phones}</p>

              </div>
            </div>
            <div className=" text-justify">
              <div className="mb-2">
                {getMessageInputPinAccess()}
                {getDescriptionMessageInputPinAccess()}
              </div>

              <div>
                <p>{getDescriptionTermsAndCondition()}</p>
              </div>
            </div>
            <div>
              <button
                onClick={BtnPostAccountBinding}
                disabled={isActive}
                type="button"
                data-ripple-light="true"
                className={getButtonStyle()}
              >
                Konfirmasi
              </button>
            </div>
          </form>
        </div>
      </div>
      {showModal ? (
        <>
          <div className="justify-center p-2 items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
            <div className="relative w-full max-w-md max-h-full dark:border-red-700 dark:bg-red-800 dark:hover:bg-red-700 border-solid border-2 rounded-lg border-lime-400">
              <div className="relative bg-white rounded-lg shadow">
                <button
                  type="button"
                  className="absolute top-3 end-2.5 text-black-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-hide="popup-modal"
                  onClick={modalclose}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
                <div className="p-4 md:p-5 text-center">
                  <svg
                    className="mx-auto mb-4 text-orange-400 w-12 h-12 dark:text-orange-200"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                  <h3 className="mb-5 text-lg font-normal text-black-500 dark:text-black-400">
                    {msg}
                  </h3>

                  <button
                    onClick={modalclose}
                    data-modal-hide="popup-modal"
                    type="button"
                    // className="py-2.5 px-5 ms-3 text-sm font-medium text-black-900 focus:outline-none bg-white rounded-lg border border-yellow-200 hover:bg-yellow-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-yellow-100 dark:focus:ring-yellow-700 dark:bg-yellow-800 dark:text-yellow-400 dark:border-yellow-600 dark:hover:text-white dark:hover:bg-yellow-700"
                    className="bg-orange-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-lg"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default PinInputPage;
