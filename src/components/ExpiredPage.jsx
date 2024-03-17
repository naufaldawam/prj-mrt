import Lottie from "lottie-react";
import React from "react";
import { LoadBgColor, LoadLogo } from "../constantFile/I_Constant";
import xpire from "./lottieFiles/xpire.json";

const ExpiredPage = () => {
  return (
    <div>
      <div className={LoadBgColor()}>
        <div>
          <a href="/">
            <h3 className="text-4xl font-bold text-red-600">{LoadLogo()}</h3>
          </a>
        </div>
        <hr className="w-64 h-1 bg-gray-200 border-0 rounded dark:bg-gray-700" />
        <div className="max-w-md mx-auto my-2 bg-white rounded-md overflow-hidden">
          <div className="p-4 items-center justify-center">
            <div className="flex items-center justify-center my-4"></div>
            <strong>
              <h2 className="text-xl font-semibold my-2 text-center ">
              </h2>
            </strong>
            <h6 className="text-xl my-2 text-center">
              Link Anda Sudah Tidak Valid
            </h6>
            <div className="flex items-center justify-center my-4">
              <Lottie
                animationData={xpire}
                loop={false}
                autoplay={true}
                style={{
                  width: "250px",
                  height: "250px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ExpiredPage;
