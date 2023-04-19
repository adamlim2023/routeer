import React, { FC } from "react";
import Rating from "../Rating";

interface Props {
  name: string;
  avatar: string;
  rating: number;
  reviewCount: number;
}

const TransportProvider: FC<Props> = (props) => {
  return (
    <div className="flex flex-col tablet:flex-row tablet:items-center justify-between py-2 px-4 border border-cyanblue rounded-lg ">
      <div className="flex items-center mb-1.5 tablet:mb-0">
        <img src="/images/transport_provider.png" className="mr-1.5" alt="" />
        <span className="text-sm tablet:text-base text-darkgray">
          {props.name}
        </span>
      </div>
      <div className="flex items-center">
        <Rating
          rating={props.rating}
          active={
            <img src="/images/icons/star_cyanblue.svg" className="w-4 mx-0.5" />
          }
          inactive={
            <img
              src="/images/icons/star_cyanblue_outline.svg"
              className="w-4 mx-0.5"
            />
          }
        />
        <span className="text-xs font-bold text-darkgray uppercase flex-shrink-0 ml-1">
          {props.reviewCount} reviews
        </span>
      </div>
    </div>
  );
};

export default TransportProvider;
