import React, { useState } from "react";
import Link from "next/link";
import { useSelector } from "react-redux";
import Sidebar from "./Sidebar";
import Button from "components/common/Button";
import Modal from "components/common/Modal";
import SigninModal from "features/auth/SigninModal";
import SignupModal from "features/auth/SignupModal";
import ForgotPasswordModal from "features/auth/ForgotPasswordModal";
import ResetPasswordModal from "features/auth/ResetPasswordModal";

const Header = () => {
  const authenticatedUserInfo = useSelector((state: any) => state.auth.user);
  const [isShowSigninModal, setIsShowSigninModal] = useState<boolean>(false);
  const [isShowSignupModal, setIsShowSignupModal] = useState<boolean>(false);
  const [isShowForgotPasswordModal, setIsShowForgotPasswordModal] =
    useState<boolean>(false);
  const [isShowResetPasswordModal, setIsShowResetPasswordModal] =
    useState<boolean>(false);
  const [isOpenSidebar, setIsOpenSidebar] = useState<boolean>(false);

  const handleOpenSignupModal = () => {
    setIsShowSigninModal(false);
    setIsShowSignupModal(true);
  };
  const handleOpenSigninModal = () => {
    setIsShowSignupModal(false);
    setIsShowSigninModal(true);
  };
  const handleOpenForgotPasswordModal = () => {
    setIsShowSigninModal(false);
    setIsShowForgotPasswordModal(true);
  };
  const handleOpenResetPasswordModal = () => {
    setIsShowForgotPasswordModal(false);
    setIsShowResetPasswordModal(true);
  };

  return (
    <>
      <div className="fixed z-50 bg-white w-full h-[65px] shadow-dark">
        <div className="h-full flex justify-between items-center max-w-[1440px] mx-auto px-4 tablet:px-[72px]">
          <Link href="/">
            <img src="/images/logo.svg" className="w-[112px] desktop:w-40" />
          </Link>
          <div className="hidden desktop:flex">
            {authenticatedUserInfo ? (
              <div className="flex items-center">
                <Button variant="danger" className="mr-5">
                  Add Review
                </Button>
                <div className="flex items-center">
                  <div className="flex items-center justify-center w-[45px] h-[45px] shadow-theme rounded-full bg-gradient-to-r from-[#DEDEDE] to-[#F2F2F200] bg-light">
                    <img
                      src="/images/pages/portal/user.svg"
                      alt=":( Not Found"
                      className="w-8 h-8"
                    />
                  </div>
                  <span className="text-base font-bold text-cyanblue ml-4">
                    {authenticatedUserInfo.userName}
                  </span>
                </div>
              </div>
            ) : (
              <>
                <Button
                  variant="success-text"
                  className="mr-5"
                  onClick={handleOpenSigninModal}
                >
                  sign in
                </Button>
                <Button variant="success" onClick={handleOpenSignupModal}>
                  sign up
                </Button>
              </>
            )}
          </div>
          <Button
            className="flex desktop:hidden"
            onClick={() => setIsOpenSidebar(true)}
          >
            <img src="/images/icons/menu.svg" />
          </Button>
        </div>
      </div>
      <Sidebar
        isOpen={isOpenSidebar}
        handleClose={() => setIsOpenSidebar(false)}
        {...{ handleOpenSigninModal, handleOpenSignupModal }}
      />
      <Modal
        isShow={isShowSigninModal}
        hasCloseButton={false}
        maxWidth="max-w-[312px] tablet:max-w-[462px]"
        className="bg-gradient-to-r from-[#DEDEDE] to-[#F2F2F200] bg-[#FAFAFA]"
      >
        <SigninModal
          handleClose={() => setIsShowSigninModal(false)}
          handleOpenSignupModal={handleOpenSignupModal}
          handleOpenForgotPasswordModal={handleOpenForgotPasswordModal}
        />
      </Modal>
      <Modal
        isShow={isShowSignupModal}
        hasCloseButton={false}
        maxWidth="max-w-[314px] tablet:max-w-[383px] desktop:max-w-[412px]"
      >
        <SignupModal
          handleClose={() => setIsShowSignupModal(false)}
          handleOpenSigninModal={handleOpenSigninModal}
        />
      </Modal>
      <Modal
        isShow={isShowForgotPasswordModal}
        hasCloseButton={false}
        maxWidth="max-w-[314px] tablet:max-w-[510px]"
      >
        <ForgotPasswordModal
          handleClose={() => setIsShowForgotPasswordModal(false)}
          handleOpenResetPasswordModal={handleOpenResetPasswordModal}
        />
      </Modal>
      <Modal
        isShow={isShowResetPasswordModal}
        hasCloseButton={false}
        maxWidth="max-w-[314px] tablet:max-w-[465px]"
      >
        <ResetPasswordModal
          handleClose={() => setIsShowResetPasswordModal(false)}
        />
      </Modal>
    </>
  );
};

export default Header;
