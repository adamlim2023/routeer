import React, { FC } from "react";
import Card from "components/common/Card";

interface Props {
  avatar: string;
  value: number;
  name: string;
}

const AnalyticsCard: FC<Props> = (props) => {
  return (
    <Card className="h-full px-2 py-3 tablet:px-3 tablet:py-4 desktop:px-4 desktop:py-6 flex flex-col tablet:flex-row items-start tablet:items-center">
      <img src={props.avatar} className="mr-[30px]" alt="" />
      <div className="flex flex-col desktop:flex-row items-start desktop:items-center">
        <span className="w-[84px] text-[40px] font-bold text-gray">
          {props.value}
        </span>
        <span className="text-xl text-gray">{props.name}</span>
      </div>
    </Card>
  );
};

export default AnalyticsCard;
