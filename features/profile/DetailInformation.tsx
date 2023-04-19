import React, { FC } from "react";
import Card from "components/common/Card";

interface Props {
  verified: boolean;
  reviews: number;
  photos: number;
  address: string;
  joinDate: string;
  website: string;
  about: string;
}

const DetailInformation: FC<Props> = (props) => {
  return (
    <Card className="px-6 py-4 tablet:py-5 desktop:px-[35px] desktop:py-[30px]">
      <div className="flex flex-col tablet:flex-row desktop:flex-col">
        <div className="mb-1 mr-0 tablet:mr-7">
          {props.verified && (
            <div className="flex items-center mb-3">
              <img src="/images/icons/verified.svg" alt="" />
              <span className="ml-3 text-base text-gray">Verfied account</span>
            </div>
          )}
          <ul className="flex flex-row tablet:flex-col">
            <li className="flex items-center mb-3 w-1/2 tablet:w-full">
              <img src="/images/icons/reviews.svg" alt="" />
              <span className="ml-3 text-base text-gray">
                {props.reviews} reviews
              </span>
            </li>
            <li className="flex items-center mb-3 w-1/2 tablet:w-full">
              <img src="/images/icons/photos.svg" alt="" />
              <span className="ml-3 text-base text-gray">
                {props.photos} photos
              </span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col text-base tablet:text-xl text-gray mb-4">
          <span className="mb-2">{props.address}</span>
          <span className="mb-2">Joined in {props.joinDate}</span>
          <span className="mb-2">{props.website}</span>
        </div>
      </div>
      <div>
        <p className="text-2xl text-hotpink mb-2">About me</p>
        <p className="text-base text-gray">{props.about}</p>
      </div>
    </Card>
  );
};

export default DetailInformation;
