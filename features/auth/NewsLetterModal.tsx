import React, { FC } from "react";
import Button from "components/common/Button";
import TextField from "components/common/TextField";
import Checkbox from "components/common/Checkbox";

interface Props {
  handleClose: () => void;
}

const NewsLetterModal: FC<Props> = (props) => {
  return (
    <div className="rounded-[20px] shadow-large overflow-hidden bg-gradient-to-r from-[#DEDEDE] to-[#F2F2F200] bg-[#FAFAFA]">
      <div className="w-full relative px-6 pt-[60px] pb-6">
        <button
          className="w-9 h-9 rounded-full bg-cyanblue shadow-theme flex justify-center items-center absolute top-6 right-5 tablet:right-6"
          onClick={props.handleClose}
        >
          <img src="/images/icons/close.svg" alt="" />
        </button>
        <div className="w-full flex flex-col items-center">
          <p className="text-base text-hotpink font-bold mb-2 uppercase">
            stay updated
          </p>
          <p className="text-2xl tablet:text-[40px] text-darkgray font-bold mb-4 text-center px-0 tablet:px-16 leading-7 tablet:leading-10">
            Be the first to receive important travel updates and discounts
          </p>
          <div className="w-full">
            <p className="text-base text-darkgray mb-2">
              Which one best describes you? *
            </p>
            <div className="flex flex-col tablet:flex-row tablet:items-center mb-4">
              <div className="flex items-center mr-10 mb-1 tablet:mb-0">
                <Checkbox />
                <span className="text-base text-cyanblue font-bold uppercase ml-4">
                  Traveller
                </span>
              </div>
              <div className="flex items-center mr-10 mb-1 tablet:mb-0">
                <Checkbox />
                <span className="text-base text-cyanblue font-bold uppercase ml-4">
                  Transport provider
                </span>
              </div>
            </div>
            <p className="text-base text-darkgray mb-2 pl-5">Email Address*</p>
            <div className="flex">
              <div className="mr-5">
                <TextField placeholder="Input field text" />
              </div>
              <Button variant="danger">subscribe</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLetterModal;
