import Lottie from "lottie-react";
import React from "react";
import { useParams } from "react-router-dom";
import AnimationSuccess from "../components/lottieFiles/AnimationSuccess.json";
import { LoadBgColor, LoadLogo, getCookie } from "../constantFile/I_Constant";

const SuccessPinLogin = () => {
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
          <div className="flex items-center justify-center my-4">
            {/* <img className="" width={60} src={ImageSucces} alt="My Image" /> */}
            {/* <div className="">
              <Lottie
                animationData={AnimationSuccess}
                loop={true}
                autoplay={true}
                style={{
                  width: "150px",
                  height: "150px",
                }}
              />
            </div> */}
          </div>
          <h6 className="text-xl my-2 text-center">CONGRATULATION</h6>
          <strong>
            <h2 className="text-xl font-semibold my-2 text-center ">
              {_getCookie.fullName.toUpperCase()}
            </h2>
          </strong>
          <div className="flex items-center justify-center my-4">
            {/* <img
              className=""
              width={200}
              src={ImageSuccesPeople}
              alt="My Image"
            /> */}
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
          {/* <Link to="/">
            <button
              className="mt-6 block w-full select-none rounded-lg bg-red-700 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
              data-ripple-light="true"
            >
              let is go to your home page
            </button>
          </Link> */}
        </div>
      </div>

      <strong>
        {/* <h2 className="text-lg font-bold text-red-500 text-center">
          Top Up JakOne
        </h2> */}
      </strong>
    </div>
    
    </div>
  );
};
export default SuccessPinLogin;
