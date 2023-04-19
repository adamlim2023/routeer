import React, { FC } from "react";
import Link from "next/link";
import Button from "components/common/Button";
import TextField from "components/common/TextField";

interface Props {
  handleClose: () => void;
  handleOpenResetPasswordModal: () => void;
}

const ForgotPasswordModal: FC<Props> = (props) => {
  return (
    <div className="w-full relative px-7 pt-[60px] pb-6 tablet:px-[72px] bg-gradient-to-r from-[#DEDEDE] to-[#F2F2F200] bg-[#FAFAFA] shadow-large rounded-[20px] overflow-hidden">
      <button
        className="w-9 h-9 rounded-full bg-cyanblue shadow-theme flex justify-center items-center absolute top-6 right-5 tablet:right-6"
        onClick={props.handleClose}
      >
        <img src="/images/icons/close.svg" alt="" />
      </button>
      <div className="w-full flex flex-col items-center">
        <p className="text-base font-bold text-hotpink mb-6 uppercase">
          Forgot your password?
        </p>
        <p className="text-2xl font-bold text-darkgray mb-6 text-center tracking-[-1px]">
          Enter the email address you've used to sign up and we'll send you a
          link to reset your password.
        </p>
        <div className="w-full mb-6">
          <TextField
            type="email"
            label={
              <span className="text-base text-hotpink mb-2 ml-4">
                Email Address*
              </span>
            }
          />
        </div>
        <Button variant="danger" onClick={props.handleOpenResetPasswordModal}>
          reset password
        </Button>
      </div>
    </div>
  );
};

export default ForgotPasswordModal;
