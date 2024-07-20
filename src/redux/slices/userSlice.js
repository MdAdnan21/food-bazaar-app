// userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const DEFAULT_PROFILE = 'path/to/default/profile/image';

const initialState = {
  signupData: {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    profileImg: null,
    profileUrl: DEFAULT_PROFILE,
    userType: "User",
  },
  loginData: {
    email: "",
    password: "",
  },
  userData: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateSignupData(state, action) {
      state.signupData = {
        ...state.signupData,
        ...action.payload,
      };
    },
    updateLoginData(state, action) {
      state.loginData = {
        ...state.loginData,
        ...action.payload,
      };
    },
    setUserData(state, action) {
      state.userData = action.payload;
    },
    logOut(state) {
      sessionStorage.removeItem('userData');
      state.userData = null;
    },
  },
});

export const { updateSignupData, updateLoginData, setUserData, logOut } = userSlice.actions;

export default userSlice.reducer;
