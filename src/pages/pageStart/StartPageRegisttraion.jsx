import moment from 'moment';
import React from "react";
import { useNavigate } from "react-router-dom";
import DataEndPoint from "../../services/APIServices";

const StartPage = () => {
  const navigate = useNavigate();

  const handleGoToRegisterBDKI = () => {
    navigate("register/bdki?nohp=082136031004");
  };

  const handleGoToRegisterMRT = () => {
    const pParams = {
      phoneNumber: "082288889806", // value ? value : null,
      stan: "123456", // setup dari BE
      requestDate: moment().format("YYYY-MM-DD"),
      requestTime: moment().format("hh:mm:ss"),
    };
    console.log("pParams : " + pParams);
    DataEndPoint.getAccountInformation(pParams)
      .then((res) => {
        console.log(res);
        if (res.message == "Success") {
          handleButtonGoToPageCreatePin();
        } else if (res.statusCode == "FAILED") {
          handleButtonGoToPageRegister();
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
