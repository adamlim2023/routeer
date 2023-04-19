import React, { FC } from "react";

interface Props {
  variant?:
    | "light"
    | "cyanblue"
    | "hotpink"
    | "light-cyanblue"
    | "light-hotpink"
    | string;
  children: React.ReactNode;
  className?: string;
}

const Card: FC<Props> = (props) => {
  const colorStyles = {
    light: "bg-gradient-to-r from-[#DEDEDE] to-[#F2F2F200] bg-[#FAFAFA]",
    cyanblue: "bg-cyanblue",
    "light-cyanblue": "bg-lightcyanblue",
    hotpink: "bg-hotpink",
    "light-hotpink": "bg-lighthotpink",
  };

  return (
    <div
      className={`shadow-large rounded-[20px] ${props.className}
      ${colorStyles[props.variant]}`}
    >
      {props.children}
    </div>
  );
};

Card.defaultProps = {
  variant: "light",
  className: "",
};

export default Card;
