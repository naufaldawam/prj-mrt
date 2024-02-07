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
        backgroundColor: "#FAFCFA",
        zIndex: 999,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="centered-container">
        <Lottie
          animationData={AnimationLoader}
          loop={true}
          autoplay={true}
          speed={1}
          style={{ width: "100px", height: "100px" }}
        />
      </div>
    </div>
  );
};
export default LoaderPageWithLottie;
