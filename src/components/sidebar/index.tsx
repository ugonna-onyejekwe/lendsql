import S from "./sidebar.module.scss";
import { NavLink } from "react-router-dom";
import { sidebarInfo } from "./sidebar_info";
import { IoIosArrowDown } from "react-icons/io";
import { Briefcase } from "../../assets";

export const SideBar = () => {
  return (
    <div className={S.sidebar_container}>
      {sidebarInfo.map((i, key) => {
        return (
          <section key={key}>
            <h3 className={i.withDropdown ? `${S.bold}` : ""}>
              {" "}
              <span style={{ display: i.withDropdown ? "block" : "none" }}>
                {" "}
                <Briefcase />
              </span>{" "}
              {i.heading}
              <span style={{ display: i.withDropdown ? "block" : "none" }}>
                {" "}
                <IoIosArrowDown />
              </span>
            </h3>
            <div className={S.link_con}>
              {i.links.map((link, key) => {
                return (
                  <NavLink
                    to={link.link}
                    key={key}
                    className={({ isActive }) =>
                      isActive ? S.active : "inactive"
                    }
                  >
                    <span>
                      <link.icon />
                    </span>
                    {link.name}
                  </NavLink>
                );
              })}
            </div>
          </section>
        );
      })}
    </div>
  );
};
