import { encode as base64_encode } from "base-64";
import moment from "moment";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  FunctionEncrypt,
  LoadBgColor,
  LoadIconShield,
  LoadLogo,
  PinInputWithStyle,
  getChannelID,
  getCookie,
  getMessageHeaderCreatePin
} from "../../constantFile/I_Constant";
import DataEndPoint from "../../services/APIServices";

const CreatePin = () => {
  const [pin, setPin] = useState("");
  let { idreg, id, url } = useParams();

  const params = useParams();
  const pParams = {
    idRequest: params.idreg, // value ? value : null,
    requestDate: moment().format("YYYY-MM-DD"),
    requestTime: moment().format("hh:mm:ss"),
    channelId: getChannelID(), // path[2] // "MARTIPAY" // sesData.channelId, // 
  };

  const handlePinChange = (value) => {
    setPin(value);
    if (pin.length === 5) {
      DataEndPoint.getinquiryDataByIdRequest(pParams).then((res) => {
        if (res.resultMessages == "Success") {
          const _getCookie = JSON.parse(getCookie());
        }
      });
      id = value;
      url = "/confirmation-pin/"+pParams.channelId+"/"+idreg+"/"+base64_encode(FunctionEncrypt(id));
      window.location.href = url;
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
        <h4 className="text-xl pt-4 text-center text-gray-600">{getMessageHeaderCreatePin()}</h4>
        <div className="w-full py-2 mt-6 overflow-hidden bg-white sm:max-w-lg sm:rounded-lg  bg-opacity-0">
          <div className="items-center justify-center">
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
