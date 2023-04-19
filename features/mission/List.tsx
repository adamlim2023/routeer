import React, { FC } from "react";
import Card from "components/common/Card";

interface Props {
  icon: string;
  description: string;
}

const List: FC<Props> = (props) => {
  return (
    <div className="flex mb-5 desktop:mb-[30px]">
      <Card className="w-10 h-10 rounded-full flex-shrink-0 flex justify-center items-center mr-[20px] tablet:mr-[60px] desktop:mr-[53px]">
        <img src={props.icon} />
      </Card>
      <p className="text-base text-darkgray leading-normal">
        {props.description}
      </p>
    </div>
  );
};

export default List;
