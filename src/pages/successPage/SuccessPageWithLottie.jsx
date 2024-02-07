import React from "react";
import Lottie from "lottie-react";
import AnimationSuccess from "../../components/lottieFiles/AnimationSuccess.json";
import ImageSuccesPeople from "./../../assets/icons/success-image.png";
import { DescriptionSuccess } from "../../constantFile/I_Constant";
const SuccesPageWithLottie = () => {
  const handleClose = () => {
    // Panggil fungsi onClose saat tombol ditutup
    window.location.href = "/register/bdki";
  };
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "#EFF5EF",
        zIndex: 999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <button
        onClick={handleClose}
        style={{
          position: "absolute",
          top: 10,
          right: 10,
          padding: 10,
          background: "none",
          border: "none",
          cursor: "pointer",
        }}
      >
        <span role="img" aria-label="Close">
          ❌
        </span>
      </button>
      <div className="centered-container">
        <Lottie
          animationData={AnimationSuccess}
          loop={true}
          autoplay={true}
          style={{
            width: "150px",
            height: "150px",
          }}
        />
      </div>
      <strong>
        <h2 className="text-xl font-bold my-2 text-center">
          {DescriptionSuccess}
        </h2>
      </strong>
      <div className="flex items-center justify-center my-4">
        <img className="" width={200} src={ImageSuccesPeople} alt="My Image" />
      </div>
    </div>
  );
};
export default SuccesPageWithLottie;
