import React, { FC } from "react";
import Button from "components/common/Button";

interface Props {
  avatar: string;
  name: string;
  username: string;
}

const UserCard: FC<Props> = (props) => {
  return (
    <div className="flex flex-col items-center desktop:py-[30px] desktop:rounded-[20px] desktop:shadow-large desktop:bg-gradient-to-r desktop:from-[#DEDEDE] desktop:to-[#F2F2F200] desktop:bg-[#FAFAFA]">
      <img
        src={props.avatar}
        className="mb-2.5 rounded-full shadow-theme"
        alt=""
      />
      <p className="text-2xl font-bold text-gray mb-2.5">{props.name}</p>
      <p className="text-xl text-gray">@{props.username}</p>
      <Button variant="danger" className="mt-5 desktop:hidden">
        follow
      </Button>
    </div>
  );
};

export default UserCard;
