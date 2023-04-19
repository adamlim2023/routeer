import React from "react";
import Card from "components/common/Card";
import Rating from "components/common/Rating";

const DetailCard = () => {
  return (
    <Card className="p-[30px]">
      <div className="mb-4">
        <Rating
          rating={3}
          active={
            <img
              src="/images/icons/star_hotpink.svg"
              className="w-[18px] h-[18px] mx-1"
            />
          }
          inactive={
            <img
              src="/images/icons/star_hotpink_outline.svg"
              className="w-[18px] h-[18px] mx-1"
            />
          }
        />
      </div>
      <p className="text-base text-gray mb-3">Type of transport</p>
      <ul className="flex mb-[30px]">
        <li className="flex flex-col items-center mr-6">
          <img src="/images/icons/scooter_cyanblue.svg" className="mb-2.5" />
          <span className="text-base text-gray">Scooter</span>
        </li>
        <li className="flex flex-col items-center mr-6">
          <img src="/images/icons/tuktuk_cyanblue.svg" className="mb-2.5" />
          <span className="text-base text-gray">Tuk tuk</span>
        </li>
      </ul>
      <div className="text-xl text-gray">
        <p>Joined in september 2020</p>
        <p>Freixo de Espada a Cinta, PT</p>
      </div>
      <p className="text-base font-bold text-gray underline mb-[30px]">
        Unclaimed business
      </p>
      <ul className="mb-[30px]">
        <li className="flex items-center mb-3">
          <img src="/images/icons/website.svg" alt="" />
          <span className="ml-2.5 text-base text-gray">www.ourcompany.com</span>
        </li>
        <li className="flex items-center mb-3">
          <img src="/images/icons/phone.svg" alt="" />
          <span className="ml-2.5 text-base text-gray">+44 7475824759</span>
        </li>
        <li className="flex items-center mb-3">
          <img src="/images/icons/email_hotpink.svg" alt="" />
          <span className="ml-2.5 text-base text-gray">
            contact@ourcompany.com
          </span>
        </li>
      </ul>
      <ul className="flex items-center justify-center">
        <li className="mx-5">
          <img src="/images/icons/facebook_hotpink.svg" alt="" />
        </li>
        <li className="mx-5">
          <img src="/images/icons/instagram_hotpink.svg" alt="" />
        </li>
        <li className="mx-5">
          <img src="/images/icons/twitter_hotpink.svg" alt="" />
        </li>
      </ul>
    </Card>
  );
};

export default DetailCard;
