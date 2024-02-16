import { encode as base64_encode } from 'base-64';
import Cookies from 'js-cookie';
import moment from "moment";
import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import {
  FunctionEncrypt,
  LoadBgColor,
  LoadIconShield,
  LoadLogo,
  PinInputWithStyle,
  getCookie,
  getMessageHeaderCreatePin
} from "../../constantFile/I_Constant";
import DataEndPoint from "../../services/APIServices";

const CreatePin = () => {
  const [pin, setPin] = useState("");
  let { idreg, id } = useParams();
  const location = useLocation()
  var path = location.pathname.split("/");

  const params = useParams();
  const pParams = {
    idRequest: params.idreg, // value ? value : null,
    requestDate: moment().format("YYYY-MM-DD"),
    requestTime: moment().format("hh:mm:ss"),
    channelId: path[2] // "MARTIPAY" // sesData.channelId, // 
  };
  console.log(pParams);
  DataEndPoint.getinquiryDataByIdRequest(pParams).then((res) => {
    console.log("getinquiryDataByIdRequest : ", res);
    if (res.resultMessages == "Success") {
      console.log("res.result : ", res.result);
      Cookies.set('data', JSON.stringify(res.result)); // , { expires: 7 }
      // setCookie(JSON.stringify(res.result));
      const _getCookie = JSON.parse(getCookie());
      console.log("_getCookie : ", _getCookie);
    }
  });

  const handlePinChange = (value) => {
    console.log(value);
    console.log(pin.length);
    setPin(value);
    if (pin.length === 5) {
      id = value;
      console.log("id : ", id);
      window.location.href = `/confirmation-pin/`+path[2]+`/${idreg}/${base64_encode(FunctionEncrypt(id))}`;
    }
  };


  return (
    <div>
      <div className={LoadBgColor()}>
        <div>
          <a href="/">
            <h3 className="text-4xl font-bold text-red-600">{LoadLogo()}</h3>
          </a>
        </div>
        <hr className="w-64 h-1 bg-gray-200 border-0 rounded dark:bg-gray-700" />
        <h4>{getMessageHeaderCreatePin()}</h4>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white sm:max-w-lg sm:rounded-lg  bg-opacity-0">
          <div className="p-4 items-center justify-center">
            <div className="flex flex-wrap flex-col items-center">
              <div className="flex items-center">
                {PinInputWithStyle({ secretDelay: 0, value:'', onChange: handlePinChange })}
              </div>
            </div>
            <div className="flex items-center justify-center my-4">
                {LoadIconShield()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePin;
