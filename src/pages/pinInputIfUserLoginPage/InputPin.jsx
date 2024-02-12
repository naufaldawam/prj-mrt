import React, { useState } from "react";
import {
  ButtonWithStyle,
  ImagePin,
  PROFILE_NAME,
  PinInputWithStyle,
  getDescriptionMessageInputPinAccess,
  getDescriptionTermsAndCondition,
  getHeaderMessageInputPinLogin,
  getMessageHeaderPinAccess,
  getMessageInputPinAccess,
  handleButtonGoToPageHome,
} from "../../constantFile/I_Constant";

function PinInputPage() {
  const [isActive, setIsActive] = useState(false);
  const [value, setValue] = useState("");
  const handleChange = (newValue) => {
    setValue(newValue);
    console.log("new value", newValue);
  };

  return (
    <>
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
        <div>
          <a href="/">
            <h3 className="text-4xl font-bold text-red-600">JakOnePay</h3>
          </a>
        </div>
        <hr className="w-64 h-1 bg-gray-200 border-0 rounded dark:bg-gray-700" />
        <h4>{getHeaderMessageInputPinLogin()}</h4>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white sm:max-w-lg sm:rounded-lg">
          <div className="flex flex-wrap flex-col items-center">
            <div className="text-center p-4">
              {PinInputWithStyle({ secretDelay: 10 })}
        <div className="mt-4 text-grey-600">
            Reset your PIN when you aren't signed.{" "}
            <span>
              <a className="text-red-600 hover:underline" href="/home/bdki">
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
                  <p className="text-xl bold font-medium">{PROFILE_NAME}</p>
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
              {ButtonWithStyle({
                onClick: handleButtonGoToPageHome,
                disabled: isActive,
              })}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default PinInputPage;
