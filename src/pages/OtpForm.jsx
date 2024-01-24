import React, { useState } from "react";

const Otp = () => {
  const [pinDigits, setPinDigits] = useState(["", "", "", ""]);
  const [isButtonActive, setIsButtonActive] = useState(false);

  const handleDigitChange = (index, value) => {
    // Menetapkan nilai digit pada posisi tertentu
    const newPinDigits = [...pinDigits];
    newPinDigits[index] = value;
    setPinDigits(newPinDigits);

    // Memeriksa apakah semua digit sudah diisi
    const allDigitsFilled = newPinDigits.every((digit) => digit !== "");
    setIsButtonActive(allDigitsFilled);
  };

  const handleButtonClick = () => {
    // Menangani klik tombol jika perlu
    if (isButtonActive) {
      console.log("Tombol diklik!");
    }
  };

  return (
    <div>
      {pinDigits.map((digit, index) => (
        <input
          key={index}
          type="text"
          maxLength="1"
          value={digit}
          onChange={(e) => handleDigitChange(index, e.target.value)}
        />
      ))}
      <button onClick={handleButtonClick} disabled={!isButtonActive}>
        Submit
      </button>
    </div>
  );
};

export default Otp;
