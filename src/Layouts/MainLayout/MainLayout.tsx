import React, { useEffect, useState } from "react";
import "./styles.css";
import useScroll from "../../hooks/useScroll";

import HeaderComponent from "../../Components/HeaderComponent/HeaderComponent";

export default function MainLayout({ children }: any) {
  const [navClassList, setNavClassList] = useState([]);
  const scroll = useScroll();

  useEffect(() => {
    const _classList: any = [];

    if (scroll.y > 100 && scroll.y - scroll.lastY > 0) {
      _classList.push("nav-bar--hidden");
    }

    setNavClassList(_classList);
  }, [scroll.y, scroll.lastY]);

  return (
    <div>
      <div className={navClassList.join(" ")}>
        <HeaderComponent />
      </div>
      <main className="main-content">{children}</main>
    </div>
  );
}
