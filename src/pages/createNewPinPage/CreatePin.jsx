import moment from "moment";
import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import {
  LoadIconShield,
  LoadLogo,
  PinInputWithStyle,
  getCookie,
  getMessageHeaderCreatePin,
  setCookie
} from "../../constantFile/I_Constant";
import DataEndPoint from "../../services/APIServices";


const CreatePin = () => {
  const [pin, setPin] = useState("");
  let { id } = useParams();
  const location = useLocation()
  var path = location.pathname.split("/");

  const params = useParams();
  const pParams = {
    idRequest: params.id, // value ? value : null,
    requestDate: moment().format("YYYY-MM-DD"),
    requestTime: moment().format("hh:mm:ss"),
    channelId: path[2] // "MARTIPAY" // sesData.channelId, // 
  };

  DataEndPoint.getinquiryDataByIdRequest(pParams).then((res) => {
    console.log("getinquiryDataByIdRequest : ", res);
    if (res.resultMessages == "Success") {
      setCookie(JSON.stringify(res.result));
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
      window.location.href = `/confirmation-pin/`+path[2]+`/${id}`;
    }
  };


  return (
    <div>
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
        <div>
          <a href="/">
            <h3 className="text-4xl font-bold text-red-600">{LoadLogo()}</h3>
          </a>
        </div>
        <hr className="w-64 h-1 bg-gray-200 border-0 rounded dark:bg-gray-700" />
        <h4>{getMessageHeaderCreatePin()}</h4>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white sm:max-w-lg sm:rounded-lg">
          <div className="p-4 items-center justify-center">
            <div className="flex items-center justify-center my-4">
                {LoadIconShield()}
            </div>
            <div className="flex flex-wrap flex-col items-center">
              <div className="flex items-center">
                {PinInputWithStyle({ secretDelay: 0, value:'', onChange: handlePinChange })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePin;
