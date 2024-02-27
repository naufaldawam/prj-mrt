import moment from "moment";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  LoadLogo,
  getButtonStyle,
  getChannelID,
  handleButtonGoToPageCreatePin,
  setCookie
} from "../../constantFile/I_Constant";
import DataEndPoint from "../../services/APIServices";

const Registration = () => {
  const local_host = process.env.LOCAL_HOST;
  let { idreg, channel, url, stannum } = useParams();
  
  url = "/create-pin/" + getChannelID();
  // console.log(channel);
  channel = getChannelID();
  stannum = Math.floor(Math.random() * 999999) + 100000;

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
      channelId: channel,
      stan: stannum,
      requestDate: moment().format("YYYY-MM-DD"),
      requestTime: moment().format("hh:mm:ss"),
    });
  };

  const params = useParams();
  const pParams = {
    idRequest: params.idreg, // value ? value : null,
    requestDate: moment().format("YYYY-MM-DD"),
    requestTime: moment().format("hh:mm:ss"),
    channelId: getChannelID(), //sesData.channelId, // "MARTIPAY"
  };

  // console.log("pParams : ", pParams.channelId);
  DataEndPoint.getinquiryDataByIdRequest(pParams).then((res) => {
    // console.log("getinquiryDataByIdRequest : ", res);
    if (res.resultMessages == "Success") {
      console.log("ini file res regis: " + res.result);
      if (res.result.username !== null && res.result.username !== "" && res.result.username !== '') {
        window.location.href = "/";
      }
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setCookie(formData);
    handleButtonGoToPageCreatePin(url + "/" + params.idreg);
  };

  return (
    <div>
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
        <div>
          <a href="/">
            <h3 className="text-4xl font-bold text-red-600">{LoadLogo()}</h3>
          </a>
        </div>
        <hr className="w-64 h-1 bg-gray-200 border-0 rounded dark:bg-gray-700" />
        <h4>Registration form</h4>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white sm:max-w-lg sm:rounded-lg">
          <form>
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
