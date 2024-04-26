import S from "./user_box.module.scss";
import { FC, ReactNode } from "react";

interface Users_box_type {
  icon: ReactNode;
  icon_bg_color: string;
  title: string;
  quantity: number;
}

export const Users_box: FC<Users_box_type> = ({
  icon,
  icon_bg_color,
  title,
  quantity,
}) => {
  return (
    <div className={S.box}>
      <div className={S.img_con} style={{ background: `#${icon_bg_color}` }}>
        {icon}
      </div>
      <p>{title}</p>
      <h3>{quantity.toLocaleString()}</h3>
    </div>
  );
};
