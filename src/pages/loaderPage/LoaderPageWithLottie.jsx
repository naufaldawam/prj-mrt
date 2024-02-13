import React from "react";
import Lottie from "lottie-react";
import AnimationLoader from "../../components/lottieFiles/AnimationLoader2.json";

const LoaderPageWithLottie = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(250, 252, 250, 0.5)", // Warna putih dengan tingkat transparansi 50%
        zIndex: 999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)", // Optional: Menambahkan bayangan pada card
        }}
      >
        <Lottie
          animationData={AnimationLoader}
          loop={true}
          autoplay={true}
          speed={1}
          style={{ width: "65px", height: "65px" }}
        />
      </div>
    </div>
  );
};
export default LoaderPageWithLottie;
