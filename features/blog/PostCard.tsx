import React, { FC } from "react";
import Card from "components/common/Card";
import Button from "components/common/Button";

interface WriterProps {
  name: string;
  avatar: string;
}

interface Props {
  size?: "large" | "small" | string;
  avatar: string;
  writer: WriterProps;
  title: string;
  content: string;
}

const PostCard: FC<Props> = (props) => {
  return (
    <Card
      className={`flex ${
        props.size === "large" ? `h-full flex-col` : `flex-col tablet:flex-row`
      } overflow-hidden`}
    >
      <img
        src={props.avatar}
        className={`flex-shrink-0 object-cover ${
          props.size === "large"
            ? `w-full max-h-[296px]`
            : `w-full h-[147px] tablet:w-48 tablet:h-auto`
        }`}
      />
      <div className="flex flex-col w-full px-4 py-4 tablet:px-8 desktop:py-5">
        <div
          className={`flex items-center ${
            props.size === "large"
              ? `mb-2 tablet:mb-3 desktop:mb-3.5`
              : `mb-3 tablet:mb-7`
          }`}
        >
          <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#DEDEDE] to-[#F2F2F200] bg-[#FAFAFA] shadow-theme p-0.5">
            <img src={props.writer.avatar} className="w-full h-full" />
          </div>
          <span className="ml-2.5 text-base text-cyanblue font-bold">
            {props.writer.name}
          </span>
        </div>
        <div
          className={`h-full flex justify-between ${
            props.size === "large" ? `flex-col tablet:flex-row` : `flex-col`
          } desktop:items-end`}
        >
          <div>
            <p
              className={`${
                props.size === "large"
                  ? `text-base tablet:text-2xl mb-1`
                  : `text-base`
              } text-darkgray font-bold`}
            >
              {props.title}
            </p>
            {props.size === "large" && (
              <p className="text-sm tablet:text-base text-darkgray">
                {props.content}
              </p>
            )}
          </div>
          <div className="flex-shrink-0 self-end desktop:self-auto">
            <Button
              className={`mt-3 ${
                props.size === "small"
                  ? `tablet:text-sm tablet:h-6 tablet:px-3`
                  : ``
              }`}
              variant="danger-text"
            >
              read more
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

PostCard.defaultProps = {
  size: "small",
};

export default PostCard;
