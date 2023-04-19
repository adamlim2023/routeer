import React, { FC, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Button from "components/common/Button";

interface Props {
  isOpen: boolean;
  handleClose: () => void;
  handleOpenSigninModal: () => void;
  handleOpenSignupModal: () => void;
}

const Sidebar: FC<Props> = (props) => {
  const router = useRouter();

  const handleSignin = () => {
    props.handleClose();
    props.handleOpenSigninModal();
  };

  const handleSignup = () => {
    props.handleClose();
    props.handleOpenSignupModal();
  };

  useEffect(() => {
    router.events.on("routeChangeStart", props.handleClose);
    return () => {
      router.events.off("routeChangeStart", props.handleClose);
    };
  }, []);

  return (
    <div
      className={`z-[100] fixed w-60 tablet:w-[376px] tablet:w-94 h-screen bg-light top-0 right-0 transform transition ${
        !props.isOpen ? `translate-x-full` : ``
      }`}
    >
      <div className="px-4 py-[18px] tablet:px-9 tablet:py-6">
        <button
          className="w-7 h-7 tablet:w-9 tablet:h-9 mb-16 tablet:mb-14 rounded-full bg-hotpink shadow-theme flex items-center justify-center outline-none"
          onClick={props.handleClose}
        >
          <img
            src="/images/icons/close.svg"
            className="w-3 tablet:w-4"
            alt=""
          />
        </button>
        <div className="px-4 tablet:px-6">
          <Button
            variant="success"
            className="w-full mb-4"
            onClick={handleSignup}
          >
            sign up
          </Button>
          <Button
            variant="danger-text"
            className="w-full mb-14"
            onClick={handleSignin}
          >
            sign in
          </Button>
          <Button variant="danger" className="w-full">
            add review
          </Button>
        </div>
        <div className="w-full h-[1px] bg-cyanblue my-14" />
        <ul className="text-darkgray flex flex-col items-end">
          <li className="mb-6 tablet:mb-8">
            <Link href="/about">
              <a className="text-base tablet:text-xl">About Us</a>
            </Link>
          </li>
          <li className="mb-6 tablet:mb-8">
            <Link href="/mission">
              <a className="text-base tablet:text-xl">Our Mission</a>
            </Link>
          </li>
          <li className="mb-6 tablet:mb-8">
            <Link href="/support">
              <a className="text-base tablet:text-xl">Who we support</a>
            </Link>
          </li>
          <li className="mb-6 tablet:mb-8">
            <Link href="/careers">
              <a className="text-base tablet:text-xl">Careers</a>
            </Link>
          </li>
          <li className="mb-6 tablet:mb-8">
            <Link href="/faq">
              <a className="text-base tablet:text-xl">FAQ</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
