import moment from "moment";
import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import {
  LoaderPageWithLottie,
  getCookie,
  handleButtonGoToPageLoginInputPin,
  handleButtonGoToPageRegister,
  setCookie,
} from "../../constantFile/I_Constant";
import DataEndPoint from "../../services/APIServices";

const StartPage = () => {
  // const navigate = useNavigate();
  // const cssColor = "";
  const [isLoading, setIsLoading] = useState(false);
  // const local_host = process.env.LOCAL_HOST;

  const handleGoToRegisterBDKI = () => {
    const pParams = {
      phoneNumber: "085270196990", // value ? value : null,
      stan: "123456", // setup dari BE
      requestDate: moment().format("YYYY-MM-DD"),
      requestTime: moment().format("hh:mm:ss"),
    };
    setIsLoading(true);
    DataEndPoint.getAccountInformation(pParams)
      .then((res) => {
        const resParams = res.data.response.result
          ? res.data.response.result
          : res.data.response;

        if (res.data.response.message == "Success") {
          const aiRestParams = {
            phoneNumber: resParams.accountNumber,
            fullName: resParams.customerName,
            birthdate: resParams.dateOfBirth,
            placeOrBirth: resParams.placeOfBirth,
            email: resParams.email,
            channelId: "BDKI",
            stan: "123456",
            requestDate: "2024-01-30",
            requestTime: "14:56:27",
          };
          DataEndPoint.getRequestLinkRegistration(aiRestParams)
            .then((res) => {
              const resParams = res.data;
              if (resParams.resultMessages == "Success") {
                setCookie(resParams);
                // Cookies.set("linkParam : ", JSON.stringify(aiRestParams));
                // var json_string = Cookies.get("linkParam");
                // var array = JSON.parse(json_string);
                handleButtonGoToPageLoginInputPin(
                  resParams.result.urlValidation
                );
                setIsLoading(false);
              } else if (resParams.resultMessages == "Failed") {
                // console.log("URL : ", resParams.result.urlValidation);
                handleButtonGoToPageRegister(resParams.result.urlValidation);
                setIsLoading(false);
              } else if (resParams.resultMessages == "Error") {
                setIsLoading(false);
                alert("Server error...!");
              }
            })
            .catch((err) => {
              console.log("error : " + err);
              setIsLoading(false);
            });
        } else {
          // handleButtonGoToPageRegister(`/register/martipay/0`);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        setIsLoading(false);
        console.log("error : " + err);
      });
  };

  const handleGoToRegisterMRT = () => {
    const pParams = {
      phoneNumber: "6285270196990", // value ? value : null,
      stan: "123456", // setup dari BE
      requestDate: moment().format("YYYY-MM-DD"),
      requestTime: moment().format("hh:mm:ss"),
    };
    setIsLoading(true);
    DataEndPoint.getAccountInformation(pParams)
      .then((res) => {
        const resParams = res.data.response.result
          ? res.data.response.result
          : res.data.response;
        console.log(res.data.response.message);
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
          console.log(aiRestParams);
          DataEndPoint.getRequestLinkRegistration(aiRestParams)
            .then((res) => {
              const resParams = res.data;
              console.log(resParams.resultMessages);
              if (resParams.resultMessages == "Success") {
                setCookie(resParams);

                const _getCookie = getCookie();
                console.log("d Pin : ", Cookies.get("data"));
                // Cookies.set("linkParam : ", aiRestParams);
                // var json_string = Cookies.get("linkParam");
                // var array = JSON.parse(json_string);
                handleButtonGoToPageLoginInputPin(
                  resParams.result.urlValidation
                );
                setIsLoading(false);
              } else if (resParams.resultMessages == "Failed") {
                handleButtonGoToPageRegister(resParams.result.urlValidation);
                setIsLoading(false);
              } else if (resParams.resultMessages == "Error") {
                setIsLoading(false);
                alert("Server error...!");
              }
            })
            .catch((err) => {
              console.log("error : " + err);
              setIsLoading(false);
            });
        } else {
          // handleButtonGoToPageRegister(local_host+`/register/martipay/0`);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        setIsLoading(false);
        console.log("error : " + err);
      });
  };

  return (
    <div>
      {isLoading ? <LoaderPageWithLottie /> : StartPage}
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
              JakOnePay
            </button>
            <button
              type="button"
              className="mt-4 w-full text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
              onClick={handleGoToRegisterMRT}
            >
              Martipay
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartPage;
