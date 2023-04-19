import React, { FC } from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
  variant?:
    | "primary"
    | "success"
    | "success-text"
    | "danger"
    | "danger-text"
    | "light";
  onClick?: () => void;
}

const Button: FC<Props> = (props) => {
  const buttonColorStyles = {
    success: "bg-cyanblue text-white hover:bg-[#1094A5] active:bg-[#0B5761]",
    "success-text":
      "bg-gradient-to-r from-[#DEDEDE] to-[#F2F2F200] bg-light text-cyanblue hover:text-hotpink active:text-hotpink active:shadow-smallInner",
    danger: "bg-hotpink text-white hover:bg-[#C51A4A] active:bg-[#7D102F]",
    "danger-text":
      "bg-gradient-to-r from-[#DEDEDE] to-[#F2F2F200] bg-light text-hotpink hover:text-cyanblue active:text-cyanblue active:shadow-smallInner",
    light: "bg-gradient-to-r from-[#DEDEDE] to-[#F2F2F200] bg-light",
  };

  const commonClasses = props.variant
    ? "h-[38px] rounded-full uppercase text-base font-bold px-5 shadow-theme leading-none transition "
    : "";

  return (
    <button
      className={`flex justify-center items-center outline-none 
      ${commonClasses} ${props.className}
      ${props.variant ? buttonColorStyles[props.variant] : ``}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
