import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import React, { useState } from "react";
function InputNoHp() {
  const [value, setValue] = useState();
  return (
    <>
      <label htmlFor="phone">
        <b>Phone Number</b>
      </label>
      <div
        id="phone"
        className="border-solid border border-gray-500 rounded py-1"
      >
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3">
          <div className="col-span-2">
            <PhoneInput
              country="id"
              placeholder="628.. .... ...."
              inputStyle={{
                border: "none",
                boxShadow: "none",
                outline: "none",
              }}
              containerStyle={{ color: "red", border: "red" }}
              containerClass={{ border: "green" }}
              value={value}
              onChange={setValue}
            />
          </div>
          <div className="">
            <button className="bg-red-500 ml-20 hover-bg-red-700 text-white font-bold py-2 px-4 rounded">
              <span className="">
                Send <br /> OTP
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default InputNoHp;
