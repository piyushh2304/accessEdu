import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation4 from "../components/Navigation4";
import InputField2 from "../components/InputField2";
import ActionButton from "../components/ActionButton";
import FrameComponent17 from "../components/FrameComponent17";
import { authService } from "../services/api";

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    if (e) {
      e.preventDefault(); // Prevent default form submission to avoid page reload
    }
    setError('');
    setLoading(true);
    console.log('Form submission started with:', { username, email, password });

    // Validate that all fields are filled
    if (!username.trim() || !email.trim() || !password.trim()) {
      setError('All fields are required. Please fill in username, email, and password.');
      setLoading(false);
      console.log('Validation failed: Missing fields', { username, email, password });
      return;
    }

    try {
      console.log('Attempting login with authService...');
      // Attempt login with email and password
      const userData = await authService.login(email, password);
      console.log('Login response:', userData);
      if (userData && userData.token) {
        // Ensure username is stored in localStorage with user data
        const updatedUserData = { ...userData, username };
        localStorage.setItem('user', JSON.stringify(updatedUserData));
        console.log('Login successful, navigating to /homepage1');
        // Redirect to homepage1 after successful login
        navigate('/homepage1');
      } else {
        setError('Login failed. No token received or invalid response.');
        console.log('Login failed: No token in response');
      }
    } catch (err) {
      console.error('Login error:', err);
      setError(err.message || 'An error occurred during login. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full relative bg-gray-white overflow-hidden flex flex-col items-start justify-start text-left text-gray-900 font-body-medium-400">
      <Navigation4 />
      <div className="self-stretch flex flex-col items-center justify-center py-20 px-5 box-border min-h-[calc(100vh_-_80px)]">
        <div className="w-full max-w-[400px] flex flex-col items-center justify-start gap-[40px] text-center text-21xl mq800:gap-[20px_40px]">
          <h1 className="m-0 self-stretch relative text-inherit tracking-[-0.01em] leading-[48px] font-semibold font-inherit mq450:text-5xl mq450:leading-[29px] mq800:text-13xl mq800:leading-[38px]">
            Sign in to your account
          </h1>
          <form onSubmit={handleSubmit} className="m-0 self-stretch flex flex-col items-start justify-start gap-[24px]">
            <div className="self-stretch h-[270px] flex flex-col items-start justify-start gap-[18px]">
              {/* Username Field */}
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[6px]">
                <div className="relative text-sm tracking-[-0.01em] leading-[22px] font-body-medium-400 text-gray-900 text-left inline-block min-w-[50px]">
                  Username
                </div>
                <div className="self-stretch bg-gray-white overflow-hidden flex flex-row items-start justify-start pt-[13px] px-[18px] pb-[11px] border-[1px] border-solid border-gray-100">
                  <input
                    className="w-[220px] [border:none] [outline:none] font-body-medium-400 text-base bg-[transparent] h-6 relative leading-[24px] text-gray-500 text-left inline-block p-0"
                    placeholder="Enter your username..."
                    type="text"
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                      console.log('Username updated:', e.target.value);
                    }}
                    required
                  />
                </div>
              </div>
              {/* Email Field */}
              <div className="self-stretch overflow-hidden flex flex-col items-start justify-start gap-[6px]">
                <div className="relative text-sm tracking-[-0.01em] leading-[22px] font-body-medium-400 text-gray-900 text-left inline-block min-w-[35px]">
                  Email
                </div>
                <div className="self-stretch bg-gray-white overflow-hidden flex flex-row items-start justify-start pt-[13px] px-[18px] pb-[11px] border-[1px] border-solid border-gray-100">
                  <input
                    className="w-[220px] [border:none] [outline:none] font-body-medium-400 text-base bg-[transparent] h-6 relative leading-[24px] text-gray-500 text-left inline-block p-0"
                    placeholder="Username or email address..."
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      console.log('Email updated:', e.target.value);
                    }}
                    required
                  />
                </div>
              </div>
              {/* Password Field */}
              <InputField2
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  console.log('Password updated:', e.target.value);
                }}
              />
            </div>
            {error && <p className="self-stretch text-sm text-red-500 mt-2">{error}</p>}
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
              <div className="flex flex-col items-start justify-start pt-[13px] px-0 pb-0">
                <div className="flex flex-row items-start justify-start gap-[10px]">
                  <input
                    className="m-0 h-[22px] w-[22px] relative box-border border-[1px] border-solid border-gray-200"
                    type="checkbox"
                  />
                  <div className="relative text-sm tracking-[-0.01em] leading-[22px] font-body-medium-400 text-gray-700 text-left inline-block min-w-[95px]">
                    Remember me
                  </div>
                </div>
              </div>
              <ActionButton
                actionButtonText={loading ? "Signing In..." : "Sign In"}
                iconName="/arrowright1.svg"
                arrowRightIconBackgroundColor="#ff6636"
                propLineHeight="48px"
                propColor="#fff"
                propMinWidth="52px"
                propPadding="12px 0px 0px"
                disabled={loading}
                onPress={handleSubmit} // Override default navigation with custom handler
              />
            </div>
          </form>
          <FrameComponent17 signInWith="Sign in with" />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
