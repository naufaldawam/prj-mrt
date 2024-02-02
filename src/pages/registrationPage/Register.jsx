import React, { useState } from "react";
import {
  handleButtonGoToPageCreatePin,
  getHeaderMessageRegister,
  getBodyMessageRegister,
  getFormAndRegister

} from "../../constantFile/I_Constant";


const Registration = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const getFormLabel = getFormAndRegister();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 shadow-md rounded-md w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">
          {getHeaderMessageRegister()}
        </h2>
        <form onSubmit={handleSubmit}>
          <div>
            {getBodyMessageRegister()}
          </div>


          {getFormLabel.map((label, index) => (
            <div key={index} className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor={`input-${index}`}
              >
                {label}
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id={`input-${index}`}
                type="text"  
                placeholder={`Enter ${label}`}
                name={`input-${index}`}
                value={formData[`input-${index}`]} 
                onChange={handleChange}
                required
              />
            </div>
          ))}

          <div className="flex items-center justify-between">
            <button
              onClick={handleButtonGoToPageCreatePin}
              disabled={false}
              className="mt-6 block w-full select-none rounded-lg bg-red-700 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
            >
              Konfirmasi
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Registration;
