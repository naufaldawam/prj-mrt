import Lottie from "lottie-react";
import React from "react";
import { useParams } from "react-router-dom";
import timeisup from "../components/lottieFiles/timeisup.json";
import { LoadBgColor, LoadLogo, getCookie } from "../constantFile/I_Constant";

const SuccessPin = () => {
  const apiUrl = process.env.API_JAVA_URL;
  // console.log(apiUrl)

  const _getCookie = JSON.parse(getCookie());
  // console.log("_getCookie : ", _getCookie);
  let { idreg, id } = useParams();
  const params = useParams();

  return (
    <div>
      <div className={LoadBgColor()}>
        <div>
          <a href="/">
            <h3 className="text-4xl font-bold text-red-600">{LoadLogo()}</h3>
          </a>
        </div>
        <hr className="w-64 h-1 bg-gray-200 border-0 rounded dark:bg-gray-700" />
        <div className="max-w-md mx-auto my-2 bg-white rounded-md overflow-hidden shadow-sm">
          <div className="p-4 items-center justify-center">
            <div className="flex items-center justify-center my-4"></div>
            <h6 className="text-xl my-2 text-center">PAGE EXPIRED</h6>
            <strong>
              <h2 className="text-xl font-semibold my-2 text-center ">
                {_getCookie.fullName.toUpperCase()}
              </h2>
            </strong>
            <div className="flex items-center justify-center my-4">
              <Lottie
                animationData={timeisup}
                loop={true}
                autoplay={true}
                style={{
                  width: "350px",
                  height: "350px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SuccessPin;
