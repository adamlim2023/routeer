import React, { FC } from "react";
import Card from "components/common/Card";
import Rating from "components/common/Rating";

interface JourneyProps {
  from: string;
  to: string;
}

interface TransportProviderProps {
  avatar: string;
  name: string;
}

interface Props {
  journey: JourneyProps;
  transportProvider: TransportProviderProps;
  type: string;
  rating: number;
  reviewCount: number;
  price: string;
  time: string;
}

const RouteCard: FC<Props> = (props) => {
  return (
    <Card className="h-full px-4 py-3 tablet:py-[30px] desktop:px-[30px]">
      <div className="flex items-start mb-3 tablet:mb-7">
        <div className="mr-1">
          <img
            src="/images/icons/journey_long.svg"
            className="hidden tablet:flex"
            alt=""
          />
          <img
            src="/images/icons/journey.svg"
            className="flex tablet:hidden"
            alt=""
          />
        </div>
        <div className="text-base tablet:text-xl text-gray leading-6 -mt-1">
          <p className="mb-1 tablet:mb-2 desktop:mb-4">{props.journey.from}</p>
          <p>{props.journey.to}</p>
        </div>
      </div>
      <div className="flex items-center mb-3 tablet:mb-[38px] desktop:mb-[58px]">
        <div className="w-[25px] h-[25px] rounded-full shadow-theme bg-gradient-to-r from-[#DEDEDE] to-[#F2F2F200] bg-[#FAFAFA] flex justify-center items-center">
          <img src={props.transportProvider.avatar} alt="" />
        </div>
        <span className="ml-1.5 text-base text-darkgray">
          {props.transportProvider.name}
        </span>
      </div>
      <div className="flex mb-4 tablet:mb-12">
        <div className="w-1/2 flex flex-col justify-between">
          <div>
            <img src={props.type} alt="" />
          </div>
          <div>
            <p className="font-bold text-xl text-gray">{props.price}</p>
            <p className="max-w-[110px] text-xs text-gray">
              Based on provider’s submission
            </p>
          </div>
        </div>
        <div className="w-1/2">
          <div className="mb-4 tablet:mb-6">
            <Rating rating={props.rating} />
            <p className="text-xl tablet:text-2xl text-gray font-bold">
              {props.reviewCount} Reviews
            </p>
          </div>

          <div>
            <p className="font-bold text-xl text-gray">{props.time}</p>
            <p className="max-w-[110px] text-xs text-gray">
              Based on provider’s submission
            </p>
          </div>
        </div>
      </div>
      <div className="flex items-center">
        <img src="/images/icons/covid_true.svg" alt="" />
        <span className="ml-3 text-base text-hotpink">COVID Measures</span>
      </div>
    </Card>
  );
};

export default RouteCard;
