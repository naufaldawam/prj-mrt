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
  getChannelID
} from "../../constantFile/I_Constant";
import DataEndPoint from "../../services/APIServices";

function PinInputPage() {
  const [pin, setPin] = useState("");
  const params = useParams();
  let { idreg, dataRespont } = useParams();

  const handlePinChange = (value) => {
    console.log(value);
    console.log(value.length);
    setPin(value);
    if (value.length === 6) {
      // console.log("id : ", idreg);
      const pabParams = {
        keyReference: params.idreg, 
        pin: base64_encode(FunctionEncrypt(value)),
        requestDate: moment().format("YYYY-MM-DD"),
        requestTime: moment().format("hh:mm:ss"),
      };
      // console.log("postRequestPayment : ", pabParams);
      DataEndPoint.getPostRequestPayment(pabParams).then((res) => {
        console.log(res);
        if (res.responseCode == "Success") {
          window.location.href = "/success-pin";
        }
      });
    }
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
    </>
  );
}

export default PinInputPage;
