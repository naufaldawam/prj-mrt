import React, { useState } from "react";
import PinInput from "react-pin-input";
import { useParams } from "react-router-dom";

function ConfirmationPin() {
  const [showModal, setShowModal] = React.useState(false);
  const [pin, setPin] = useState("");
  const params = useParams();

  const handlePinChange = (value) => {
    setPin(value);
    if (pin.length === 3) {
      if (params.id === value) {
        window.location.href = "/success-pin";
      } else {
        setShowModal(true);
      }
    }
  };

  return (
    <>
      <div className="flex justify-center mb-8">
        <PinInput
          length={4}
          initialValue=""
          secret={false}
          secretDelay={100000}
          onChange={handlePinChange}
          type="numeric"
          inputMode="number"
          style={{ padding: "10px" }}
          inputStyle={{
            borderColor: "gray",
            height: "4rem",
            width: "3rem",
            border: "1px solid",
            margin: "0.5rem",
            borderRadius: "0.375rem",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.875rem",
            fontWeight: "100",
            textAlign: "center",
          }}
          inputFocusStyle={{ borderColor: "black", fontWeight: "300" }}
          onComplete={() => {}}
          autoSelect={true}
          regexCriteria={/^[ A-Za-z0-9_@./#&+-]*$/}
        />

        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                    <h3 className="text-3xl font-semibold">
                      Syarat & Ketentuan
                    </h3>
                    <button
                      className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                      Confimation PIN is not match...!
                    </p>
                  </div>
                  {/*footer*/}
                  <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                    <button
                      className="bg-blue-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
    </>
  );
}

export default ConfirmationPin;
