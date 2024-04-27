import { useNavigate } from "react-router-dom";
import { loginbg, logo } from "../../assets";
import S from "./login.module.scss";
import { useFormik } from "formik";
import { loginValidation } from "./validation";
import { useState } from "react";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const onSubmit = () => {
    navigate("/dashboard/users");
  };

  const { values, handleSubmit, touched, errors, handleChange } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: loginValidation,
    onSubmit,
  });

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
        <div className={S.logo_con}>
          <img src={logo} alt="logo" />
        </div>

        <h1>welcome!</h1>
        <p className={S.sub_title}>Enter details to login</p>
        <form onSubmit={handleSubmit}>
          <div className={[S.email_input, S.input_con].join(" ")}>
            <div className={S.input_section}>
              <input
                type="text"
                placeholder="email"
                value={values.email}
                onChange={handleChange("email")}
              />
            </div>
            {touched.email && errors.email && (
              <p className={S.error_msg}>{errors.email}</p>
            )}
          </div>
          <div className={[S.password_input, S.input_con].join(" ")}>
            <div className={S.input_section}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="password"
                value={values.password}
                onChange={handleChange("password")}
              />
              <small
                className={S.password_btn}
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              >
                {showPassword ? "hide" : "show"}
              </small>
            </div>
            {touched.password && errors.password && (
              <p className={S.error_msg}>{errors.password}</p>
            )}
          </div>
          <h5>forgot password?</h5>
          <button type="submit">login</button>
        </form>
      </div>
    </div>
  );
};
