import { loginbg, logo } from "../../assets";
import S from "./login.module.scss";

export const Login = () => {
  return (
    <div className={S.login_container}>
      <div className={S.img_wrapper}>
        <div className={S.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={S.img}>
          <img src={loginbg} alt="bg image" />
        </div>
      </div>
      <div className={S.form_section}>
        <h1>welcome!</h1>
        <p className={S.sub_title}>Enter details to login</p>
        <form action="#">
          <div className={[S.email_input, S.input_con].join(" ")}>
            <div className={S.input_section}>
              <input type="text" placeholder="email" />
            </div>
            <p className={S.error_msg} style={{ display: "none" }}>
              invalid input
            </p>
          </div>
          <div className={[S.password_input, S.input_con].join(" ")}>
            <div className={S.input_section}>
              <input type="text" placeholder="password" />
              <small className={S.password_btn}>show</small>
            </div>
            <p className={S.error_msg} style={{ display: "none" }}>
              invalid input
            </p>
          </div>
          <h5>forgot password?</h5>
          <button>login</button>
        </form>
      </div>
    </div>
  );
};
