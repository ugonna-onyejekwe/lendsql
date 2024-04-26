import { BsThreeDotsVertical } from "react-icons/bs";
import { LuEye } from "react-icons/lu";
import { TbUserCheck } from "react-icons/tb";
import { LuUserX2 } from "react-icons/lu";
import { Link, NavLink } from "react-router-dom";

interface idType {
  id: string;
}

export const User_DropDown = ({ id }: idType) => {
  return (
    <div>
      <small>
        <BsThreeDotsVertical />
      </small>

      <article>
        <NavLink to={`user-details/${id}`}>
          <p>
            <span>
              <LuEye />
            </span>
            view details
          </p>
        </NavLink>
        <Link to={"#"}>
          <p>
            <span>
              <LuUserX2 />
            </span>
            blacklist user
          </p>
        </Link>
        <Link to={"#"}>
          <p>
            <span>
              <TbUserCheck />
            </span>
            activate user
          </p>
        </Link>
      </article>
    </div>
  );
};
