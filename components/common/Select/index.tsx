import React from "react";
import { default as SelectBox, components } from "react-select";

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <img src="/images/icons/select_arrow.svg" />
    </components.DropdownIndicator>
  );
};

const Select = (props) => {
  const customStyles = {
    container: () => ({
      minWidth: "150px",
      position: "relative",
    }),
    singleValue: () => ({
      fontSize: "20px",
      fontWeight: 700,
      color: "#414142",
      cursor: "default",
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: 0,
    }),
    control: () => ({
      display: "flex",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
    menu: () => ({
      minWidth: "190px",
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
      "&:hover": {
        background: "#FFF",
      },
      "&:active": {
        background: "#FFF",
      },
    }),
    placeholder: (provided, state) => ({
      ...provided,
      fontSize: "20px",
      fontWeight: 700,
      cursor: "pointer",
      color: state.isFocused ? "#E7245B" : "#414142",
    }),
  };

  return (
    <SelectBox
      {...props}
      styles={customStyles}
      components={{ DropdownIndicator }}
    />
  );
};

Select.defaultProps = {
  isSearchable: false,
  placeholder: "",
};

export default Select;
