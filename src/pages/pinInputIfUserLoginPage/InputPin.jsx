import { encode as base64_encode } from "base-64";
import moment from "moment";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  FunctionEncrypt,
  ImagePin,
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
  setCookie,
} from "../../constantFile/I_Constant";
import DataEndPoint from "../../services/APIServices";

function PinInputPage() {
  const [isActive, setIsActive] = useState(false);
  const [pin, setPin] = useState("");
  let { id, nama, dataRespont } = useParams();
  const [showModal, setShowModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // var _getCookie = '';
  // console.log("Input Pin : ", _getCookie.result);

  const params = useParams();
  const pParams = {
    idRequest: params.id, // value ? value : null,
    requestDate: moment().format("YYYY-MM-DD"),
    requestTime: moment().format("hh:mm:ss"),
    channelId: getChannelID(), // path[2] // "MARTIPAY" // sesData.channelId, //
  };
  // console.log(pParams);
  DataEndPoint.getinquiryDataByIdRequest(pParams).then((res) => {
    if (res.resultMessages == "Success") {
      setCookie(res.result);
      // console.log(res.result);
      params.nama = res.result.fullName;
      dataRespont = res;
      // console.log("params.nama : ", params.nama);

      if (res.result.username === null || res.result.fullname === null) {
        window.location.href = "/";
        // console.log("404");
      }
    }
  });

  const BtnPostAccountBinding = () => {
    setIsActive(true);
    setIsLoading(true);
    const pabParams = {
      idRequest: params.id, // value ? value : null,
      phoneNumber: dataRespont.result.phoneNumber,
      pin: base64_encode(FunctionEncrypt(pin)),
      channelId: dataRespont.result.channelId,
      stan: dataRespont.result.stan,
      requestDate: moment().format("YYYY-MM-DD"),
      requestTime: moment().format("hh:mm:ss"),
    };
    // console.log("BtnPostAccountBinding : ", pabParams);
    DataEndPoint.getPostAccountBinding(pabParams).then((res) => {
      if (res.resultMessages == "Success") {
        setIsLoading(false);
        setIsActive(false);
        window.location.href = "/success-pin";
      } else {
        setIsActive(false);
        setIsLoading(false);
        setShowModal(true);
      }
    });
  };

  const handlePinChange = (value) => {
    setPin(value);
    // console.log("id : ", value);
  };
  const modalclose = () => {
    window.location.reload();
  };

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
        <h4>{getHeaderMessageInputPinLogin()}</h4>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white sm:max-w-lg sm:rounded-lg">
          <div className="flex flex-wrap flex-col items-center">
            <div className="text-center p-4">
              {PinInputWithStyle({
                secretDelay: 0,
                value: "",
                onChange: handlePinChange,
              })}
              <div className="mt-4 text-grey-600">
                Reset your PIN when you aren't signed.{" "}
                <span>
                  <a
                    className="text-red-600 hover:underline"
                    href={"/home/" + getChannelID()}
                  >
                    Forget PIN
                  </a>
                </span>
              </div>
            </div>
          </div>
          <form>
            <hr />
            {getMessageHeaderPinAccess()}

            <div className="my-2">
              <div className="flex items-center">
                <img
                  src={ImagePin}
                  alt="Profile"
                  className="w-10 h-10 rounded-full mr-2"
                />

                <div>
                  <p className="text-xl bold font-medium">{params.nama}</p>
                </div>
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
                    Invalid PIN
                  </h3>

                  <button
                    onClick={modalclose}
                    data-modal-hide="popup-modal"
                    type="button"
                    className="py-2.5 px-5 ms-3 text-sm font-medium text-black-900 focus:outline-none bg-white rounded-lg border border-yellow-200 hover:bg-yellow-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-yellow-100 dark:focus:ring-yellow-700 dark:bg-yellow-800 dark:text-yellow-400 dark:border-yellow-600 dark:hover:text-white dark:hover:bg-yellow-700"
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
