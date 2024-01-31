const apiUrl = process.env.API_JAVA_URL;
import axios from "axios";

// Contoh hasil API
// bisa lihat di gile InputNoHp.jsx
// apiUrl = `http://api.thecatapi.com/v1/images/Rl39SPjDO`;


const APIServices = {
    // Mengambil data dengan memvalidasi OTP via SMS
    getOtp : async (otpPrams) => {
        try {
                console.log(otpPrams.id);
                let response = await axios.get(apiUrl + `http://api.thecatapi.com/v1/images/` + otpPrams.id);
                return response.data;
            } catch (err) {
                console.error(err);
                throw err;
            }
    },
    getRegistration : async (regnotelp) => {
        try {
            let response = await axios.post(apiUrl + `/paymentIntegration/registration/`, regnotelp);
            return response.data;
        } catch (err) {
            console.error(err);
            throw err;
        }
    },
    getCallbackAccountInformation : async (CAParams) => {
        try {
        let response = await axios.get(apiUrl + `/paymentIntegration/callbackAccountInformation` + CAParams.id);
            return response.data;
        } catch (err) {
            console.error(err);
            throw err;
        }
    },
    getCreateTransaction : async (CTParams) => {
        try {
        let response = await axios.post(apiUrl + `/paymentIntegration/createTransaction`, CTParams);
            return response.data;
        } catch (err) {
            console.error(err);
            throw err;
        }
    },
    getCallbackTransaction : async (CTransParams) => {
        try {
        let response = await axios.get(apiUrl + `/paymentIntegration/callbackTransaction/` + CTransParams.id);
            return response.data;
        } catch (err) {
            console.error(err);
            throw err;
        }
    },
    getInquiryQris : async (InquiryQrisParams) => {
        try {
        let response = await axios.get(apiUrl + `/paymentIntegration/InquiryQris/` + InquiryQrisParams.id);
            return response.data;
        } catch (err) {
            console.error(err);
            throw err;
        }
    },
    getConfirmTransaction : async (confirmTransactionParams) => {
        try {
        let response = await axios.get(apiUrl + `/paymentIntegration/confirmTransaction` + confirmTransactionParams.id);
            return response.data;
        } catch (err) {
            console.error(err);
            throw err;
        }
    },
    getValidationToken : async (ValidationTokenParams) => {
        try {
        let response = await axios.get(apiUrl + `/paymentIntegration/validationToken/` + ValidationTokenParams.id);
            return response.data;
        } catch (err) {
            console.error(err);
            throw err;
        }
    },
    getGenerateLinkTransaction : async (GenerateLinkTransactionParams) => {
        try {
        let response = await axios.get(apiUrl + `/paymentIntegration/generateLinkTransaction/` + GenerateLinkTransactionParams.id);
            return response.data;
        } catch (err) {
            console.error(err);
            throw err;
        }
    },
    getUnbindingAccount : async (UnbindingAccountParams) => {
        try {
        let response = await axios.get(apiUrl + `/paymentIntegration/unbindingAccount/` + UnbindingAccountParams.id);
            return response.data;
        } catch (err) {
            console.error(err);
            throw err;
        }
    },
}

export default APIServices

