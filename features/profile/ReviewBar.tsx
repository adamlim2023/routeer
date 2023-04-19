import React, { FC } from "react";

interface Props {
  index: number;
  color: string;
  value: number;
  width: string;
}

const ReviewBar: FC<Props> = (props) => {
  return (
    <div className="mb-2 flex items-center justify-start">
      <div
        className={`${props.width} h-[26px] rounded flex items-center ${props.color} mr-2 px-3`}
      >
        <span className="text-base text-white mr-1">{props.index}</span>
        <img src="/images/icons/star.svg" alt="" />
      </div>
      <span className="text-base text-gray">{props.value}</span>
    </div>
  );
};

export default ReviewBar;
