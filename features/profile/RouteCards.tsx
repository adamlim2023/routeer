import RouteCard from "components/common/RouteCard";
import React from "react";

const RouteCards = (props) => {
  return (
    <div className="py-[30px] px-4 tablet:px-[60px] desktop:px-0">
      {props.routes.map((route, index) => {
        return (
          <div key={index} className="mb-4">
            <RouteCard {...route} />
          </div>
        );
      })}
    </div>
  );
};

export default RouteCards;
