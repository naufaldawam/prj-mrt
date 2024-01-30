import React from "react";
import { useLocation } from "react-router-dom";


//=============== for folder homepage -> InputNoHp.jsx ===============//
// start //
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PhoneInput from "react-phone-input-2";
import PinInputTemplate from "react-pin-input";
import ModalTermsAndConditionTemplate from "../components/ModalSyaratKetentuan";


export const PinInput = PinInputTemplate;
export const ModalTermsAndCondition = ModalTermsAndConditionTemplate;
export const FontAwesomeIconCheckeCircle = <FontAwesomeIcon icon={faCheckCircle} />;
export const TemplatePhoneInput = PhoneInput;
//=============== end ===============//

//=============== handle button to go to some page  ===============//
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
//=============== end ===============//


//=============== initialize for testing function =============== //
// start 
export const initializeAccount = () => {
    return {
        phoneNumber: "081283566949",
        otp: "111111",
    };
};
//=============== end ===============//



//============== lainnya ===================//
// start
import ImagePinImageTemplate from "../assets/icons/account-home.png";
import InputPinTemplateV2 from "../components/InputPin";
import ToDoListTemplate from "../components/TodoListKetentuan";

export const PROFILE_NAME = "NAMA USER";
export const PinInputV2 = InputPinTemplateV2;
export const TodoList = ToDoListTemplate;
export const ImagePin = ImagePinImageTemplate;
//=============== end ===============//



//============== conditional url =================//
// start
import themButton from "../components/configuration_css/Config.json";

export const getButtonStyle = () => {
    const location = useLocation();
    const pathName = location.pathname;

    return pathName.includes("/home/bdki")
        ? themButton.bdki.buttonStyle
        : themButton.mrt.buttonStyle;
};

export const getButtonStyleConfirmation = () => {
    const location = useLocation();
    const pathName = location.pathname;

    return pathName.includes("/home/bdki")
        ? themButton.bdki.buttonStyleConfirmation
        : themButton.mrt.buttonStyleConfirmation;
};

export const setButtonYellow = () => {
    const location = useLocation();
    const pathName = location.pathname;

    return pathName.includes("/home/bdki")
        ? themButton.bdki.btnYellow
        : themButton.mrt.btnYellow;
};