import axios from "axios";

import Swal from "sweetalert2";

const devUrl = "http://localhost:2207/";

const prodUrl = "https://a-level-bank.herokuapp.com/";

export const backendUrl =
  process.env.REACT_APP_ENV === "production" ? prodUrl : devUrl;

const AUTH_TOKEN = localStorage.getItem("token") || "glory";

export const loggedInUser =
  JSON.parse(localStorage.getItem("userData")) || null;

export const httpService = axios.create({
  baseURL: backendUrl,
  timeout: 10000,
  withCredentials: "include",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${AUTH_TOKEN}`,
    AuthenticatedBy: loggedInUser && loggedInUser.password ? "jwt" : "google",
  },
});

httpService.interceptors.response.use(
  (response) => {
    if (response && response.data.title && response.data.message) {
      Swal.fire({
        icon: "success",
        title: response.data.title,
        text: response.data.message,
        showConfirmButton: false,
        timer: 2000,
      });
    }
    return response;
  },
  (error) => {
    const failed = { error };

    if (failed.error.response) {
      Swal.fire({
        icon: "error",
        title: failed.error.response.data.title,
        text: failed.error.response.data.message,
        showConfirmButton: false,
        timer: 2000,
      });
    }
    // return error;
  }
);

export const handleLogout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("userData");
  window.location.assign("/signIn");
};
