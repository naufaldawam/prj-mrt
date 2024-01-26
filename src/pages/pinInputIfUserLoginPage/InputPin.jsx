import React, { useState } from "react";

import { ModalTermsAndCondition, handleButtonGoToPageHome, PinInput, TodoList, PROFILE_NAME, ImagePin } from "../../constantFile/I_Constant";

function PinInputPage() {

  const [value, setValue] = useState("");

  const handleChange = (newValue) => {
    setValue(newValue);
  console.log("new value", newValue);
  };

  return (
    <>
      <div className="flex min-h-screen items-center justify-center">
        <div className="relative flex flex-col rounded-xl bg-transparent bg-clip-border text-gray-700 shadow-none">
          <h2 className="block font-sans  font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased text-center my-8">
            Masukan PIN JakOnePay kamu
          </h2>
          <form className="mx-8  md:mx-20 md:px-20">
            <div className="text-center p-4">
              <PinInput
                length={4}
                initialValue=""
                secret={false}
                secretDelay={1000}
                type="numeric"
                inputMode="number"
                style={{ paddingBottom: "2rem" }}
                inputStyle={{
                  borderColor: "orange",
                  height: "3rem",
                  width: "3rem",
                  marginRight: "0.5em",
                  border: "1px solid",
                  borderBottom: "4px solid rgb(248 113 113)",
                  borderRadius: "0.375rem",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "1.875rem",
                  fontWeight: "100",
                  textAlign: "center",
                }}
                inputFocusStyle={{}}
                autoSelect={true}
                regexCriteria={/^[0-9]*$/}
                onChange={handleChange}
              />
            </div>
            <hr />
            <p>
              <strong>Bank DKI</strong> mau akses akun ini:
            </p>
            <div className="my-2">
              <div className="flex items-center">
                <img
                  src={ImagePin}
                  alt="Profile"
                  className="w-10 h-10 rounded-full mr-2"
                />
                <div>
                  <p className="text-xl bold font-medium">
                    {PROFILE_NAME}
                  </p>
                </div>
              </div>
            </div>
            <p className="mb-2">
              Dengan konfirmasi, kamu ngasih izin ke <strong>JakOnePay</strong>
              buat:
            </p>
            <TodoList />
            <div>
              Seluruh transaksi baik dan aman. Dengan melanjutkan proses ini,
              menu menyetujui
              <ModalTermsAndCondition />
            </div>
            <button
              onClick={handleButtonGoToPageHome}
              disabled={false}
              className="mt-6 block w-full select-none rounded-lg bg-red-700 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
            >
              Konfirmasi
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default PinInputPage;
