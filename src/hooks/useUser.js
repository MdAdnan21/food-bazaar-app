// useUser.js
import { useSelector, useDispatch } from 'react-redux';
import { updateSignupData, updateLoginData, setUserData, logOut } from '../redux/slices/userSlice';

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

  return [userData, setUser, logout];
};

export { useSignupData, useLoginData, useUserData };
