import S from "./users.module.scss";
import { Active_users, Coin_alt, Loan_users, User_alt } from "../../assets";

import { Users_box } from "../../components/users_box";
import { UserTable } from "../../components";

export const UserPage = () => {
  return (
    <>
      <div className={S.users_page_con}>
        <div className={S.header}>
          <h4>users</h4>
        </div>

        <div className={S.box_wrapper}>
          <Users_box
            icon={<User_alt />}
            icon_bg_color={"fce8ff"}
            title="Users"
            quantity={2453}
          />
          <Users_box
            icon={<Active_users />}
            icon_bg_color={"eee8ff"}
            title="active users"
            quantity={2453}
          />

          <Users_box
            icon={<Loan_users />}
            icon_bg_color={"feefec"}
            title="users with loans"
            quantity={12453}
          />
          <Users_box
            icon={<Coin_alt />}
            icon_bg_color={"ffebf0"}
            title="users with savings"
            quantity={102453}
          />
        </div>

        <div className={S.users_section}>
          <div className={S.main_wrapper}>
            <UserTable />
          </div>
        </div>
      </div>
    </>
  );
};
