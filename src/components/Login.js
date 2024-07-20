import React from 'react';
import { useLoginData } from '../hooks/useUser';
import InputField, { InputFieldPassword } from './inputField';

const Login = ({ onSwitch }) => {

  const [loginData, updateLogin] = useLoginData();

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold my-2">Login</h2>
      <p className="text-sm font-normal mb-3 relative">
        or <span className="text-default absolute right-4 cursor-pointer text-md font-medium  underline-animation px-5 py-1" onClick={onSwitch}>Create Account Now!</span>
      </p>
      <form>
        <InputField 
          label={'Email'}
          type={'email'}
          value={loginData?.email}
          onUpdate={(value) => updateLogin({ email: value })}
        />
        <InputField 
          label={'Password'}
          type={'password'}
          value={loginData?.password}
          onUpdate={(value) => updateLogin({ password: value })}
        />
        <button className="shadow-lg my-2 bg-[#fe8b00] text-white text-lg font-semibold px-4 py-2 rounded-md transition duration-300 transform hover:bg-[#e57c00] hover:scale-105 hover:shadow-lg whitespace-nowrap will-change-transform">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
