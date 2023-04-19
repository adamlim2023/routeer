import React, { FC, useState } from "react";

interface Props {
  rating: number;
  maxLength?: number;
  active?: React.ReactNode;
  inactive?: React.ReactNode;
  action?: boolean;
}

const Rating: FC<Props> = (props) => {
  const [rating, setRating] = useState(props.rating);
  const handleRating = (value) => {
    if (props.action) {
      setRating(value);
    }
  };

  return (
    <div className="flex items-center">
      {Array.from(Array(rating).keys()).map((index) => {
        return (
          <span onClick={() => handleRating(index + 1)} key={index}>
            {props.active}
          </span>
        );
      })}
      {Array.from(Array(props.maxLength - rating).keys()).map((index) => {
        return (
          <span onClick={() => handleRating(rating + index + 1)} key={index}>
            {props.inactive}
          </span>
        );
      })}
    </div>
  );
};

Rating.defaultProps = {
  maxLength: 5,
  active: (
    <img
      src="/images/icons/star_cyanblue.svg"
      className="w-4 h-4 mx-1 tablet:w-6 tablet:h-6"
    />
  ),
  inactive: (
    <img
      src="/images/icons/star_cyanblue_outline.svg"
      className="w-4 h-4 mx-1 tablet:w-6 tablet:h-6"
    />
  ),
  action: false,
};

export default Rating;
