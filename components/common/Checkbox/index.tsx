import React, { FC, useState } from "react";

interface Props {
  checked?: boolean;
  label?: string;
}

const Checkbox: FC<Props> = (props) => {
  const [isChecked, setIsChecked] = useState(props.checked);

  const checkboxClassName = isChecked
    ? "overflow-hidden"
    : "border border-hotpink";
  return (
    <div className="flex items-center">
      <div
        className={`w-[22px] h-5 rounded-[5px] cursor-pointer shadow-theme mr-2.5 ${checkboxClassName}`}
        onClick={() => setIsChecked(!isChecked)}
      >
        {isChecked && (
          <div className="w-full h-full flex justify-center items-center shadow-smallInner">
            <img src="/images/icons/checkbox.svg" alt="" />
          </div>
        )}
      </div>
      {props.label && (
        <span className="text-base text-darkgray">{props.label}</span>
      )}
    </div>
  );
};

Checkbox.defaultProps = {
  checked: false,
};

export default Checkbox;
