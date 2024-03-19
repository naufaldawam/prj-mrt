import React from "react";
import Error404 from "../../assets/icons/expression_failed.png";

const load404 = () => {
  
  return (
    <div>
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0 ">
        <div>
          <a href="/">
            <h3 className="text-8xl font-bold text-red-600">404</h3>
          </a>
        </div>
        <hr className="w-64 h-1 bg-gray-200 border-0 rounded dark:bg-gray-700" />
        <h4>Page Not found</h4>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white sm:max-w-lg sm:rounded-lg">
          <div className="pt-20 flex justify-center">
            
            <img className="" width={200} src={Error404} alt="error page" />
          </div>

          {/* <div className="flex justify-center pt-5 items-center ">
            <h1>
              <b>Start testing registration</b>
            </h1>
          </div> */}
          
        </div>
      </div>
    </div>
  );
};

export default load404;
