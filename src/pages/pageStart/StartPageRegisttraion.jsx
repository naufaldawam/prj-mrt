import moment from 'moment';
import React from "react";
import { useNavigate } from "react-router-dom";
import {
  handleButtonGoToPageLoginInputPin,
  handleButtonGoToPageRegister,
} from "../../constantFile/I_Constant";
import DataEndPoint from "../../services/APIServices";

const StartPage = () => {
  const navigate = useNavigate();

  const handleGoToRegisterBDKI = () => {
    navigate("register/bdki?nohp=082136031004");
  };

  const handleGoToRegisterMRT = () => {
    const pParams = {
      phoneNumber: '6285270196990', // value ? value : null,
      stan: '123456', // setup dari BE
      requestDate: moment().format('YYYY-MM-DD'),
      requestTime: moment().format('hh:mm:ss')
    };
    console.log("pParams : " + pParams.phoneNumber);
    DataEndPoint.getAccountInformation(pParams)
      .then((res) => {
        console.log("Request");
        console.log(pParams);
        console.log("Respons");
        console.log(res);
        const resParams = res.data.response.result;
        console.log(resParams);

        if (res.data.response.message == "Success") {
          const aiRestParams = {
            phoneNumber: resParams.accountNumber,
            fullName: resParams.customerName,
            birthdate: resParams.dateOfBirth,
            placeOrBirth: resParams.placeOfBirth,
            email: resParams.email,
            channelId: 'MARTIPAY',
            stan: '123456',
            requestDate: '2024-01-30',
            requestTime: '14:56:27'
          };
          console.log('aiRestParams');
          console.log(aiRestParams);
          DataEndPoint.getRequestLinkRegistration(aiRestParams)
            .then((res) => {
              console.log('RequestLinkRegistration');
              console.log(res);
              const resParams = res.data.response.data;
              console.log(res.data.response.statusCode);
              if (res.data.response.statusCode == "SUCCESS") {
                
                console.log(resParams.urlValidation);
                const urlvalidation = resParams.urlValidation;
                handleButtonGoToPageLoginInputPin(resParams.urlValidation);
              } else if (res.statusCode == "FAILED") {
                handleButtonGoToPageRegister(urlvalidation);
              } else if (res.statusCode == "ERROR") {
                alert("Server error...!");
              }
            })
            .catch((err) => {
              console.log("error : " + err);
            });
        } else if (res.statusCode == "FAILED") {
          handleButtonGoToPageRegister(urlvalidation);
        } else if (res.statusCode == "ERROR") {
          alert("Server error...!");
        }
      })
      .catch((err) => {
        console.log("error : " + err);
      });
    // navigate("register/mrt");
  };

  return (
    <div className="bg-cyan-500 h-screen">
      <div className="pt-20 flex justify-center">
        <img
          src="https://ik.imagekit.io/naufal/mrt/undraw_welcome_re_h3d9%20(1)_QJw0QUMdu.svg?updatedAt=1706777387325"
          alt="Welcome SVG"
          className="w-80 min-h-80"
        />
      </div>

      <div className="flex justify-center pt-5">
        <h1>
          <b>Start testing registration</b>
        </h1>
      </div>

      <div className="flex flex-col pt-50 pr-10 pl-10">
        <button
          className="border-solid bg-white border-2 rounded m-2 hover:bg-gray-200"
          onClick={handleGoToRegisterBDKI}
        >
          bdki registration
        </button>
        <button
          className="border-solid bg-white border-2 rounded m-2 hover:bg-gray-200"
          onClick={handleGoToRegisterMRT}
        >
          marti pay registration
        </button>
      </div>
    </div>
  );
};

export default StartPage;
