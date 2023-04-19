import React from "react";

interface Props {
  label?: string | React.ReactNode;
  defaultHourValue?: number;
  defaultMinuteValue?: number;
}

const TimeField = (props) => {
  return (
    <div>
      {props.label && (
        <div className="mb-3">
          {typeof props.label === "string" ? (
            <p className="text-base font-bold text-darkgray">{props.label}</p>
          ) : (
            <>{props.label}</>
          )}
        </div>
      )}
      <div
        className={`flex h-10 rounded-[20px] shadow-smallInner bg-gradient-to-r from-[#DEDEDE] to-[#F2F2F200] bg-[#FAFAFA] overflow-hidden px-5 ${props.className}`}
      >
        <div className="w-full h-full flex items-center">
          <input
            type="text"
            defaultValue={props.defaultHourValue}
            className="w-12 h-full outline-none bg-transparent mr-2 text-base font-bold text-darkgray"
          />
          <span className="text-xs font-bold text-cyanblue uppercase">
            Hours
          </span>
        </div>
        <div className="w-full h-full flex items-center">
          <input
            type="text"
            defaultValue={props.defaultMinuteValue}
            className="w-12 h-full outline-none bg-transparent mr-2 text-base font-bold text-darkgray"
          />
          <span className="text-xs font-bold text-cyanblue uppercase">
            Minutes
          </span>
        </div>
      </div>
    </div>
  );
};

export default TimeField;
