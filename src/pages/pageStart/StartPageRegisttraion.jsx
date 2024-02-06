import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';


const StartPage = () => {
    // const handleOnclick = (e) => {
    //     console.log("testing :", e);
    // };

    const navigate = useNavigate()

    const handleGoToRegisterBDKI = () => {
        navigate("register/bdki");
    }

    const handleGoToRegisterMRT = () => {
        navigate("register/mrt");
    }

    return (
        <div className="bg-cyan-500 h-screen">
            <div className="pt-20 flex justify-center">
                <img src="https://ik.imagekit.io/naufal/mrt/undraw_welcome_re_h3d9%20(1)_QJw0QUMdu.svg?updatedAt=1706777387325"
                    alt="Welcome SVG"
                    className="w-80 min-h-80" />
            </div>


            <div className="flex justify-center pt-5">
                <h1><b>Start testing registration</b></h1>
            </div>

            <div className="flex flex-col pt-50 pr-10 pl-10">
                <button className="border-solid bg-white border-2 rounded m-2 hover:bg-gray-200" onClick={handleGoToRegisterBDKI}>
                    bdki registration
                </button>
                <button className="border-solid bg-white border-2 rounded m-2 hover:bg-gray-200" onClick={handleGoToRegisterMRT}>
                    marti pay registration
                </button>
            </div>

        </div>
    )
}

export default StartPage;
