import S from "./dashboard.module.scss";
import { Outlet } from "react-router-dom";
import { Navbar, SideBar } from "../../components";
import { MdArrowBackIos } from "react-icons/md";
import { useState } from "react";

export const Dashboard = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={S.dashboard}>
      <Navbar />
      <div className={S.container}>
        <div
          className={isActive ? [S.overlay, S.active].join(" ") : S.overlay}
          onClick={() => {
            setIsActive(!isActive);
          }}
        ></div>

        <div className={isActive ? [S.sideBar, S.active].join(" ") : S.sideBar}>
          <div
            className={
              isActive ? [S.toggle_btn, S.active].join(" ") : S.toggle_btn
            }
            onClick={() => {
              setIsActive(!isActive);
            }}
          >
            <MdArrowBackIos className={S.icon} />
          </div>
          <SideBar />
        </div>
        <div className={S.outletWrapper}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
