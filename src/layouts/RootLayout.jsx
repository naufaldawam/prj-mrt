import { NavLink, Outlet } from "react-router-dom";
import React, { useState, useRef, useEffect } from "react";

function RootLayout() {
  const [sticky, setSticky] = useState({ isSticky: false, offset: 0 });

  const headerRef = useRef(null);
  const handleScroll = (elTopOffset, elHeight) => {
    if (window.pageYOffset > elTopOffset + elHeight) {
      setSticky({ isSticky: true, offset: elHeight });
    } else {
      setSticky({ isSticky: false, offset: 0 });
    }
  };
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
          <strong className="ml-8">Bank DKI</strong>
        </NavLink>
      </div>
      <Outlet />
    </>
  );
}

export default RootLayout;
