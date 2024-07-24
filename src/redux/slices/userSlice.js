import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_PROFILE } from '../../utils/constants';

const initialSignupData = {
  fullName: "",
  email: "",
  password: "",
  confirmPassword: "",
  imageId: null,
  defaultImageUrl: DEFAULT_PROFILE,
  userType: "User",
};

const initialState = {
  signupData: initialSignupData,
  loginData: {
    email: "test1@email.com",
    password: "1234abc",
  },
  userData: null,
  showMenu: false,
  loadingUser: false,
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
      state.signupData=initialSignupData
    },
    setShowMenu(state, action) {
      state.showMenu = action.payload
    },
    setLoadingUser(state, action) {
      state.loadingUser = action.payload
    }
  },
});

export const { updateSignupData, updateLoginData, setUserData, logOut, setShowMenu, setLoadingUser } = userSlice.actions;

export default userSlice.reducer;
