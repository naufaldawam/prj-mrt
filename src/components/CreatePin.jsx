import React, { useState } from "react";
import PinInput from "react-pin-input";
import { useParams } from "react-router-dom";

function CreatePin() {
  const [pin, setPin] = useState("");
  let { id } = useParams();
  const handlePinChange = (value) => {
    setPin(value);
    if (pin.length === 3) {
      id = value;
      window.location.href = `/confirmation-pin/${id}`;
    }
  };

  // const handlePinComplete = () => {
  //   // console.log("World");
  //   // Cek apakah inputan sudah terisi semua (sesuai dengan panjang yang diinginkan, misalnya 4)
  //   if (pin.length === 3) {
  //     // Lakukan navigasi ke halaman berikutnya
  //     alert(pin + 'pin : '+ pin.length);
  //     window.location.href = "/confirmation-pin";
  //   }
  // };

  return (
    <>
      <div className="flex justify-center mb-8">
        <PinInput
          length={4}
          initialValue=""
          secret={true}
          // secretDelay={100000}
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

export default CreatePin;
