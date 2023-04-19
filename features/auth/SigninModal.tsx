import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import Button from "components/common/Button";
import TextField from "components/common/TextField";

import API from "apis/API";

interface Props {
  handleClose: () => void;
  handleOpenSignupModal: () => void;
  handleOpenForgotPasswordModal: () => void;
}

const SigninModal: FC<Props> = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleSignIn = () => {
    API.post("/auth/login", { email, password }).then((res: any) => {
      if (res.data?.success) {
        dispatch({ type: "LOGIN", payload: res.data });
        props.handleClose();
      }
    });
  };

  return (
    <div className="rounded-[20px] shadow-large overflow-hidden bg-gradient-to-r from-[#DEDEDE] to-[#F2F2F200] bg-[#FAFAFA]">
      <div className="w-full relative px-6 pt-[60px] pb-6 tablet:px-[60px] border-b border-b-cyanblue">
        <button
          className="w-9 h-9 rounded-full bg-cyanblue shadow-theme flex justify-center items-center absolute top-6 right-5 tablet:right-6"
          onClick={props.handleClose}
        >
          <img src="/images/icons/close.svg" alt="" />
        </button>
        <div className="w-full flex flex-col items-center">
          <p className="text-2xl tablet:text-[40px] font-bold text-darkgray mb-6">
            Sign in
          </p>
          <div className="w-full mb-6">
            <TextField
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Input field text"
              label={
                <span className="text-base text-hotpink mb-2 ml-4">Email</span>
              }
            />
          </div>
          <div className="w-full mb-6">
            <TextField
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Input field text"
              label={
                <span className="text-base text-hotpink mb-2 ml-4">
                  Password
                </span>
              }
            />
          </div>
          <Button variant="danger" onClick={() => handleSignIn()}>
            sign in
          </Button>
        </div>
      </div>
      <div className="p-6 tablet:px-10 text-xs tablet:text-base flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-darkgray mr-1">Not a member?</span>
          <span
            className="text-hotpink font-bold cursor-pointer"
            onClick={props.handleOpenSignupModal}
          >
            Sign up
          </span>
        </div>
        <span
          className="text-hotpink font-bold cursor-pointer cursor-pointer"
          onClick={props.handleOpenForgotPasswordModal}
        >
          Password lost?
        </span>
      </div>
    </div>
  );
};

export default SigninModal;
