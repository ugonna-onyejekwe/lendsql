import { avatar, logo } from "../../assets";
import { IoSearchOutline } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import S from "./navbar.module.scss";
import { Link } from "react-router-dom";
import { useState } from "react";

export const Navbar = () => {
  const [isSearch_mode, setIsSearch_mode] = useState(false);
  return (
    <>
      <nav className={S.desk_nav}>
        <div className={S.logo_section}>
          <img src={logo} alt="logo" />
        </div>
        <div className={S.search_section}>
          <input type="search" placeholder="Search for anything..." />
          <button className={S.search_icon}>
            <IoSearchOutline />
          </button>
        </div>
        <div className={S.avatar_section}>
          <Link to="#" className={S.link_to_docs}>
            docs
          </Link>
          <span className={S.notification_icon}>
            <IoNotificationsOutline />
          </span>

          <div className={S.avatar}>
            <img src={avatar} alt="image" />
            <p>
              Adedeji{" "}
              <span>
                <IoMdArrowDropdown />
              </span>
            </p>
          </div>
        </div>
      </nav>
      <nav
        className={
          isSearch_mode ? [S.mobile_nav, S.search_mode].join(" ") : S.mobile_nav
        }
      >
        <div className={S.logo}>
          <img src={logo} alt="logo" />
        </div>

        <div className={S.search_con}>
          <input type="search" placeholder={"Search for anything"} />
          <button onClick={() => setIsSearch_mode(false)}>
            {" "}
            <IoClose />
          </button>
        </div>

        <div className={S.avatar_section}>
          <IoSearchOutline onClick={() => setIsSearch_mode(true)} />
          <IoNotificationsOutline />
          <img src={avatar} alt="avatar" />
        </div>
      </nav>
    </>
  );
};
