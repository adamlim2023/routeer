import React, { useState } from "react";
import Link from "next/link";
import Modal from "components/common/Modal";
import NewsLetterModal from "features/auth/NewsLetterModal";

const Footer = () => {
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  return (
    <>
      <div className="bg-[#252525]">
        <div className="max-w-[1440px] mx-auto px-4 tablet:px-16 relative">
          <div className="w-full h-full absolute top-0 left-0">
            <img
              src="/images/footer.png"
              className="w-full h-full object-none"
              alt=""
            />
          </div>
          <div className="w-full top-0 left-0 relative z-10">
            <div className="flex flex-col tablet:flex-row justify-between items-start py-10 pt-7 tablet:py-12 desktop:pt-[92px] desktop:pb-[67px] border-b border-light">
              <img
                src="/images/logo_footer.svg"
                className="mb-9 tablet:mb-0 w-[90px] desktop:w-[125px]"
              />
              <div className="mb-6 tablet:mb-0">
                <p className="text-cyanblue uppercase text-xs font-bold mb-2 tablet:mb-3">
                  Company
                </p>
                <ul>
                  <li className="text-base text-white">
                    <Link href="/about">About Us</Link>
                  </li>
                  <li className="text-base text-white">
                    <Link href="/mission">Our Mission</Link>
                  </li>
                  <li className="text-base text-white">
                    <Link href="/support">Who we support</Link>
                  </li>
                  <li className="text-base text-white">
                    <Link href="/careers">Careers</Link>
                  </li>
                  <li className="text-base text-white">
                    <Link href="/faq">FAQ</Link>
                  </li>
                </ul>
              </div>
              <div className="mb-9 tablet:mb-0">
                <p className="text-cyanblue uppercase text-xs font-bold mb-2 tablet:mb-3">
                  Contact us
                </p>
                <ul>
                  <li className="text-base text-white">hello@routeer.com</li>
                  <li className="text-base text-white">
                    London, United Kingdom
                  </li>
                </ul>
              </div>
              <div>
                <ul className="flex mb-9">
                  <li className="mr-9 tablet:mr-10">
                    <img
                      src="/images/icons/facebook.svg"
                      className="w-6 desktop:w-[26px]"
                      alt=""
                    />
                  </li>
                  <li className="mr-9 tablet:mr-10">
                    <img
                      src="/images/icons/instagram.svg"
                      className="w-6 desktop:w-[26px]"
                      alt=""
                    />
                  </li>
                  <li>
                    <img
                      src="/images/icons/twitter.svg"
                      className="w-6 desktop:w-[26px]"
                      alt=""
                    />
                  </li>
                </ul>
                <div
                  className="flex items-center cursor-pointer"
                  onClick={() => setIsShowModal(true)}
                >
                  <img src="/images/icons/email.svg" className="mr-3" alt="" />
                  <span className="text-cyanblue text-xs font-bold uppercase">
                    sign up for emails
                  </span>
                </div>
              </div>
            </div>
            <div className="flex flex-col tablet:flex-row justify-between items-center pt-6 pb-8 tablet:pt-[33px] tablet:pb-[43px]">
              <ul className="flex items-center mb-5 tablet:mb-0">
                <li className="mr-[60px] text-xxs tablet:text-sm text-white underline">
                  <Link href="/terms">Terms & Conditions</Link>
                </li>
                <li className="text-xxs tablet:text-sm text-white underline">
                  <Link href="/privacy">Privacy Policy</Link>
                </li>
              </ul>
              <span className="text-xxs tablet:text-sm text-white">
                Copyright 2020 by Routeer. All rights reserved.
              </span>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isShow={isShowModal}
        hasCloseButton={false}
        maxWidth="max-w-[314px] tablet:max-w-[622px]"
      >
        <NewsLetterModal handleClose={() => setIsShowModal(false)} />
      </Modal>
    </>
  );
};

export default Footer;
