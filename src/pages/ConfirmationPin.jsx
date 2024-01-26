// ConfirmationPin.js
import React from "react";
// import InputPin from "../components/InputPin";
import ImagePinImage from "../assets/icons/adminpanelsettings.png";
import ConfirmPin from "../components/ConfirmationPin";

const ConfirmationPin = () => {
  return (
    <div>
      <div className="max-w-md mx-auto my-2 bg-white rounded-md overflow-hidden shadow-sm">
        <div className="p-4 items-center justify-center">
          <h2 className="text-xl font-semibold my-2 text-center">
            PIN Confirmation
          </h2>
          <p className="text-center mb-2">Reconfirm 4 digit of your PIN</p>
          <div className="flex items-center justify-center my-4">
            <img className="" width={60} src={ImagePinImage} alt="My Image" />
          </div>
          <ConfirmPin />
        </div>
      </div>
      <div className="bg-gray-50"></div>
    </div>
  );
};

export default ConfirmationPin;
