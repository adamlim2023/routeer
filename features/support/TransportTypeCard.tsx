import React, { FC } from "react";

interface Props {
  name: string;
  icons: string[];
  theme: string;
}

const TransportTypeCard: FC<Props> = (props) => {
  const colorStyles = {
    cyanblue: "bg-cyanblue",
    hotpink: "bg-hotpink",
  };

  return (
    <div className="h-full shadow-large overflow-hidden bg-gradient-to-r from-[#DEDEDE] to-[#F2F2F200] bg-[#FAFAFA] rounded-[20px]">
      <div className="h-[100px] flex justify-center items-center pt-6 p-[18px] desktop:p-5 text-2xl text-gray text-center">
        {props.name}
      </div>
      <div
        className={`h-20 flex items-center justify-center p-6 ${
          colorStyles[props.theme]
        }`}
      >
        {props.icons.map((icon, index) => {
          return (
            <img
              src={icon}
              key={index}
              className="mx-3 desktop:mx-4 filter brightness-0 invert"
            />
          );
        })}
      </div>
    </div>
  );
};

export default TransportTypeCard;
