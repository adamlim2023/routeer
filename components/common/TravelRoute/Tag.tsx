import React, { FC, useState } from "react";

interface Props {
  isChecked: boolean;
  tooltip: string;
  icon: string;
}

const Tag: FC<Props> = (props) => {
  const [isChecked, setIsChecked] = useState(props.isChecked);
  const [isShowTooltip, setIsShowTooltip] = useState(false);
  const handleClick = () => {
    setIsChecked(!isChecked);
  };

  const handleToggleTooltip = (flag) => {
    setIsShowTooltip(flag);
  };

  return (
    <div className="relative">
      <div
        className={`w-[90px] h-[34px] bg-light rounded-full flex items-center justify-center cursor-pointer border
        ${isChecked ? `border-hotpink shadow-theme` : `border-gray`}`}
        onClick={handleClick}
        onMouseOver={() => handleToggleTooltip(true)}
        onMouseOut={() => handleToggleTooltip(false)}
      >
        <div className="mr-4">
          <img
            src={props.icon}
            className={`${!isChecked ? `filter brightness-0 opacity-80` : ``}`}
            alt=""
          />
        </div>
        <div className="w-4 h-4">
          {isChecked ? (
            <img src="/images/icons/checkbox_checked.svg" />
          ) : (
            <img src="/images/icons/checkbox_unchecked.svg" />
          )}
        </div>
      </div>
      {isShowTooltip && (
        <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 translate-y-full z-10">
          <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-full w-[11px] overflow-hidden inline-block">
            <div className="h-2 w-2 bg-light rotate-45 transform origin-bottom-left"></div>
          </div>
          <div className=" bg-light rounded-[5px] p-[5px] text-sm text-darkgray shadow-theme">
            {props.tooltip}
          </div>
        </div>
      )}
    </div>
  );
};

export default Tag;
