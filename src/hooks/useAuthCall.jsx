import axios from "axios";
import {
  fetchFail,
  fetchStart,
  loginSuccess,
  logoutSuccess,
} from "../features/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const BASE_URL = "http://127.0.0.1:8000/";

const useAuthCall = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const register = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(`${BASE_URL}users/register/`, userInfo);
      dispatch(loginSuccess(data));
      console.log(data);
      navigate("/");
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  const login = async (userInfo) => {
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${BASE_URL}users/auth/login/`,
        userInfo
      );
      console.log(data);
      localStorage.setItem("isActive", true);
      dispatch(loginSuccess(data));
      navigate("/");
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  const logout = async () => {
    dispatch(fetchStart());
    try {
      await axios.post(`${BASE_URL}users/auth/logout/`);
      // localStorage.setItem("isActive", false);
      localStorage.clear();
      dispatch(logoutSuccess());
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  return { register, login, logout };
};

export default useAuthCall;
