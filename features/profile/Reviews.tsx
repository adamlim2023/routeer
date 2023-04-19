import React from "react";
import ReviewCard from "components/common/ReviewCard";
import Pagination from "components/common/Pagination";

const Reviews = (props) => {
  return (
    <div className="py-9 tablet:py-10 px-4 tablet:px-[60px] desktop:pr-[110px] desktop:pl-0">
      {props.reviews.map((review, index) => {
        return (
          <div key={index} className="mb-4 tablet:mb-9 desktop:mb-10">
            <ReviewCard {...review} />
          </div>
        );
      })}
      <Pagination />
    </div>
  );
};

export default Reviews;
