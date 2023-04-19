import React from "react";
import Card from "components/common/Card";
import ReviewBar from "./ReviewBar";

const ReviewDistribution = () => {
  const reviews = [
    {
      index: 5,
      width: "w-[175px]",
      value: 105,
      color: "bg-[#13B4C9]",
    },
    {
      index: 4,
      width: "w-[95px]",
      value: 50,
      color: "bg-[#13B4C980]",
    },
    {
      index: 3,
      width: "w-[77px]",
      value: 35,
      color: "bg-[#13B4C960]",
    },
    {
      index: 2,
      width: "w-[53px]",
      value: 8,
      color: "bg-[#13B4C940]",
    },
    {
      index: 1,
      width: "w-[61px]",
      value: 10,
      color: "bg-[#13B4C920]",
    },
  ];

  return (
    <Card className="px-5 tablet:px-6 py-5 desktop:px-8">
      <p className="text-2xl text-hotpink mb-3.5">Review distribution</p>
      <div className="flex flex-row desktop:flex-col items-end tablet:items-start justify-between">
        <div className="desktop:mb-5">
          {reviews.map((review, index) => {
            return <ReviewBar {...review} key={index} />;
          })}
        </div>
        <div>
          <div className="text-base tablet:text-xl text-gray mb-6">
            <p className="mb-2">10 Followers</p>
            <p>30 Following</p>
          </div>
          <span className="text-base text-hotpink font-bold underline">
            Other stats
          </span>
        </div>
      </div>
    </Card>
  );
};

export default ReviewDistribution;
