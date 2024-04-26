import S from "./user-details.module.scss";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Back_arrow, Single_user } from "../../assets";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Star } from "../../components";
import { useState } from "react";

export const User_details = () => {
  window.scrollTo(0, 0);

  const [showMenu, setShowMenu] = useState(false);
  const { id } = useParams();
  let data = localStorage.getItem("all-users");
  let users = data ? JSON.parse(data) : "";
  const navigate = useNavigate();

  return (
    <>
      {users &&
        users.map((i: userType, key: number) => {
          return (
            i.userId === id && (
              <div className={S.User_details_page} key={key}>
                <div className={S.back_arrow} onClick={() => navigate(-1)}>
                  <span>
                    <Back_arrow />
                  </span>
                  <p>back to users</p>
                </div>

                <div className={S.header}>
                  <h3>user details</h3>
                  <div className={S.btn_con}>
                    <button>blacklist user</button>
                    <button>activate user</button>
                  </div>
                </div>

                <section className={S.user_header}>
                  <BsThreeDotsVertical
                    className={S.menu_btn}
                    onClick={() => {
                      setShowMenu(!showMenu);
                    }}
                  />
                  <div className={S.wrapper}>
                    <div className={S.box}>
                      <div className={S.img_con}>
                        <Single_user />
                      </div>
                      <div className={S.txt_con}>
                        <h4>{i.name}</h4>

                        <p>{i.userId.slice(0, 8)}</p>
                      </div>
                    </div>

                    <div className={S.box}>
                      <p>user tier</p>
                      <span>
                        <Star rating={i.tier} />
                      </span>
                    </div>

                    <div className={S.box}>
                      <h4>
                        {" "}
                        &#8358;{Number(i.monthlyIncome.min).toLocaleString()}
                      </h4>
                      <p>
                        {i.accountNumber}/{i.bank}
                      </p>
                    </div>
                  </div>

                  <div
                    className={showMenu ? [S.nav, S.active].join(" ") : S.nav}
                    onClick={() => setShowMenu(false)}
                  >
                    <Link to={"#"} className={S.active}>
                      general details
                    </Link>
                    <Link to={"#"}>documents</Link>
                    <Link to={"#"}>bank details</Link>
                    <Link to={"#"}>loans </Link>
                    <Link to={"#"}>savings </Link>
                    <Link to={"#"}>app and settings </Link>
                  </div>
                </section>

                <div className={S.user_info}>
                  <section>
                    <h4>personal information</h4>
                    <article>
                      <div className={S.box}>
                        <p>full name</p>
                        <h5>{i.name}</h5>
                      </div>
                      <div className={S.box}>
                        <p>phone number</p>
                        <h5>{i.phoneNumber}</h5>
                      </div>
                      <div className={S.box}>
                        <p>email address</p>
                        <h5>{i.email}</h5>
                      </div>
                      <div className={S.box}>
                        <p>bvn</p>
                        <h5>{i.bvn}</h5>
                      </div>
                      <div className={S.box}>
                        <p>gender</p>
                        <h5>{i.gender}</h5>
                      </div>
                      <div className={S.box}>
                        <p>marital status</p>
                        <h5>{i.maritalStatus}</h5>
                      </div>
                      <div className={S.box}>
                        <p>children </p>
                        <h5>{i.childern}</h5>
                      </div>
                      <div className={S.box}>
                        <p>type of residence</p>
                        <h5>{i.residenceType}</h5>
                      </div>
                    </article>
                  </section>

                  <section>
                    <h4>education and employment</h4>
                    <article>
                      <div className={S.box}>
                        <p>level of education</p>
                        <h5>{i.levelOfEducation}</h5>
                      </div>
                      <div className={S.box}>
                        <p>employment status</p>
                        <h5>{i.employmentStatus}</h5>
                      </div>
                      <div className={S.box}>
                        <p>sector of employment</p>
                        <h5>{i.sectionOfEmployment}</h5>
                      </div>
                      <div className={S.box}>
                        <p>duration of employment</p>
                        <h5>{i.durationOfEmployment}</h5>
                      </div>
                      <div className={S.box}>
                        <p>office mail</p>
                        <h5>{i.officialMail}</h5>
                      </div>

                      <div className={S.box}>
                        <p>monthly income </p>
                        <h5>
                          &#8358;{Number(i.monthlyIncome.min).toLocaleString()}{" "}
                          - &#8358;
                          {Number(i.monthlyIncome.max).toLocaleString()}
                        </h5>
                      </div>
                      <div className={S.box}>
                        <p>loan replayment</p>
                        <h5> &#8358;{i.loanRepayment.toLocaleString()}</h5>
                      </div>
                    </article>
                  </section>

                  <section>
                    <h4>socials</h4>
                    <article>
                      <div className={S.box}>
                        <p>twitter</p>
                        <h5>{i.twitterHandle}</h5>
                      </div>
                      <div className={S.box}>
                        <p>facebook</p>
                        <h5>{i.facebookHandle}</h5>
                      </div>
                      <div className={S.box}>
                        <p>instagram</p>
                        <h5>{i.instaHandle}</h5>
                      </div>
                    </article>
                  </section>

                  <section>
                    <h4>guarantor</h4>

                    {i.guarantors.map((i, key) => {
                      return (
                        <article key={key} className={S.guarator_section}>
                          <div className={S.box}>
                            <p>full name</p>
                            <h5>{i.fullName}</h5>
                          </div>
                          <div className={S.box}>
                            <p>phone number</p>
                            <h5>{i.phoneNumber}</h5>
                          </div>
                          <div className={S.box}>
                            <p>email address</p>
                            <h5>{i.email}</h5>
                          </div>
                          <div className={S.box}>
                            <p>relationship</p>
                            <h5>{i.relationship}</h5>
                          </div>
                        </article>
                      );
                    })}
                  </section>
                </div>
              </div>
            )
          );
        })}
    </>
  );
};
