// CreatePin.js
import React from "react";
import { Link } from "react-router-dom";
import ImageSucces from "../assets/icons/icon-success.png";
import ImageSuccesPeople from "../assets/icons/success-image.png";

const SuccessPin = () => {
  const apiUrl = process.env.API_JAVA_URL;
  console.log(apiUrl)
  return (
    <div>
      <div className="max-w-md mx-auto my-2 bg-white rounded-md overflow-hidden shadow-sm">
        <div className="p-4 items-center justify-center">
          <div className="flex items-center justify-center my-4">
            <img className="" width={60} src={ImageSucces} alt="My Image" />
          </div>
          <h6 className="text-xl my-2 text-center">CONGRATULATION</h6>
          <strong>
            <h2 className="text-xl font-semibold my-2 text-center">
              Fadhilah Yuda Pratama
            </h2>
          </strong>
          <div className="flex items-center justify-center my-4">
            <img
              className=""
              width={200}
              src={ImageSuccesPeople}
              alt="My Image"
            />
          </div>
          <p className="text-center">
            <b>registration Successful !!!!</b>
          </p>
          <Link to="/">
            <button
              className="mt-6 block w-full select-none rounded-lg bg-red-700 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
            >
              let is go to your home page
            </button>
          </Link>
        </div>
      </div>
      <div className="bg-gray-50"></div>
    </div>
  );
};

export default SuccessPin;
