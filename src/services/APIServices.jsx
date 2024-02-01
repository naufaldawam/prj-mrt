const apiUrl = process.env.API_JAVA_URL;
import axios from "axios";

const config = {
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        'accept': 'application/json, text/plain, */*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        // 'Authorization': `Bearer ${token}`,
    }
};

// Contoh hasil API
// bisa lihat di file InputNoHp.jsx
// apiUrl = `http://api.thecatapi.com/v1/images/Rl39SPjDO`;  + otpPrams.id

const APIServices = {
  // Mengambil data dengan memvalidasi OTP via SMS
  getCheckAccount: async (phonePrams) => {
    console.log(phonePrams);
    try {
        let response = await axios.post(
            apiUrl + `/paymentIntegration/checkAccount`,
            phonePrams,
            {
                method: 'POST',
                config
            ,}
          );
        return response.data;
      } catch (err) {
        console.error(err);
        throw err;
      }

  },
  getValidationOtp: async (otpPrams) => {
    console.log(otpPrams);
    try {
        let response = await axios.post(
            apiUrl + `/paymentIntegration/validationOtp`,
            otpPrams,
            {
                method: 'POST',
                config
            ,}
          );
        return response.data;
      } catch (err) {
        console.error(err);
        throw err;
      }

  },
  getRegistration: async (regnotelp) => {
    try {
      let response = await axios.post(
        apiUrl + `/paymentIntegration/registration`,
        regnotelp,
        {
            method: 'POST',
            config
        ,}
      );
      return response.data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  },
  getCallbackAccountInformation: async (CAParams) => {
    try {
      let response = await axios.post(
        apiUrl + `/paymentIntegration/callbackAccountInformation`,
        CAParams,
        {
            method: 'POST',
            config
        ,}
      );
      return response.data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  },
  getCreateTransaction: async (CTParams) => {
    try {
      let response = await axios.post(
        apiUrl + `/paymentIntegration/createTransaction`,
        CTParams,
        {
            method: 'POST',
            config
        ,}
      );
      return response.data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  },
  getCallbackTransaction: async (CTransParams) => {
    try {
      let response = await axios.post(
        apiUrl + `/paymentIntegration/createTransaction`,
        CTransParams,
        {
            method: 'POST',
            config
        ,});
      return response;
    } catch (err) {
      console.error(err);
      throw err;
    }
  },
  getInquiryQris: async (InquiryQrisParams) => {
    try {
      let response = await axios.post(
        apiUrl + `/paymentIntegration/InquiryQris/`, 
        InquiryQrisParams,
        {
            method: 'POST',
            config
        ,}
      );
      return response.data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  },
  getConfirmTransaction: async (confirmTransactionParams) => {
    try {
      let response = await axios.get(
        apiUrl + `/paymentIntegration/confirmTransaction`,
          confirmTransactionParams,
          {
              method: 'POST',
              config
          ,}
      );
      return response.data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  },
  getValidationToken: async (ValidationTokenParams) => {
    try {
      let response = await axios.post(
        apiUrl + `/paymentIntegration/validationToken/`,
          ValidationTokenParams,
          {
              method: 'POST',
              config
          ,}
      );
      return response.data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  },
  getGenerateLinkTransaction: async (GenerateLinkTransactionParams) => {
    try {
      let response = await axios.post(
        apiUrl + `/paymentIntegration/generateLinkTransaction/`,
        GenerateLinkTransactionParams,
        {
            method: 'POST',
            config
        ,}
      );
      return response.data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  },
  getUnbindingAccount: async (UnbindingAccountParams) => {
    try {
      let response = await axios.post(
        apiUrl +
          `/paymentIntegration/unbindingAccount/`,
          UnbindingAccountParams,
          {
              method: 'POST',
              config
          ,}
      );
      return response.data;
    } catch (err) {
      console.error(err);
      throw err;
    }
  },
};

export default APIServices;
