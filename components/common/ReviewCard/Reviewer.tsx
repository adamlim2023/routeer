import React, { FC } from "react";

interface Props {
  name: string;
  date: string;
  avatar: string;
}

const Reviewer: FC<Props> = (props) => {
  return (
    <div className="flex items-start tablet:items-center">
      <div className="shadow-theme rounded-full w-[25px] h-[25px] tablet:w-[45px] tablet:h-[45px] overflow-hidden mr-2 tablet:mr-5">
        <img src={props.avatar} className="w-full h-full" />
      </div>
      <div>
        <p className="text-xl tablet:text-2xl leading-6 tablet:leading-7 text-gray mb-0 tablet:mb-2">{props.name}</p>
        <p className="text-base leading-tight text-gray">{props.date}</p>
      </div>
    </div>
  );
};

export default Reviewer;
