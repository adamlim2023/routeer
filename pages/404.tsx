import React from "react";
import MainLayout from "components/layout/MainLayuout";
import Button from "components/common/Button";
import Link from "next/link";

const Custom404 = () => {
  return (
    <MainLayout>
      <div className="relative">
        <img
          src="/images/404/bg.png"
          className="w-full h-[800px] tablet:h-[900px] object-cover"
          alt=""
        />
        <div className="w-full flex-shrink-0 absolute top-[140px] left-1/2 transform -translate-x-1/2 flex flex-col items-center px-5">
          <p className="text-2xl text-hotpink font-bold mb-2.5 text-center">
            Opps, looks like you’re lost
          </p>
          <img
            src="/images/404/logo.svg"
            className="w-60 tablet:w-auto max-w-full mb-2.5"
            alt=""
          />
          <p className="text-xs text-darkgray font-bold uppercase mb-8">
            Page not found
          </p>
          <Button variant="danger-text" className="mb-14">
            <Link href="/">go back to homepage</Link>
          </Button>
          <img src="/images/404/frame.png" alt="" />
        </div>
      </div>
    </MainLayout>
  );
};

export default Custom404;
