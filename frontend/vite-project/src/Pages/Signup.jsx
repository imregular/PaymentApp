import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heading } from '../components/auth/Heading';
import { Button } from '../components/auth/Button';
import { InputBox } from '../components/auth/InputBox';
import { SubHeading } from '../components/auth/SubHeading';
import { BottomWarning } from '../components/auth/BottomWarning';
import axios from 'axios';

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async () => {
    try {
      const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
        username,
        firstName,
        lastName,
        password
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (error) {
      console.error("Error during signup:", error);
      alert("Failed to sign up. Please try again.");
    }
  };

  return (
    <div className="bg-slate-300 h-screen flex justify-center">
      <div className="flex flex-col justify-center">
        <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
          <Heading label={"Sign up"} />
          <SubHeading label={"Enter your information to create an account"} />
          <InputBox 
            onChange={e => setFirstName(e.target.value)} 
            placeholder="John" 
            label={"First Name"} 
          />
          <InputBox 
            onChange={e => setLastName(e.target.value)} 
            placeholder="Doe" 
            label={"Last Name"} 
          />
          <InputBox 
            onChange={e => setUsername(e.target.value)} 
            placeholder="harkirat@gmail.com" 
            label={"Email"} 
          />
          <InputBox 
            onChange={e => setPassword(e.target.value)} 
            placeholder="123456" 
            label={"Password"} 
            type="password" 
          />
          <div className="pt-4">
            <Button onClick={handleSignup} label={"Sign up"} />
          </div>
          <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"} />
        </div>
      </div>
    </div>
  );
};

export default Signup;
