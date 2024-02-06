import React, { useState } from "react";
import {
  handleButtonGoToPageHome,
  PROFILE_NAME,
  ImagePin,
  getDescriptionTermsAndCondition,
  getHeaderMessageInputPinLogin,
  getMessageInputPinAccess,
  PinInputWithStyle,
  ButtonWithStyle,
  getDescriptionMessageInputPinAccess,
  getMessageHeaderPinAccess
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
      <div className="flex min-h-screen items-center justify-center">
        <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
          <h2 className="block font-sans  font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased text-center my-8">
            {getHeaderMessageInputPinLogin()}
          </h2>
          <div className="flex flex-wrap flex-col items-center">
            <div className="text-center p-4">
              {PinInputWithStyle({ secretDelay: 10, })}
            </div>
          </div>
          <form className="mx-8 md:mx-20 md:px-20">
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
                  <p className="text-xl bold font-medium">
                    {PROFILE_NAME}
                  </p>
                </div>

              </div>
            </div>

            <div className="mb-2">
              {getMessageInputPinAccess()}
              {getDescriptionMessageInputPinAccess()}
            </div>

            <div>
              <p>
                {getDescriptionTermsAndCondition()}
              </p>
            </div>

            <div>
              {ButtonWithStyle({ onClick: handleButtonGoToPageHome, disabled: isActive })}
            </div>

          </form>
        </div>
      </div>
    </>
  );
}

export default PinInputPage;
