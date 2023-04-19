import React, { FC } from "react";
import Button from "components/common/Button";
import Card from "components/common/Card";
import TextField from "components/common/TextField";

interface Props {
  handleNext: () => void;
  handleBack: () => void;
}

const Review: FC<Props> = (props) => {
  return (
    <Card className="py-8 px-4 pb-4 tablet:p-8 tablet:pb-6">
      <p className="text-2xl font-bold text-hotpink mb-[5px] tablet:mb-2.5">
        Your Review*
      </p>
      <p className="text-base tablet:text-xl text-darkgray mb-8">
        Write a review about your journey here
      </p>
      <div className="mb-10 tablet:mb-[60px]">
        <TextField
          type="textarea"
          className="h-40"
          placeholder="Your review..."
        />
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <Button variant="danger-text" onClick={props.handleBack}>
            previous
          </Button>
          <span className="text-sm text-[#BCBCBB] font-bold uppercase mt-2.5">
            characteristics
          </span>
        </div>
        <div className="flex flex-col items-end">
          <Button variant="danger" onClick={props.handleNext}>
            next
          </Button>
          <span className="text-sm text-[#BCBCBB] font-bold uppercase mt-2.5">
            photos
          </span>
        </div>
      </div>
    </Card>
  );
};

export default Review;
