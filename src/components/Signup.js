import React from 'react';
import { useSignupData } from '../hooks/useUser';
import InputField from './InputField';
import FileUpload from './FileUpload';
import ToggleButton from './ToggleButton';
import useAuth from '../hooks/useAuth';

const Signup = ({ onSwitch }) => {

  const [signupData, updateSignup] = useSignupData();
  const { submitSignup } = useAuth();

  const handleSignup = (e) => {
    e.preventDefault();
    // console.log(signupData)
    submitSignup()
  }

  return (
    <div className="p-4 w-full">
      <h2 className="text-3xl font-bold my-2">Sign Up</h2>
      <p className="text-sm font-normal mb-3 relative">
        or <span className="text-default absolute right-2 cursor-pointer text-md font-medium  underline-animation px-3 py-1" onClick={onSwitch}>Login Now!</span>
      </p>
      <form className='w-10/12'>
        <InputField 
          label={'Full Name'}
          type={'text'}
          value={signupData?.fullName}
          onUpdate={(value) => updateSignup({ fullName: value })}
        />
        <InputField 
          label={'Email'}
          type={'email'}
          value={signupData?.email}
          onUpdate={(value) => updateSignup({ email: value })}
        />
        <InputField 
          label={'Password'}
          type={'password'}
          value={signupData?.password}
          onUpdate={(value) => updateSignup({ password: value })}
        />
        <InputField 
          label={'Confirm Password'}
          type={'password'}
          value={signupData?.confirmPassword}
          onUpdate={(value) => updateSignup({ confirmPassword: value })}
        />
        <FileUpload isDisabled={false} onUpdate={updateSignup} />
        <ToggleButton
          toggle1={"Admin"}
          toggle2={"User"}
          onUpdate={updateSignup}
          isDisabled={false}
        />
        <button 
          onClick={handleSignup}
          className="shadow-lg bg-[#fe8b00] text-white text-lg font-semibold px-4 py-2 rounded-md transition duration-300 transform hover:bg-[#e57c00] hover:scale-105 hover:shadow-lg whitespace-nowrap will-change-transform">
          Signup
        </button>
      </form>
    </div>
  );
};

export default Signup;
