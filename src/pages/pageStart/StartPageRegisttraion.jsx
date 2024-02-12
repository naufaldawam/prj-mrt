import Cookies from 'js-cookie';
import moment from "moment";
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  handleButtonGoToPageLoginInputPin,
  handleButtonGoToPageRegister
} from "../../constantFile/I_Constant";
import DataEndPoint from "../../services/APIServices";

const StartPage = () => {
  const navigate = useNavigate();
  const cssColor = "";

  const handleGoToRegisterBDKI = () => {
    navigate("register/bdki");
  };

  const handleGoToRegisterMRT = () => {
    const pParams = {
      phoneNumber: "6285270196990", // value ? value : null,
      stan: "123456", // setup dari BE
      requestDate: moment().format("YYYY-MM-DD"),
      requestTime: moment().format("hh:mm:ss"),
    };
    console.log("pParams : " + pParams.phoneNumber);
    DataEndPoint.getAccountInformation(pParams)
      .then((res) => {
        console.log("Request");
        console.log(pParams);
        console.log("Respons");
        console.log(res);
        const resParams = res.data.response.result ? res.data.response.result : res.data.response;
        console.log(resParams);

        if (res.data.response.message == "Success") {
          const aiRestParams = {
            phoneNumber: resParams.accountNumber,
            fullName: resParams.customerName,
            birthdate: resParams.dateOfBirth,
            placeOrBirth: resParams.placeOfBirth,
            email: resParams.email,
            channelId: "MARTIPAY",
            stan: "123456",
            requestDate: "2024-01-30",
            requestTime: "14:56:27",
          };
          console.log("aiRestParams");
          console.log(aiRestParams);
          DataEndPoint.getRequestLinkRegistration(aiRestParams)
            .then((res) => {
              console.log("RequestLinkRegistration");
              console.log(res);
              const resParams = res.data;
              console.log(resParams);
              if (resParams.resultMessages == "Success") {
                console.log(resParams.result.urlValidation);
                // const urlvalidation = resParams.urlValidation;
                Cookies.set('name', JSON.stringify(resParams), { expires: 7 });
                var json_string = Cookies.get("name");
                var array = JSON.parse(json_string);
                // setCookie(resParams);
                console.log(array.statusCode);
                handleButtonGoToPageLoginInputPin(resParams.result.urlValidation);
              } else if (resParams.resultMessages == "Failed") {
                handleButtonGoToPageRegister(urlvalidation);
              } else if (resParams.resultMessages == "Error") {
                alert("Server error...!");
              }
            })
            .catch((err) => {
              console.log("error : " + err);
            });
        } else {
          handleButtonGoToPageRegister();
        }
      })
      .catch((err) => {
        console.log("error : " + err);
      });
    // navigate("register/mrt");
  };

  return (
    <div>
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
        <div>
          <a href="/">
            <h3 className="text-4xl font-bold text-red-600">JakUji..CobaItu</h3>
          </a>
        </div>
        <hr className="w-64 h-1 bg-gray-200 border-0 rounded dark:bg-gray-700" />
        <h4>Registration form</h4>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white sm:max-w-lg sm:rounded-lg">
          <div className="pt-20 flex justify-center">
            <img
              src="https://ik.imagekit.io/naufal/mrt/undraw_welcome_re_h3d9%20(1)_QJw0QUMdu.svg?updatedAt=1706777387325"
              alt="Welcome SVG"
              className="w-80 min-h-80"
            />
          </div>

          <div className="flex justify-center pt-5 items-center ">
            <h1>
              <b>Start testing registration</b>
            </h1>
          </div>
          <div className="flex justify-center pt-5 items-center ">
            <button
              type="button"
              className="mt-4 w-full text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              onClick={handleGoToRegisterBDKI}
            >
              DKI
            </button>
            <button
              type="button"
              className="mt-4 w-full text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              onClick={handleGoToRegisterMRT}
            >
              MRT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
