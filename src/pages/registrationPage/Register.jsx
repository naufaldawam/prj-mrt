import Cookies from "js-cookie";
import moment from "moment";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  getButtonStyle,
  handleButtonGoToPageCreatePin,
  LoaderPageWithLottie,
} from "../../constantFile/I_Constant";
import DataEndPoint from "../../services/APIServices";

const Registration = () => {
  const params = useParams();
  console.log(params.id);
  const local_host = process.env.LOCAL_HOST;
  const [isLoading, setIsLoading] = useState(false);

  const [formData, setFormData] = useState({
    phoneNumber: "",
    fullName: "",
    dateOfBirth: "",
    placeOfBirth: "",
    email: "",
    channelId: "",
    stan: "",
    requestDate: "",
    requestTime: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
      [e.target.phoneNumber]: e.target.value,
      [e.target.fullName]: e.target.value,
      [e.target.dateOfBirth]: e.target.value,
      [e.target.placeOfBirth]: e.target.value,
      [e.target.email]: e.target.value,
      channelId: "",
      stan: "",
      requestDate: moment().format("YYYY-MM-DD"),
      requestTime: moment().format("hh:mm:ss"),
    });
  };

  // const getFormLabel = getFormAndRegister();
  const linkParam = Cookies.get("linkParam");
  console.log("linkParam : ", linkParam);
  const sesData = JSON.parse(linkParam);
  console.log("channelId : ", sesData.channelId);
  
    const pParams = {
      idRequest: params.id, // value ? value : null,
      requestDate: moment().format("YYYY-MM-DD"),
      requestTime: moment().format("hh:mm:ss"),
      channelId: sesData.channelId, // "MARTIPAY"
    };

    console.log("pParams : ", pParams);
    DataEndPoint.getinquiryDataByIdRequest(pParams).then((res) => {
      console.log("getinquiryDataByIdRequest : ", res);
      if (res.resultMessages == "Success") {
        setIsLoading(false);
      }
    });
    
  const handleSubmit = (e) => {
    e.preventDefault();

    setIsLoading(true);
    // console.log("Form submitted:", formData);
    // console.log(formData);
    // let output = Object.assign(_getCookie, formData);
    // setCookie(JSON.stringify(output));
    // const _getCookie = JSON.parse(getCookie());

    // console.log("_getCookie : ", _getCookie);
    // console.log("getCookie : ", _getCookie.fullName);
    // console.log(this.props.match.params.idRequest);
    // let pin = {"pin": FunctionEncrypt("213424")};
    // let output = Object.assign(_getCookie, pin);

    // console.log("output : ", output);
    handleButtonGoToPageCreatePin(local_host + `/create-pin/bdki`);
    // DataEndPoint.getRegistration(formData)
    //   .then((res) => {
    //     console.log(res);
    //     // if (res.message == "Success") {
    //     //   handleButtonGoToPageCreatePin(local_host+`/create-pin/bdki`);
    //     // } else if (res.statusCode == "FAILED") {
    //     //   handleButtonGoToPageRegister(local_host+`/register/bdki`);
    //     // } else if (res.statusCode == "ERROR") {
    //     //   alert("Server error...!");
    //     // }
    //   })
    //   .catch((err) => {
    //     console.log("error : " + err);
    //   });
  };

  return (
    <div>
      {isLoading ? <LoaderPageWithLottie /> : Registration}
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
        <div>
          <a href="/">
            <h3 className="text-4xl font-bold text-red-600">JakOnePay</h3>
          </a>
        </div>
        <hr className="w-64 h-1 bg-gray-200 border-0 rounded dark:bg-gray-700" />
        <h4>Registration form</h4>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white sm:max-w-lg sm:rounded-lg">
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="phoneNumber"
              >
                Phone Number
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phoneNumber"
                type="text"
                placeholder="Enter Phone Number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="fullName"
              >
                Full Name
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="fullName"
                type="text"
                placeholder="Enter Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="dateOfBirth"
              >
                Birth of date
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="dateOfBirth"
                type="date"
                placeholder="Enter birth date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="placeOfBirth"
              >
                Place of Birth
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="placeOfBirth"
                type="text"
                placeholder="Enter Place of Birth"
                name="placeOfBirth"
                value={formData.placeOfBirth}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                onClick={handleSubmit}
                disabled={false}
                // className="mt-6 block w-full text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                type="button"
                data-ripple-light="true"
                className={getButtonStyle()}
              >
                Konfirmasi
              </button>
            </div>
          </form>
          {/* <div className="mt-4 text-grey-600">
            Already have an account?{" "}
            <span>
              <a className="text-red-600 hover:underline" href="#">
                Log in
              </a>
            </span>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Registration;
