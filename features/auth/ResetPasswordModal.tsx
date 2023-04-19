import React, { FC } from "react";
import Link from "next/link";
import Button from "components/common/Button";
import TextField from "components/common/TextField";

interface Props {
  handleClose: () => void;
}

const ResetPasswordModal: FC<Props> = (props) => {
  return (
    <>
      <div className="w-full relative px-7 pt-[60px] pb-6 tablet:px-[84px] bg-gradient-to-r from-[#DEDEDE] to-[#F2F2F200] bg-[#FAFAFA]  shadow-large rounded-[20px] overflow-hidden">
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
          <div className="w-full mb-6">
            <TextField
              type="password"
              label={
                <span className="text-base text-hotpink mb-2 ml-4">
                  New password
                </span>
              }
            />
          </div>
          <div className="w-full mb-6">
            <TextField
              type="password"
              label={
                <span className="text-base text-hotpink mb-2 ml-4">
                  Confirm new password
                </span>
              }
            />
          </div>
          <Button variant="danger">change password</Button>
        </div>
      </div>
    </>
  );
};

export default ResetPasswordModal;
