import React, { FC } from "react";

interface Props {
  name: string;
  photo: string;
}

const BlogCard: FC<Props> = (props) => {
  return (
    <div className="rounded-[20px] shadow-large relative overflow-hidden mb-5">
      <img src={props.photo} className="w-full" alt="" />
      <p className="tracking-[-1px] w-full absolute bottom-0 left-0 bg-[#00000090] px-5 py-3 tabket:py-4 desktop:px-7 desktop:py-5 text-2xl tablet:text-xl desktop:text-2xl text-white font-bold">
        {props.name}
      </p>
    </div>
  );
};

export default BlogCard;
