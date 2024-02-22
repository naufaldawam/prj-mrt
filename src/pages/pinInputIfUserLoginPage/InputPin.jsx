import { encode as base64_encode } from "base-64";
import moment from "moment";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  FunctionEncrypt,
  ImagePin,
  LoadBgColor,
  LoadLogo,
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
  let { id, nama, dataRespont } = useParams();
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
      console.log("params.nama : ", params.nama);
      

      if (res.result.username === null || res.result.fullname === null) {
        window.location.href = "/";
        console.log("404");
      }
    }
  });

  const BtnPostAccountBinding = () => {
    console.log("BtnPostAccountBinding : " ,dataRespont.result.fullName);
    const pabParams = {
        idRequest: params.id, // value ? value : null,
        phoneNumber: dataRespont.result.phoneNumber,
        pin: base64_encode(FunctionEncrypt(pin)),
        channelId: dataRespont.result.channelId,
        stan: dataRespont.result.stan,
        requestDate: moment().format("YYYY-MM-DD"),
        requestTime: moment().format("hh:mm:ss"),
      };
      console.log("BtnPostAccountBinding : " ,pabParams);
    DataEndPoint.getPostAccountBinding(pabParams).then((res) => {
      if (res.resultMessages == "Success") {
        window.location.href = "/success-pin";
      }
    });
  };

  const handlePinChange = (value) => {
    setPin(value);
    console.log("id : ", value);
  };

  return (
    <>
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
              {PinInputWithStyle({ secretDelay: 0, value:'', onChange: handlePinChange })}
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
    </>
  );
}

export default PinInputPage;
