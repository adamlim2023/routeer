import React from "react";
import Card from "components/common/Card";
import Reviewer from "components/common/ReviewCard/Reviewer";
import Rating from "components/common/Rating";
import TransportProvider from "components/common/ReviewCard/TransportProvider";

const Photos = (props) => {
  return (
    <div className="py-6 px-4 tablet:px-[60px] desktop:px-0">
      {props.photos.map((photo, index) => {
        return (
          <Card key={index} className="mb-4 overflow-hidden">
            <div className="flex items-center justify-between p-4 tablet:p-6">
              <Reviewer
                name={photo.name}
                date={photo.date}
                avatar={photo.avatar}
              />
              <div className="flex flex-col items-end">
                <Rating rating={3} />
                <span className="text-sm tablet:text-base text-darkgray underline font-bold">
                  View full review
                </span>
              </div>
            </div>
            <div className="relative">
              <img src={photo.image} className="w-full" alt="" />
              <div className="absolute bottom-4 left-4 right-4 tablet:right-auto tablet:bottom-6 tablet:left-6 bg-light rounded-lg">
                <TransportProvider {...photo.transportProviderInfo} />
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default Photos;
