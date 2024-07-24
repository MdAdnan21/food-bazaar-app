import { useNavigate } from 'react-router-dom';
import { BACKEND_URL, DOMAIN } from '../utils/constants';
import { useSignupData, useLoginData, useUserData, useLoadingUser, useShowSideMenu } from './useUser';
import useImageUpload from './useImageUpload';
import { showToast } from '../utils/toastConfig';

const useAuth = () => {

  const [signupData] = useSignupData();
  const [loginData] = useLoginData();
  const {setUser} = useUserData()
  const { setLoadingUserData } = useLoadingUser()
  const { setShowSideMenu } = useShowSideMenu()
  const { deleteImage } = useImageUpload();

  const validateSignupData = (signupData) => {
    const { fullName, email, password, confirmPassword, imageId, userType } = signupData;

    if (!fullName || !email || !password || !confirmPassword) {
      showToast("All fields are required","error")
      return null;
    }

    if (password !== confirmPassword) {
      showToast("Passwords do not match", "error");
      return null;
    }

    return { name: fullName, email: email, password: password, imageId: imageId, userType: userType};
  };

  const submitSignup = async () => {
    const validatedSignupData = validateSignupData(signupData);
    if(!validatedSignupData) return 
    setLoadingUserData(true)
    try {
      const response = await fetch(DOMAIN + "/api/auth/signup", {
          method: "POST",
          headers: {
          "Content-Type": "application/json",
          },
          body: JSON.stringify(validatedSignupData),
      });

      const data = await response.json();
      console.log(data)
      if (response.ok) {
          const { jwtToken, user } = data;
          sessionStorage.setItem("userData", JSON.stringify(user));
          sessionStorage.setItem("jwtToken", jwtToken);
          showToast("Signup successful!");
          setUser(data)
          setTimeout(()=>{setLoadingUserData(false)},1000)
          setTimeout(()=>{setShowSideMenu(false)},1300)
      } else {
          showToast(data?.message, "error");
          setLoadingUserData(false)
          if(signupData?.imageId){
            const { success } = await deleteImage();
          }
      }
    } catch (error) {
        showToast("An error occurred during signup", "error");
        setLoadingUserData(false)
        if(signupData?.imageId){
          const { success } = await deleteImage();
        }
      }
  };

  const validateLoginData = (loginData) => {
    const {email, password} = loginData;

    if (!email || !password) {
      showToast("All fields are required", "error");
      return false;
    }
    return true
  };

  const submitLogin = async () => {
    if(!validateLoginData(loginData)) return
    setLoadingUserData(true)
    try {
      const response = await fetch(DOMAIN + "/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();
      console.log(data)
      if (response.ok) {
        const { jwtToken, user } = data;
        sessionStorage.setItem("userData", JSON.stringify(user));
        sessionStorage.setItem("jwtToken", jwtToken);
        showToast("Login successful!");
        setUser(data)
        setTimeout(()=>{setLoadingUserData(false)},1000)
        setTimeout(()=>{setShowSideMenu(false)},1300)
      } else {
        showToast(data?.message, "error");
        setLoadingUserData(false)
      }
    } catch (error) {
      showToast("An error occurred during login", "error");
      setLoadingUserData(false)
    }
  };

  return { submitSignup, submitLogin };
};

export default useAuth;
