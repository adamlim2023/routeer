import React, { FC } from "react";
import Button from "components/common/Button";
import Card from "components/common/Card";
import Rating from "components/common/Rating";

interface Props {
  handleNext: () => void;
  handleBack: () => void;
}

const Score: FC<Props> = (props) => {
  return (
    <Card className="py-8 px-4 pb-4 tablet:p-8 tablet:pb-6">
      <p className="text-2xl font-bold text-hotpink mb-[5px] tablet:mb-2.5">
        Your score*
      </p>
      <p className="text-base tablet:text-xl text-darkgray mb-[15px] tablet:mb-[52px]">
        Give a score from 1 to 5 stars
      </p>
      <div className="mb-0 tablet:mb-[60px]">
        <div className="flex flex-col tablet:flex-row items-start tablet:items-center mb-10 tablet:mb-[30px]">
          <div className="relative min-w-[185px] flex items-center mb-3.5 tablet:mb-0">
            <img
              src="/images/icons/star_hotpink.svg"
              className="w-5 mr-3 absolute left-0"
              alt=""
            />
            <span className="ml-8 text-2xl text-gray">Quality</span>
          </div>
          <div className="-mx-1.5 tablet:mx-0">
            <Rating
              rating={0}
              active={
                <img
                  src="/images/icons/star_cyanblue.svg"
                  className="w-11 tablet:w-[50px] mx-1.5 tablet:mx-2"
                />
              }
              inactive={
                <img
                  src="/images/icons/star_cyanblue_outline.svg"
                  className="w-11 tablet:w-[50px] mx-1.5 tablet:mx-2"
                />
              }
              action={true}
            />
          </div>
        </div>
        <div className="flex flex-col tablet:flex-row items-start tablet:items-center mb-10 tablet:mb-[30px]">
          <div className="relative min-w-[185px] flex items-center mb-3.5 tablet:mb-0">
            <img
              src="/images/icons/heart.svg"
              className="w-5 mr-3 absolute left-0"
              alt=""
            />
            <span className="ml-8 text-2xl text-gray">Value</span>
          </div>
          <div className="-mx-1.5 tablet:mx-0">
            <Rating
              rating={0}
              active={
                <img
                  src="/images/icons/star_cyanblue.svg"
                  className="w-11 tablet:w-[50px] mx-1.5 tablet:mx-2"
                />
              }
              inactive={
                <img
                  src="/images/icons/star_cyanblue_outline.svg"
                  className="w-11 tablet:w-[50px] mx-1.5 tablet:mx-2"
                />
              }
              action={true}
            />
          </div>
        </div>
        <div className="flex flex-col tablet:flex-row items-start tablet:items-center mb-10 tablet:mb-[30px]">
          <div className="relative min-w-[185px] flex items-center mb-3.5 tablet:mb-0">
            <img
              src="/images/icons/service.svg"
              className="w-5 mr-3 absolute left-0"
              alt=""
            />
            <span className="ml-8 text-2xl text-gray">Service</span>
          </div>
          <div className="-mx-1.5 tablet:mx-0">
            <Rating
              rating={0}
              active={
                <img
                  src="/images/icons/star_cyanblue.svg"
                  className="w-11 tablet:w-[50px] mx-1.5 tablet:mx-2"
                />
              }
              inactive={
                <img
                  src="/images/icons/star_cyanblue_outline.svg"
                  className="w-11 tablet:w-[50px] mx-1.5 tablet:mx-2"
                />
              }
              action={true}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-between">
        <Button variant="danger-text" onClick={props.handleBack}>
          previous
        </Button>
        <div className="flex flex-col items-end">
          <Button variant="danger" onClick={props.handleNext}>
            next
          </Button>
          <span className="text-sm text-[#BCBCBB] font-bold uppercase mt-2.5">
            characteristics
          </span>
        </div>
      </div>
    </Card>
  );
};

export default Score;
