import React from "react";
import ImagePinImage from "../../assets/icons/adminpanelsettings.png";

import {
  PinInputWithStyle,
  getMessageHeaderConfirmationPin
} from "../../constantFile/I_Constant";

const ConfirmationPin = () => {
  return (
    <div>
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
        <div>
          <a href="/">
            <h3 className="text-4xl font-bold text-red-600">JakOnePay</h3>
          </a>
        </div>
        <hr className="w-64 h-1 bg-gray-200 border-0 rounded dark:bg-gray-700" />
        <h4>{getMessageHeaderConfirmationPin()}</h4>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white sm:max-w-lg sm:rounded-lg">
          <div className="p-4 items-center justify-center">
            <div className="flex items-center justify-center my-4">
              <img className="" width={60} src={ImagePinImage} alt="My Image" />
            </div>
            <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="phoneNumber"
              ></label>
            <div className="flex flex-wrap flex-col items-center">
              <div className="flex items-center">
                {PinInputWithStyle({ secretDelay: 0 })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPin;
