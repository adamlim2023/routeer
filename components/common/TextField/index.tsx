import React, { FC } from "react";

interface Props {
  label?: string | React.ReactNode;
  value?: string;
  width?: number;
  type?: string;
  placeholder?: string;
  icon?: React.ReactNode;
  className?: string;
  defaultValue?: string;
  locationRef?: React.RefObject<HTMLInputElement>;
  onChange?: (event: any) => void;
}

const TextField: FC<Props> = (props) => {
  const handleChange = (e) => {
    props.onChange && props.onChange(e);
  };

  return (
    <div>
      {props.label &&
        (typeof props.label === "string" ? (
          <p className="text-base text-darkgray font-bold mb-3">
            {props.label}
          </p>
        ) : (
          <div className="mb-3">{props.label}</div>
        ))}
      <div
        className={`min-h-[40px] rounded-[20px] flex shadow-smallInner bg-gradient-to-r from-[#DEDEDE] to-[#F2F2F200] bg-[#FAFAFA] overflow-hidden ${props.className}`}
      >
        {props.type === "textarea" ? (
          <textarea
            onChange={handleChange}
            placeholder={props.placeholder}
            defaultValue={props.defaultValue}
            className="w-full h-full bg-transparent outline-none text-base text-darkgray placeholder-gray px-5 py-2"
          ></textarea>
        ) : (
          <input
            type={props.type}
            ref={props.locationRef}
            value={props.value}
            onChange={handleChange}
            placeholder={props.placeholder}
            defaultValue={props.defaultValue}
            className={`w-full bg-transparent outline-none min-h-full pl-5 text-base text-darkgray placeholder-gray ${
              props.icon ? `` : "pr-5"
            }`}
          />
        )}
        {props.icon && (
          <div className="w-10 min-h-full flex-shrink-0 flex justify-center items-center">
            {props.icon}
          </div>
        )}
      </div>
    </div>
  );
};

TextField.defaultProps = {
  type: "text",
};

export default TextField;
