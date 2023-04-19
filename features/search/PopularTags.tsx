import React, { FC } from "react";
import Card from "components/common/Card";
import Tag from "components/common/Tag";

interface TagProps {
  name: string;
  color: string;
}

interface Props {
  tags: TagProps[];
}

const PopularTags: FC<Props> = (props) => {
  return (
    <Card className="px-7 desktop:px-9 pt-5 pb-3 mb-5 tablet:mb-[15px] desktop:mb-[30px]">
      <p className="text-2xl text-hotpink mb-3.5 desktop:mb-[30px]">
        Popular tags
      </p>
      {props.tags.map((tag: TagProps, index:number) => {
        return (
          <div key={index} className="mb-1.5 desktop:mb-5">
            <Tag {...tag} />
          </div>
        );
      })}
    </Card>
  );
};

export default PopularTags;
