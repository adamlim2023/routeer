import React from "react";
import Select, { components } from "react-select";

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <img
        src="/images/icons/arrow_down_hotpink.svg"
        className="w-[18px] mx-1"
      />
    </components.DropdownIndicator>
  );
};

const MultiSelect = (props) => {
  const customStyles = {
    control: () => ({
      display: "flex",
      minHeight: "40px",
      background:
        "linear-gradient(112.06deg, #DEDEDE 0%, rgba(242, 242, 242, 0) 100%), #FAFAFA",
      boxShadow:
        "inset -2px -2px 4px #FFFFFF, inset 2px 2px 4px rgba(0, 0, 0, 0.25)",
      borderRadius: "20px",
    }),
    clearIndicator: () => ({
      display: "none",
    }),
    indicatorContainer: () => ({
      position: "absolute",
      right: 0,
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    valueContainer: (provided) => ({
      ...provided,
      height: "100%",
      padding: "4px 20px",
    }),
    multiValue: (provided) => ({
      ...provided,
      height: 26,
      background: "#E7245B",
      borderRadius: 5,
    }),
    multiValueLabel: (provided) => ({
      ...provided,
      display: "flex",
      alignItems: "center",
      fontSize: "16px",
      fontWeight: 700,
      padding: "0 10px",
      color: "#FFF",
      textTransform: "uppercase",
    }),
    multiValueRemove: (provided) => ({
      ...provided,
      color: "#FFF",
      cursor: "pointer",
      "&:hover": {
        background: "transparent",
        color: "#FFF",
      },
    }),
    menu: () => ({
      width: "100%",
      minWidth: 200,
      position: "absolute",
      transform: "translateY(100%)",
      bottom: "-10px",
      zIndex: 50,
      background: "#F2F2F2",
      boxShadow:
        "-2px -2px 4px rgba(255, 255, 255, 0.9), 2px 2px 4px rgba(0, 0, 0, 0.25)",
      borderRadius: "2px",
      padding: "0 8px",
    }),
    menuList: () => ({
      padding: 0,
    }),
    option: (provided, state) => ({
      ...provided,
      fontSize: "16px",
      color: "#414142",
      backgroundColor: state.isSelected ? "#FFF" : "transparent",
      borderRadius: "2px",
      padding: "3px",
      margin: "8px 0",
      cursor: "default",
      "&:active": {
        background: "#FFF",
      },
      "&:hover": {
        background: "#FFF",
      },
    }),
  };

  return (
    <div className={props.className}>
      {props.label && (
        <div className="mb-3">
          {typeof props.label === "string" ? (
            <p className="text-base font-bold text-darkgray">{props.label}</p>
          ) : (
            props.label
          )}
        </div>
      )}
      <Select
        {...props}
        isMulti
        components={{ DropdownIndicator }}
        styles={customStyles}
      />
    </div>
  );
};

MultiSelect.defaultProps = {
  className: "",
};

export default MultiSelect;
