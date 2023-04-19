import React, { FC } from "react";
import Link from "next/link";
import Card from "components/common/Card";
import Rating from "components/common/Rating";
import Covid from "./Covid";
import TransportProfile from "./TransportProfile";

interface Props {
  size?: "sm" | "lg";
  journey: {
    from: string;
    to: string;
  };
  type: string;
  price: string;
  time: string;
  rate: number;
  reviewCount: number;
  transportInfo: {
    avatar: string;
    name: string;
    covid: boolean;
  };
}

const RouteCard: FC<Props> = (props) => {
  return (
    <Link href="/search/route/detail">
      <div>
        <Card className="p-4 tablet:px-2.5 desktop:px-8 transition duration-300 cursor-pointer hover:shadow-cyanBlue relative hover:top-[-5px]">
          {props.size === "lg" ? (
            <div className="flex items-center mb-3 tablet:mb-4">
              <img
                src="/images/icons/journey.svg"
                className="mr-1 flex-shrink-0"
                alt=""
              />
              <div className="text-sm tablet:text-base text-gray">
                <p className="mb-1">{props.journey.from}</p>
                <p>{props.journey.to}</p>
              </div>
            </div>
          ) : (
            <TransportProfile
              name={props.transportInfo.name}
              avatar={props.transportInfo.avatar}
              className="mb-5"
            />
          )}
          {props.size === "lg" ? (
            <div className="flex mb-3 tablet:mb-4">
              <div className="flex flex-col items-center tablet:items-start tablet:flex-row w-1/2">
                <div className="w-full tablet:w-1/2 max-w-[112px] tablet:max-w-full pl-0 tablet:pl-8 mb-2.5 tablet:mb-0">
                  <img src={props.type} alt="" />
                </div>
                <div className="w-full tablet:w-1/2 max-w-[112px] text-gray">
                  <p className="text-base tablet:text-xl font-bold">
                    {props.price}
                  </p>
                  <p className="text-xxs tablet:text-xs">
                    Based on provider’s submission
                  </p>
                </div>
              </div>
              <div className="flex flex-col-reverse tablet:flex-row items-center talbet:items-start tablet:justify-between w-1/2">
                <div className="max-w-[90px] tablet:max-w-[112px] text-gray">
                  <p className="text-base tablet:text-xl font-bold">
                    {props.time}
                  </p>
                  <p className="text-xxs tablet:text-xs">
                    Based on provider’s submission
                  </p>
                </div>
                <div className="flex flex-col items-center mb-2.5 tablet:mb-0">
                  <div className="mb-1">
                    <Rating rating={3} />
                  </div>
                  <p className="text-base tablet:text-2xl font-bold text-gray">
                    {props.reviewCount} Reviews
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex justify-between mb-5">
              <div>
                <img src={props.type} alt="" />
              </div>
              <div className="flex text-gray">
                <div className="max-w-[96px]">
                  <p className="text-base font-bold">{props.price}</p>
                  <p className="text-xxs">Based on provider’s submission</p>
                </div>
                <div>
                  <p className="text-base font-bold">{props.time}</p>
                </div>
              </div>
            </div>
          )}
          <div className="flex flex-col tablet:flex-row items-start tablet:items-center justify-between">
            {props.size === "lg" && (
              <TransportProfile
                className="mb-3 tablet:mb-0"
                name={props.transportInfo.name}
                avatar={props.transportInfo.avatar}
              />
            )}
            <Covid value={props.transportInfo.covid} />
            {props.size === "sm" && (
              <Rating
                rating={3}
                active={
                  <img
                    src="/images/icons/star_cyanblue.svg"
                    className="w-4 h-4 mx-1"
                  />
                }
                inactive={
                  <img
                    src="/images/icons/star_cyanblue_outline.svg"
                    className="w-4 h-4 mx-1"
                  />
                }
              />
            )}
          </div>
        </Card>
      </div>
    </Link>
  );
};

RouteCard.defaultProps = {
  size: "lg",
};

export default RouteCard;
