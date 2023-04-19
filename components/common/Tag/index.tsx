import React, { FC } from "react";

interface Props {
  name: string;
  color?: string;
}

const Tag: FC<Props> = (props) => {
  return (
    <span
      className={`h-6 desktop:h-[38px] inline-flex items-center px-3 desktop:px-5 rounded-full ${props.color}`}
    >
      <img
        className="w-3 desktop:w-5 mr-3 desktop:mr-4"
        src="/images/icons/star.svg"
      />
      <span className="text-sm desktop:text-base desktop:font-bold text-white uppercase">
        {props.name}
      </span>
    </span>
  );
};

Tag.defaultProps = {
  color: "bg-[#E7245B]",
};

export default Tag;
