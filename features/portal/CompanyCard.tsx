import React, { FC } from "react";
import Card from "components/common/Card";

interface Props {
  avatar: string;
  name: string;
  verified: boolean;
}

const CompanyCard: FC<Props> = (props) => {
  return (
    <div className="flex flex-col items-center desktop:p-[30px] desktop:bg-gradient-to-r desktop:from-[#DEDEDE] desktop:to-[#F2F2F200] desktop:bg-[#FAFAFA] desktop:shadow-large desktop:rounded-[20px]">
      <div className="w-28 h-28 rounded-full bg-gradient-to-r from-[#DEDEDE] to-[#F2F2F200] bg-[#FAFAFA] shadow-theme p-2.5 flex items-end justify-center mb-2">
        <img src={props.avatar} className="h-20" alt="" />
      </div>
      <p className="text-2xl font-bold text-gray mb-3">{props.name}</p>
      {props.verified && (
        <div className="flex items-center">
          <img src="/images/icons/verified.svg" alt="" />
          <span className="ml-1 text-base text-gray">Verified account</span>
        </div>
      )}
    </div>
  );
};

export default CompanyCard;
