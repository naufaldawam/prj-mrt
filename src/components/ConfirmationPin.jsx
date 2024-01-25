import PinInput from "react-pin-input";
import React, { useState } from "react";

function ConfirmationPin() {
  const [pin, setPin] = useState("");
  const handlePinChange = (value) => {
    setPin(value);
    handlePinComplete();
  };

  const handlePinComplete = () => {
    // console.log("World");
    // Cek apakah inputan sudah terisi semua (sesuai dengan panjang yang diinginkan, misalnya 4)
    if (pin.length === 3) {
      // Lakukan navigasi ke halaman berikutnya
      window.location.href = "/success-pin";
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
      </div>
    </>
  );
}

export default ConfirmationPin;
