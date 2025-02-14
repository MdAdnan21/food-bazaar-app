// useUser.js
import { useSelector, useDispatch } from "react-redux";
import {
  updateSignupData,
  updateLoginData,
  setUserData,
  logOut,
  setShowMenu,
  setLoadingUser,
} from "../redux/slices/userSlice";

const useSignupData = () => {
  const dispatch = useDispatch();
  const signupData = useSelector((state) => state.user.signupData);

  const updateSignup = (data) => {
    dispatch(updateSignupData(data));
  };

  return [signupData, updateSignup];
};

const useLoginData = () => {
  const dispatch = useDispatch();
  const loginData = useSelector((state) => state.user.loginData);

  const updateLogin = (data) => {
    dispatch(updateLoginData(data));
  };

  return [loginData, updateLogin];
};

const useUserData = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.user.userData);

  const setUser = (data) => {
    dispatch(setUserData(data));
  };

  const logout = () => {
    dispatch(logOut());
  };

  const getUserLocal = () => {
    const userData = sessionStorage.getItem("userData");
    if (userData) {
      const user = JSON.parse(userData);
      return user;
    }
    return null;
  };

  return { userData, setUser, logout, getUserLocal };
};

const useShowSideMenu = () => {
  const dispatch = useDispatch();
  const showSideMenu = useSelector((state) => state.user.showMenu);

  const setShowSideMenu = (data) => {
    dispatch(setShowMenu(data));
  };

  return { showSideMenu, setShowSideMenu };
};

const useLoadingUser = () => {
  const dispatch = useDispatch();
  const loadingUserData = useSelector((state) => state.user.loadingUser);

  const setLoadingUserData = (data) => {
    dispatch(setLoadingUser(data));
  };

  return { loadingUserData, setLoadingUserData };
};

export {
  useSignupData,
  useLoginData,
  useUserData,
  useShowSideMenu,
  useLoadingUser,
};
