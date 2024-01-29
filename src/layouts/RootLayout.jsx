import React, { useEffect, useRef, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import myImage from '../assets/images/jakonepay/bank_dki_putih.png';

function RootLayout() {
  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });

  const headerRef = useRef(null);
  // handle scroll event
  const handleScroll = (elTopOffset, elHeight) => {
    if (window.pageYOffset > elTopOffset + elHeight) {
      setSticky({ isSticky: true, offset: elHeight });
    } else {
      setSticky({ isSticky: false, offset: 0 });
    }
  };
  // add/remove scroll event listener
  useEffect(() => {
    var header = headerRef.current.getBoundingClientRect();
    const handleScrollEvent = () => {
      handleScroll(header.top, header.height);
    };
    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    };
  }, []);

  return (
    <>
      <div
        id="sticky-header"
        className={`navbar${sticky.isSticky ? " sticky" : ""}`}
        ref={headerRef}
      >
        <NavLink to="/">
          {/* <strong className="ml-8">Bank DKI</strong> */}
          <img style={{ width: '8rem', padding: "5px" }} src={myImage} alt="example" />
        </NavLink>
      </div>
      <Outlet />
    </>
  );
}

export default RootLayout;
