import { useState } from "react";
import PinInput from "react-pin-input";
// import React, { useState } from "react";

function InputPin() {
  const [value , setValue] = useState;

  console.log("valuenya adalah", value);

  return (
    <>
      <div className="flex justify-center mb-8">
        <PinInput
          length={4}
          initialValue=""
          secret={false}
          secretDelay={100000}
          onChange={() => {}}
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
          value={setValue}
        />
      </div>
    </>
  );
}

export default InputPin;
