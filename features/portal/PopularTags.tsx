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
    <Card className="h-full px-4 py-6">
      <p className="text-2xl text-hotpink mb-2">Popular tags</p>
      {props.tags.map((tag: TagProps, index: number) => {
        return (
          <div key={index} className="mb-1.5 desktop:mb-2">
            <Tag {...tag} />
          </div>
        );
      })}
    </Card>
  );
};

export default PopularTags;
