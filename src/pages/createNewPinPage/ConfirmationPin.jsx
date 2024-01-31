import React from "react";
import ImagePinImage from "../../assets/icons/adminpanelsettings.png";

import {
  PinInputWithStyle,
  getMessageHeaderConfirmationPinPage,
  getMessageHeaderConfirmationPin
} from "../../constantFile/I_Constant";

const ConfirmationPin = () => {
  return (
    <div>
      <div className="max-w-md mx-auto my-2 bg-white rounded-md overflow-hidden shadow-sm">
        <div className="p-4 items-center justify-center">
          <h2 className="text-xl font-semibold my-2 text-center">
            {getMessageHeaderConfirmationPinPage()}
          </h2>
          <p className="text-center mb-2">
            {getMessageHeaderConfirmationPin()}
          </p>

          <div className="flex items-center justify-center my-4">
            <img className="" width={60} src={ImagePinImage} alt="My Image" />
          </div>

          <div className="flex flex-wrap flex-col items-center">
            <div className="flex items-center">
              {PinInputWithStyle({ secretDelay: 0 })}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ConfirmationPin;
