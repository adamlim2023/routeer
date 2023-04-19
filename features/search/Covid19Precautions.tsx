import React from "react";
import Card from "components/common/Card";

const Covid19Precautions = () => {
  const items = [
    "Barriers between passengers",
    "Cleaning station (for public use)",
    "Driver/staff wear mask",
    "Floor marking for social distancing",
  ];

  return (
    <Card className="max-h-full tablet:max-h-[228px] desktop:max-h-full px-6 pt-4.5 pt-3 pb-2.5 tablet:p-3 desktop:px-9 mb-5 tablet:mb-[15px] desktop:mb-[30px]">
      <div className="flex items-center mb-5 tablet:mb-2.5 desktop:mb-[26px]">
        <img
          src="/images/icons/virus.svg"
          className="w-7 h-7 desktop:w-10 desktop:h-10 mr-2.5 desktop:mr-2"
          alt=""
        />
        <span className="text-2xl text-orange">COVID-19 Precautions</span>
      </div>
      <div className="ml-0 tablet:ml-1.5 desktop:ml-2.5">
        {items.map((item, index) => {
          return (
            <div key={index} className="flex items-center mb-3 tablet:mb-5">
              <img src="/images/icons/checked.svg" alt="" />
              <span className="text-base ml-3 text-darkgray">{item}</span>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default Covid19Precautions;
