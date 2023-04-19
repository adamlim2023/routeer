import React, { FC, useState } from "react";
import Card from "components/common/Card";

interface Props {
  title: string;
  content: string;
}

const Collapse: FC<Props> = (props) => {
  const [isCollapsed, setIsCollapsed] = useState(true);
  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Card className="w-full">
      <div
        className="flex justify-between items-center p-3 tablet:p-5 desktop:p-[30px] cursor-pointer"
        onClick={handleToggle}
      >
        <span className="w-full pr-6 text-base tablet:text-2xl leading-6 tablet:leading-7 font-bold text-cyanblue">
          {props.title}
        </span>
        <img
          src="/images/icons/arrow_down_hotpink.svg"
          className={`flex-shrink-0 transform transition ${
            !isCollapsed ? `rotate-180` : ``
          }`}
          alt=""
        />
      </div>
      {!isCollapsed && (
        <div className="text-base text-darkgray p-3 pt-0 tablet:p-5 tablet:pt-0 desktop:p-[30px] desktop:pt-0">
          {props.content}
        </div>
      )}
    </Card>
  );
};

export default Collapse;
