import React, { FC } from "react";
import Card from "components/common/Card";

interface Props {
  name: string;
  avatar: string;
  className?: string;
}

const TransportProfile: FC<Props> = (props) => {
  return (
    <div className={`flex items-center ${props.className}`}>
      <Card className="w-[18px] h-[18px] tablet:w-[25px] tablet:h-[25px] rounded-full p-0.5 tablet:p-1 flex items-end justify-center mr-2 shadow-theme">
        <img src={props.avatar} className="w-full h-full" alt="" />
      </Card>
      <span className="text-base text-darkgray">{props.name}</span>
    </div>
  );
};

TransportProfile.defaultProps = {
  className: "",
};

export default TransportProfile;
