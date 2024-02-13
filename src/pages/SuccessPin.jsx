import React from "react";
import Lottie from "lottie-react";
import AnimationSuccess from "./../components/lottieFiles/AnimationSuccess.json";
import ImageSucces from "../assets/icons/logo_bank_dki.png";
import { DescriptionSuccess } from "./../constantFile/I_Constant";
const SuccesPageWithLottie = () => {
  const handleClose = () => {
    // Panggil fungsi onClose saat tombol ditutup
    window.location.href = "/register/bdki";
  };
  return (
    <div
      style={{
        marginTop: "2rem",
        zIndex: 999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="">
        <img className="" width={200} src={ImageSucces} alt="My Image" />
      </div>
      <div className="">
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
        <h2 className="text-lg font-bold text-red-500 text-center">
          Top Up JakOne
        </h2>
      </strong>
      <p className="text-sm">AYI ABDUL AZIZ</p>
    </div>
  );
};
export default SuccesPageWithLottie;
