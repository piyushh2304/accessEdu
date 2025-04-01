import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Navigation11 from "../components/Navigation11";
import InputField3 from "../components/InputField3";
import FrameComponent17 from "../components/FrameComponent17";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    termsAccepted: false,
  });

  const navigate = useNavigate(); // For redirection

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      termsAccepted: checked,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { firstName, lastName, username, email, password, confirmPassword, termsAccepted } = formData;

    // Basic front-end validation
    if (!firstName || !lastName || !username || !email || !password || password !== confirmPassword || !termsAccepted) {
      alert('Please fill out all fields correctly.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5000/signup', formData);

      // Check if the backend response is successful
      if (response.status === 201) {
        alert('Account created successfully!');
        navigate('/'); // Redirect to homepage on success
      }
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message); // Alert the error message from backend
      } else {
        alert('An error occurred. Please try again later.');
      }
    }
  };

  return (
    <div className="w-full relative bg-gray-white overflow-hidden flex flex-col items-start justify-start tracking-[normal]">
      <Navigation11 />
      <main className="w-[1696px] flex flex-row items-start justify-start py-0 pr-5 pl-0 box-border gap-[192px] max-w-full text-center text-21xl text-gray-900 font-body-medium-400 mq450:gap-[192px_24px] mq800:gap-[192px_48px] mq1350:flex-wrap mq1350:gap-[192px_96px]">
        <img
          className="h-[992px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[543px] mq800:min-w-full"
          loading="lazy"
          alt=""
          src="/illustrations1@2x.png"
        />
        <div className="w-[648px] flex flex-col items-start justify-start pt-44 px-0 pb-0 box-border min-w-[648px] max-w-full mq450:pt-[74px] mq450:box-border mq800:min-w-full mq1150:pt-[114px] mq1150:box-border mq1350:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full mq800:gap-[20px_40px]">
            <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.01em] leading-[48px] font-semibold font-inherit mq450:text-5xl mq450:leading-[29px] mq800:text-13xl mq800:leading-[38px]">
              Create your account
            </h1>
            <form onSubmit={handleSubmit} className="m-0 self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[18px]">
                <div className="self-stretch flex flex-row items-end justify-start gap-[18px] mq800:flex-wrap">
                  <div className="flex-1 overflow-hidden flex flex-col items-start justify-start gap-[6px] min-w-[205px]">
                    <div className="relative text-sm tracking-[-0.01em] leading-[22px] font-body-medium-400 text-gray-900 text-left inline-block min-w-[65px]">
                      First Name
                    </div>
                    <div className="self-stretch bg-gray-white overflow-hidden flex flex-row items-start justify-start pt-[13px] px-[18px] pb-[11px] border-[1px] border-solid border-gray-100">
                      <input
                        className="w-[93px] [border:none] [outline:none] font-body-medium-400 text-base bg-[transparent] h-6 relative leading-[24px] text-gray-500 text-left inline-block p-0"
                        placeholder="First name..."
                        type="text"
                        value={formData.firstName}
                        onChange={handleChange}
                        name="firstName"
                      />
                    </div>
                  </div>
                  <div className="flex-[0.8794] bg-gray-white box-border overflow-hidden flex flex-row items-start justify-start py-3 px-[18px] min-w-[205px] border-[1px] border-solid border-gray-100 mq450:flex-1">
                    <input
                      className="w-[79px] [border:none] [outline:none] font-body-medium-400 text-base bg-[transparent] h-6 relative leading-[24px] text-gray-500 text-left inline-block p-0"
                      placeholder="Last name"
                      type="text"
                      value={formData.lastName}
                      onChange={handleChange}
                      name="lastName"
                    />
                  </div>
                </div>
                <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[6px]">
                  <div className="relative text-sm tracking-[-0.01em] leading-[22px] font-body-medium-400 text-gray-900 text-left inline-block min-w-[67px]">
                    Username
                  </div>
                  <div className="self-stretch bg-gray-white overflow-hidden flex flex-row items-start justify-start pt-[13px] px-[18px] pb-[11px] border-[1px] border-solid border-gray-100">
                    <input
                      className="w-[91px] [border:none] [outline:none] font-body-medium-400 text-base bg-[transparent] h-6 relative leading-[24px] text-gray-500 text-left inline-block p-0"
                      placeholder="Username..."
                      type="text"
                      value={formData.username}
                      onChange={handleChange}
                      name="username"
                    />
                  </div>
                </div>
                <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[6px]">
                  <div className="relative text-sm tracking-[-0.01em] leading-[22px] font-body-medium-400 text-gray-900 text-left inline-block min-w-[35px]">
                    Email
                  </div>
                  <div className="self-stretch bg-gray-white overflow-hidden flex flex-row items-start justify-start pt-[13px] px-[18px] pb-[11px] border-[1px] border-solid border-gray-100">
                    <input
                      className="w-[106px] [border:none] [outline:none] font-body-medium-400 text-base bg-[transparent] h-6 relative leading-[24px] text-gray-500 text-left inline-block p-0"
                      placeholder="Email address"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      name="email"
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[18px] mq800:flex-wrap">
                  <InputField3
                    labal="Password"
                    labelPlaceholder="Create password"
                    value={formData.password}
                    onChange={handleChange}
                    type="password"
                    name="password"
                  />
                  <InputField3
                    labal="Confirm Password"
                    labelPlaceholder="Confirm password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    type="password"
                    name="confirmPassword"
                  />
                </div>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-4 box-border max-w-full">
                <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[20px] mq800:flex-wrap">
                  <div className="w-[307px] flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border">
                    <div className="self-stretch flex flex-row items-start justify-start gap-[10px]">
                      <input
                        className="m-0 h-[22px] w-[22px] relative box-border border-[1px] border-solid border-gray-200"
                        type="checkbox"
                        onChange={handleCheckboxChange}
                      />
                      <div className="relative text-sm tracking-[-0.01em] leading-[22px] font-body-medium-400 text-left">
                        <span className="text-gray-600">{`I Agree with all of your `}</span>
                        <span className="text-secondary-500">{`Terms & Conditions`}</span>
                      </div>
                    </div>
                  </div>
                  <button className="cursor-pointer [border:none] py-0 px-[22px] bg-primary-500 flex flex-row items-start justify-start gap-[12px]">
                    <div className="relative text-base tracking-[-0.01em] leading-[48px] capitalize font-semibold font-body-medium-400 text-gray-white text-left inline-block min-w-[120px]">
                      Create account
                    </div>
                    <div className="flex flex-col items-start justify-start pt-3 px-0 pb-0">
                      <img
                        className="w-6 h-6 relative"
                        alt=""
                        src="/arrowright1.svg"
                      />
                    </div>
                  </button>
                </div>
              </div>
              <FrameComponent17
                signInWith="Sign up with"
                propRight="unset"
                propLeft="calc(50% - 324px)"
                propWidth="98px"
                propMinWidth="98px"
                propDisplay="inline-block"
                propDisplay1="inline-block"
                propDisplay2="inline-block"
              />
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignUp;
