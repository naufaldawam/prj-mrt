import React, { useState } from "react";


// // for folder homepage -> InputNoHp.jsx 
// start //
import PinInputTemplate from "react-pin-input";
import ModalTermsAndConditionTemplate from "../components/ModalSyaratKetentuan";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import PhoneInput from "react-phone-input-2";


export const PinInput = PinInputTemplate;
export const ModalTermsAndCondition = ModalTermsAndConditionTemplate;
export const FontAwesomeIconCheckeCircle = <FontAwesomeIcon icon={faCheckCircle} />;
export const TemplatePhoneInput = PhoneInput;
// end //

// // handle button to go to some page // //
// start //
export const handleButtonGoToPageRegister = () => {
    window.location.href = "/register";
};

export const handleButtonGoToPageCreatePin = () => {
    window.location.href = "/create-pin";
};

export const handleButtonGoToPageLoginInputPin = () => {
    window.location.href = "/login"
};

export const handleButtonGoToPageHome = () => {
    window.location.href = "/"
};
// end //


// // initialize for testing function
// start 
export const initializeAccount = () => {
    return {
      phoneNumber: "081283566949",
      otp: "111111",
    };
  };