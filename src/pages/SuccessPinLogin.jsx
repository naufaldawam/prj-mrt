import Lottie from "lottie-react";
import React from "react";
import { useParams } from "react-router-dom";
import AnimationSuccess from "../components/lottieFiles/AnimationSuccess.json";
import { LoadBgColor, LoadLogo, getCookie } from "../constantFile/I_Constant";

const SuccessPinLogin = () => {
  const apiUrl = process.env.API_JAVA_URL;
  const _getCookie = JSON.parse(getCookie());
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
        <div className="max-w-md mx-auto my-2 bg-white rounded-md overflow-hidden">
          <div className="p-4 items-center justify-center">
            <div className="flex items-center justify-center my-4">
            </div>
            <h6 className="text-xl my-2 text-center">CONGRATULATION</h6>
            <strong>
              <h2 className="text-xl font-semibold my-2 text-center ">
                {_getCookie.fullName.toUpperCase()}
              </h2>
            </strong>
            <div className="flex items-center justify-center my-4">
              <Lottie
                animationData={AnimationSuccess}
                loop={true}
                autoplay={true}
                style={{
                  width: "350px",
                  height: "350px",
                }}
              />
            </div>
            <p className="text-center">
              <b>Login Successful !</b>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default SuccessPinLogin;
