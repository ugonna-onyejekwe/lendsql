import axios from "axios";

const auth_token = "80bvmxc4f5uyt5y9ytl4v8ql8r34o3q42v8qrbyk";

export const getUsers = async () => {
  try {
    let res = await axios.get(
      `https://api.json-generator.com/templates/2k76UKLOIc4c/data?access_token=${auth_token}`
    );
    let fetchedUsers = JSON.stringify(res.data);
    localStorage.setItem("all-users", fetchedUsers);
    return res.data;
  } catch (e: any) {
    console.log(e.message, "err");
  }
};
