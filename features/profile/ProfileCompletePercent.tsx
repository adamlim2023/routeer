import React, { FC } from "react";
import { PieChart } from "react-minimal-pie-chart";

interface Props {
  percent: number;
}

const ProfileCompletePercent: FC<Props> = (props) => {
  return (
    <div className="flex items-center justify-center bg-[#F17C9D] rounded-[20px] p-5 shadow-large">
      <div className="w-[87px] h-[87px] bg-light rounded-full relative shadow-large">
        <PieChart
          totalValue={100}
          data={[{ title: "One", value: props.percent, color: "#13B4C9" }]}
          startAngle={-90}
          lineWidth={14}
          background="#13B4C940"
          rounded
        />
        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-hotpink">
          {props.percent}%
        </span>
      </div>
      <span className="ml-4 text-base text-white font-bold underline">
        Complete your profile
      </span>
    </div>
  );
};

export default ProfileCompletePercent;
