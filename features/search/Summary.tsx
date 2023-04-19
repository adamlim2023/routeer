import React, { FC } from "react";
import Button from "components/common/Button";
import Checkbox from "components/common/Checkbox";
import ReviewCard from "components/common/ReviewCard";

interface Props {
  handleNext: () => void;
  handleBack: () => void;
}

const Summary: FC<Props> = (props) => {
  const review = {
    name: "Lauratravels",
    date: "20 Aug 2020, 15:35",
    avatar: "/images/reviewer.png",
    mine: false,
    rating: 3,
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    tags: [
      { name: "ONBOARD FOOD & DRINK", color: "bg-[#040A5C]" },
      { name: "SCENIC", color: "bg-[#68933C]" },
      { name: "WOW FACTOR", color: "bg-[#EA4F2C]" },
    ],
    transportProviderInfo: {
      name: "Transport provider name",
      avatar: "/images/transport_provider.png",
      rating: 2,
      reviewCount: 150050,
    },
    journey: {
      from: "Penzance Ferry Terminal, Penzance, UK",
      to: "Sennen Beach, Sennen, Penzance, UK",
      time: "1h 15 min",
      cost: "19.00 GBP",
    },
    score: {
      quality: 3,
      value: 3,
      service: 3,
    },
  };

  return (
    <div>
      <div className="mb-5 tablet:mb-6 desktop:mb-5">
        <ReviewCard {...review} />
      </div>
      <div className="flex items-center mb-5">
        <Checkbox />
        <span className="ml-2.5 text- base text-darkgray">
          I certify this review is honest.....
        </span>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <Button variant="danger-text" onClick={props.handleBack}>
            previous
          </Button>
          <span className="text-sm text-[#BCBCBB] font-bold uppercase mt-2.5">
            Photos
          </span>
        </div>
        <div className="flex flex-col items-end">
          <Button variant="danger" onClick={props.handleNext}>
            publish
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Summary;
