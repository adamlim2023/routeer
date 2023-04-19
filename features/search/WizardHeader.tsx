import React, { FC } from "react";

interface Props {
  header: string[];
  index?: number;
}

const WizardHeader: FC<Props> = (props) => {
  return (
    <div className="flex flex-row desktop:flex-col items-center justify-between py-2 px-3 tablet:px-[60px] desktop:py-10 desktop:px-3 desktop:pb-5">
      {props.header.map((item, index) => {
        return (
          <div
            key={index}
            className={`flex flex-row desktop:flex-col items-center mb-0 mx-1 tablet:mx-2 desktop:mx-0 ${
              props.index === index
                ? `flex-1 desktop:flex-auto desktop:mb-10`
                : `desktop:mb-5`
            }`}
          >
            <div
              className={`w-7 h-7 tablet:w-8 tablet:h-8 desktop:w-10 desktop:h-10 rounded-full flex justify-center items-center ${
                props.index === index ? `border border-hotpink` : `bg-cyanblue`
              } ${props.index > index ? `bg-lighthotpink` : ``}`}
            >
              {props.index > index ? (
                <img
                  src="/images/icons/check.svg"
                  className="w-3.5 desktop:w-[18px]"
                  alt=""
                />
              ) : (
                <span
                  className={`text-base desktop:text-2xl font-bold ${
                    props.index === index ? `text-hotpink` : `text-white`
                  }`}
                >
                  {index + 1}
                </span>
              )}
            </div>
            {props.index === index && (
              <p className="text-base tablet:text-xl text-hotpink desktop:mt-4 leading-6 ml-2.5 desktop:ml-0">
                {item}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
};

WizardHeader.defaultProps = {
  index: 0,
};

export default WizardHeader;
