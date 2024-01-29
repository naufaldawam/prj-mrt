import React, { createContext, useContext, useState } from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import Flag from "react-world-flags";


//=============== for folder homepage -> InputNoHp.jsx ===============//
// start //
import PinInputTemplate from "react-pin-input";
import ModalTermsAndConditionTemplate from "../components/ModalSyaratKetentuan";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import PhoneInput from "react-phone-input-2";


export const PinInputWithStyle = ({ secretDelay,  }) => { //nanti di bagian akses publik
    const PinInput = PinInputTemplate;
    return <PinInput
        length={6}
        initialValue=""
        secret={false}
        onChange={() => { }}
        type="numeric"
        inputMode="number"
        inputStyle={getStyledPinInput()}
        inputFocusStyle={{}}
        onComplete={() => { }}
        autoSelect={true}
        regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
        secretDelay={secretDelay}
    />
}

export const ModalTermsAndCondition = ModalTermsAndConditionTemplate;
export const FontAwesomeIconCheckeCircle = <FontAwesomeIcon icon={faCheckCircle} />;

export const TemplatePhoneInput = PhoneInput; // ini juga jangan lupa di hapus sebelum push
export const PhoneInputWithStyle = () => {//nanti di bagian akses publik
    const [value, setValue] = useState(); //to handle change
    // console.log("value fom phone input with style at phone input with style constant", value);
    const PhoneInputTemplate = PhoneInput;
    return <PhoneInputTemplate
        country="id"
        placeholder="input nomor anda"
        masks={{ id: '.... .... ....' }}
        inputStyle={{
            border: "none",
            boxShadow: "none",
            outline: "none",
            width: "230px",
        }}
        value={value}
        onChange={setValue}
    />
}

export const ButtonWithStyle = ({ onClick, disabled }) => {
    return <button
        onClick={onClick}
        disabled={disabled}
        className={getButtonStyleConfirmation()}
        type="button"
        data-ripple-light="true"
    >
        Konfirmasi
    </button>
}
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
    window.location.href = "/login/bdki"
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



//============== other component to style ===================//
// start
import ImagePinImageTemplate from "../assets/icons/account-home.png";

export const PROFILE_NAME = "NAMA USER"; //profile imagae
export const ImagePin = ImagePinImageTemplate; //
//=============== end ===============//



//============== conditional url for change style =================//
// start
import themeStyling from "../components/configuration_css/Config.json";

export const getButtonStyle = () => {
    const location = useLocation();
    const pathName = location.pathname;
    const lastSegment = pathName.split('/').pop();

    return lastSegment === "bdki"
        ? themeStyling.bdki.buttonStyle
        : themeStyling.mrt.buttonStyle;
};

export const getButtonStyleConfirmation = () => {
    const location = useLocation();
    const pathName = location.pathname;
    const lastSegment = pathName.split('/').pop();

    return lastSegment === "bdki"
        ? themeStyling.bdki.buttonStyleConfirmation
        : themeStyling.mrt.buttonStyleConfirmation;
};

export const getStyledPinInput = () => {
    const location = useLocation();
    const pathName = location.pathname;
    const lastSegment = pathName.split('/').pop();

    return lastSegment === "bdki"
        ? themeStyling.bdki.pinInputStyle
        : themeStyling.mrt.pinInputStyle;
};
//=============== end ===============//


//=============== lib locale translation ===============//
// start
export const useTranslationHook = () => {
    return useTranslation();
}

export const getHeaderMessageHome = () => {
    const { t } = useTranslation();
    return t('headerHome.message');
};

export const getBodyHome = () => {
    const { t } = useTranslation();
    return t('bodyHome.body');
};

export const getDescriptionTermsAndCondition = () => {
    const { t } = useTranslation();
    return t('descriptionTermsAndCondition.body');
};

export const getHeaderMessageInputPinLogin = () => {
    const { t } = useTranslation();
    return t('headerInputPinLoginAccount.body');
}


export const getMessageHeaderPinAccess = () => {
    const { t } = useTranslation();
    const [bankName, accessMessage] = t('accessRequest.bank', { returnObjects: true });
    return <div>
        <strong>{bankName}</strong> {accessMessage}
    </div>
}

export const getMessageInputPinAccess = () => {
    const { t } = useTranslation();

    return t('accessRequest.message')
}

// get description input message
export const getDescriptionMessageInputPinAccess = () => {
    const { t } = useTranslation();
    const descriptionMessageInputPinAccess = t('accessRequest.details', { returnObjects: true });

    return <div className="ml-8 mb-12">
        <ul className="list-disc">
            {descriptionMessageInputPinAccess.map((key, index) => (
                <li key={index} className='mb-4 mt-4'>
                    {t(`accessRequest.${key}`).substring('accessRequest.'.length)}
                </li>
            ))}
        </ul>
    </div>
}


export const getMessageHeaderCreatePinPage = () => {
    const { t } = useTranslation();
    return t('headerCreatePin.headerPage')
}

export const getMessageHeaderCreatePin = () => {
    const { t } = useTranslation();
    return t('headerCreatePin.headerMessage')
}


export const getMessageHeaderConfirmationPinPage = () => {
    const { t } = useTranslation();
    return t('headerConfirmation.headerPage')
}

export const getMessageHeaderConfirmationPin = () => {
    const { t } = useTranslation();
    return t('headerConfirmation.headerMessage')
}

// button ubah bahasa dengan bendera
export const changeLanguageAndRenderButton = ({ country, i18n }) => {
    const handleButtonClick = () => {
        console.log('i18n:', i18n); // Check the state of i18n
        console.log(`Button clicked for ${country}`);
        i18n.changeLanguage(country); // Make sure i18n is defined here
        console.log("Bahasa berhasil diubah ", country);
        localStorage.setItem('language', country);
    };

    return (
        <button onClick={handleButtonClick} style={{ display: 'flex', alignItems: 'center', marginRight: '0.5rem', padding: '0.5rem    ' }}>
            <Flag code={country} height="24" /> {/* Adjust height as needed */}
            {country}
        </button>
    );
};
//=============== end ===============//
