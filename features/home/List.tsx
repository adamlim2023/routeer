import React, { FC } from "react";
import Button from "components/common/Button";

interface ItemProps {
  name: string;
  description: string;
  icon: string;
}

interface CallbackProps {
  name: string;
  handleClick: () => void;
}

interface Props {
  title: string;
  items: ItemProps[];
  callback: CallbackProps;
}

const List: FC<Props> = (props) => {
  return (
    <div className="mb-10">
      <p className="text-center tablet:text-left text-[40px] leading-none font-bold text-hotpink mb-6 tablet:mb-[52px]">
        {props.title}
      </p>
      <ul className="ml-0 tablet:ml-[50px]">
        {props.items.map((item, index) => {
          return (
            <li
              key={index}
              className="flex flex-col items-center tablet:items-start tablet:flex-row items-start mb-[27px] tablet:mb-[30px]"
            >
              <Button className="w-20 tablet:w-10 h-20 tablet:h-10 rounded-full flex-shrink-0 bg-gradient-to-r from-[#DEDEDE] to-[#F2F2F200] bg-[#FAFAFA] shadow-theme mr-0 tablet:mr-6 mt-1 mb-2.5">
                <img src={item.icon} className="w-10 tablet:w-5" alt="" />
              </Button>
              <div className="text-darkgray">
                <p className="text-xl tablet:text-2xl font-bold mb-2.5 text-center tablet:text-left">
                  {item.name}
                </p>
                <p className="text-base leading-snug">{item.description}</p>
              </div>
            </li>
          );
        })}
      </ul>
      <Button
        onClick={props.callback.handleClick}
        variant="danger"
        className="mx-auto"
      >
        {props.callback.name}
      </Button>
    </div>
  );
};

export default List;
