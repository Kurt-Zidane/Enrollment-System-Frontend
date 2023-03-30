import axios from "axios";


export function UserLogin(user) {
    return axios
      .post("http://localhost:8000/api/v1/accounts/token/login/", user)
      .then(async (response) => {
        localStorage.setItem("token", JSON.stringify(response.data.auth_token));
        console.log(
          "Login Success! Stored Token: ",
          JSON.parse(localStorage.getItem("token") || "{}")
        );
        return true;
      })
      .catch((error) => {
        console.log("Login Failed: " + error);
        return false;
      });
    
  }

  export function UserInfo() {
    const token = JSON.parse(localStorage.getItem("token") || "{}");
    return axios
      .get("http://localhost:8000/api/v1/accounts/users/me", {
        headers: {
          Authorization: "Token " + token,
        },
      })
      .then((response) => {
        console.log(response.data);
        return response.data;
      });
  }

  export function ProfileInfo(id) {
    const token = JSON.parse(localStorage.getItem("token") || "{}");
    return axios 
      .get("http://localhost:8000/api/v1/profiles/",{
        headers: {
          Authorization: "Token " + token
        },
      })
      .then((response) => {
        console.log(response.data);
        return response.data;
      });
  }