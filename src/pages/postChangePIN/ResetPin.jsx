import { encode as base64_encode } from "base-64";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  FunctionEncrypt,
  LoadBgColor,
  LoadIconShield,
  LoadLogo,
  PinInputWithStyle,
  getChannelID,
  getMessageHeaderCreatePin
} from "../../constantFile/I_Constant";

const ResetPin = () => {
  const [pin, setPin] = useState("");
  let { idreg, id, acnum, phone, url } = useParams();

  const params = useParams();
  // const pParams = {
  //   idRequest: params.idreg, // value ? value : null,
  //   requestDate: moment().format("YYYY-MM-DD"),
  //   requestTime: moment().format("hh:mm:ss"),
  //   channelId: getChannelID(), // path[2] // "MARTIPAY" // sesData.channelId, //
  // };
  // console.log(FunctionDecryptAES(base64_decode(params.phone)));
  // console.log(phone);

  const handlePinChange = (value) => {
    // console.log(value);
    // console.log(value.length);
    setPin(value);
    if (value.length === 6) {
      // DataEndPoint.getinquiryDataByIdRequest(pParams).then((res) => {
      //   if (res.resultMessages == "Success") {
      //     const _getCookie = JSON.parse(getCookie());
      //   }
      // });
      id = value;
      // console.log("id : ", idreg);
      url = "/confirmation-reset-pin/"+getChannelID()+"/"+idreg+"/"+base64_encode(FunctionEncrypt(id))+"/"+base64_encode(FunctionEncrypt(phone));
      // console.log("Channel : ", url);
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

export default ResetPin;
