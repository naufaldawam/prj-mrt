import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";
import PinInput from "react-pin-input";
import ModalSyaratKetentuan from "../components/ModalSyaratKetentuan";

const CreatePin = () => {
  const [value, setValue] = useState();
  const [showOTPInput, setShowOTPInput] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const handleOTPButtonClick = () => {
    setShowOTPInput(true);
    setIsActive(true);
  };

  const handleButtonClick = () => {
    // Lakukan logika atau navigasi di sini
    alert(value);
    window.location.href = "/register";
  };

  return (
    <div>
      <div className="max-w-lg mx-auto bg-white overflow-hidden">
        <div className="p-4">
          <h2 className="text-xl font-semibold my-2 text-center">Welcome</h2>
          <p className="my-4">
            Experience a new way of transaction with JakOnePay
          </p>
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
                <button
                  onClick={handleOTPButtonClick}
                  className="bg-red-500 ml-20 hover-bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  <span className="">
                    Send <br /> OTP
                  </span>
                </button>
              </div>
            </div>
          </div>

          <div className="ml-[-15px] mb-8">
            {showOTPInput && (
              <>
                <div>
                  <p className="mt-8 ml-4">
                    Enter 6 digit OTP code
                    <span className="ml-2">
                      <FontAwesomeIcon icon={faCheckCircle} />
                    </span>
                  </p>
                </div>
                <div></div>
                <PinInput
                  length={4}
                  initialValue=""
                  secret={false}
                  secretDelay={1000}
                  onChange={() => {}}
                  type="numeric"
                  inputMode="number"
                  style={{ padding: "10px", marginRight: "1rem" }}
                  inputStyle={{
                    borderColor: "gray",
                    height: "3rem",
                    width: "2.5rem",
                    marginRight: "1.47rem",
                    border: "1px solid",
                    borderBottom: "4px solid rgb(248 113 113)",
                    margin: "0.5rem",
                    borderRadius: "0.375rem",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.875rem",
                    fontWeight: "100",
                    textAlign: "center",
                  }}
                  inputFocusStyle={{}}
                  onComplete={() => {}}
                  autoSelect={true}
                  regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
                />
              </>
            )}
          </div>
          <div className="mt-20">
            Seluruh transaksi baik dan aman. Dengan melanjutkan proses ini, menu
            menyetujui
            <ModalSyaratKetentuan />
          </div>
          <button
            onClick={handleButtonClick}
            disabled={!isActive}
            className="mt-6 block w-full select-none rounded-lg bg-red-700 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
            data-ripple-light="true"
          >
            Konfirmasi
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePin;
