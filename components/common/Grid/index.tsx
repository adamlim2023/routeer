import React, { FC } from "react";

interface RowProps {
  children?: React.ReactNode;
  className?: string;
}

interface ColProps {
  children?: React.ReactNode;
  size?: [string, string, string];
  className?: string;
}

export const Row: FC<RowProps> = (props) => {
  return (
    <div className={`flex flex-wrap ${props.className}`}>{props.children}</div>
  );
};

Row.defaultProps = {
  className: "",
};

export const Col: FC<ColProps> = (props) => {
  const mobile = `w-${props.size[0]}`;
  const tablet = `tablet:w-${props.size[1]}`;
  const desktop = `desktop:w-${props.size[2]}`;

  return (
    <div className={`${mobile} ${tablet} ${desktop} ${props.className}`}>
      {props.children}
    </div>
  );
};

Col.defaultProps = {
  size: ["full", "full", "full"],
  className: "",
};
