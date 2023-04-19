import React, { FC } from "react";

interface Props {
  value: boolean;
}

const Covid: FC<Props> = (props) => {
  return (
    <div className="flex items-center">
      {props.value ? (
        <img src="/images/icons/covid_true.svg" alt="" />
      ) : (
        <img src="/images/icons/covid_false.svg" alt="" />
      )}
      <span
        className={`ml-2 text-base ${
          props.value ? `text-hotpink` : `text-gray`
        }`}
      >
        COVID Measures
      </span>
    </div>
  );
};

export default Covid;
