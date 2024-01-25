// CreatePin.js
import React from "react";
// import Pin from "./InputNoHp";
import Pin from "../../components/CreatePin";
import ImagePinImage from "../../assets/icons/adminpanelsettings.png";

const CreatePin = () => {
  return (
    <div>
      <div className="max-w-md mx-auto my-2 bg-white rounded-md overflow-hidden shadow-sm">
        <div className="p-4 items-center justify-center">
          <h2 className="text-xl font-semibold my-2 text-center">Create PIN</h2>
          <p className="text-center mb-2">Create your PIN Transaction</p>
          <div className="flex items-center justify-center my-4">
            <img className="" width={60} src={ImagePinImage} alt="My Image" />
          </div>
          <Pin />
        </div>
      </div>
      <div className="bg-gray-50"></div>
    </div>
  );
};

export default CreatePin;
