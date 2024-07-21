import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { BACKEND_URL, DOMAIN } from '../utils/constants';
import { useSignupData, useLoginData, useUserData, useLoadingUser, useShowSideMenu } from './useUser';

const useAuth = () => {

  const [signupData] = useSignupData();
  const [loginData] = useLoginData();
  const {setUser} = useUserData()
  const { setLoadingUserData } = useLoadingUser()
  const { setShowSideMenu } = useShowSideMenu()

  const validateSignupData = (signupData) => {
    const { fullName, email, password, confirmPassword, imageId, userType } = signupData;

    if (!fullName || !email || !password || !confirmPassword) {
      toast.error("All fields are required");
      return null;
    }

    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return null;
    }

    return { name: fullName, email: email, password: password, imageId: imageId, userType: userType};
  };

  const submitSignup = async () => {
    const validatedSignupData = validateSignupData(signupData);
    if(!validatedSignupData) return 

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
    setUser(data)
    if (response.ok) {
        const { jwtToken, user } = data;
        sessionStorage.setItem("userData", JSON.stringify(user));
        sessionStorage.setItem("jwtToken", jwtToken);
        //   navigate("/");
        toast.success("Signup successful!");
    } else {
        toast.error(data.message || "Signup failed");
    }
    } catch (error) {
    toast.error("An error occurred during signup");
    }
  };

  const validateLoginData = (loginData) => {
    const {email, password} = loginData;

    if (!email || !password) {
      toast.error("All fields are required");
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
      setUser(data)
      setLoadingUserData(false)
      setTimeout(()=>{setShowSideMenu(false)},300)
      if (response.ok) {
        const { jwtToken, user } = data;
        sessionStorage.setItem("userData", JSON.stringify(user));
        sessionStorage.setItem("jwtToken", jwtToken);
        toast.success("Login successful!");
      } else {
        toast.error(data.message || "Login failed");
      }
    } catch (error) {
      toast.error("An error occurred during login");
    }
  };

  return { submitSignup, submitLogin };
};

export default useAuth;
