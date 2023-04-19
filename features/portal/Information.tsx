import React from "react";
import Card from "components/common/Card";

const Information = () => {
  return (
    <Card className="p-4">
      <p className="text-2xl text-hotpink mb-6 leading-7">Information</p>
      <div className="flex flex-col sm:flex-row items-end tablet:flex-col">
        <div className="w-full">
          <div>
            <p className="text-base text-hotpink mb-2">Type of transport:</p>
            <div className="flex mb-6">
              <div className="flex flex-col items-center mr-4">
                <img
                  src="/images/icons/scooter_cyanblue.svg"
                  className="mb-2"
                  alt=""
                />
                <span className="text-base text-gray">Scooter</span>
              </div>
              <div className="flex flex-col items-center mr-4">
                <img
                  src="/images/icons/tuktuk_cyanblue.svg"
                  className="mb-2"
                  alt=""
                />
                <span className="text-base text-gray">Tuk tuk</span>
              </div>
            </div>
          </div>
          <div className="mb-6">
            <p className="flex items-center">
              <img src="/images/icons/website_fill.svg" alt="" />
              <span className="text-base text-hotpink ml-1">Website:</span>
            </p>
            <p
              className="text-xl text-gray pl-5"
              style={{ overflowWrap: "anywhere" }}
            >
              www.ourcompany.com
            </p>
          </div>
          <div className="mb-6">
            <p className="flex items-center">
              <img src="/images/icons/email_fill.svg" alt="" />
              <span className="text-base text-hotpink ml-1">
                Contact email:
              </span>
            </p>
            <p
              className="text-xl text-gray pl-5"
              style={{ overflowWrap: "anywhere" }}
            >
              contact@ourcompany.com
            </p>
          </div>
          <div className="mb-6">
            <p className="flex items-center">
              <img src="/images/icons/instagram_fill.svg" alt="" />
              <span className="text-base text-hotpink ml-1">Instagram:</span>
            </p>
            <p
              className="text-xl text-gray pl-5"
              style={{ overflowWrap: "anywhere" }}
            >
              https://www.instagram.com/
            </p>
          </div>
        </div>
        <div className="w-full">
          <div className="mb-6">
            <p className="flex items-center">
              <img src="/images/icons/location_fill.svg" alt="" />
              <span className="text-base text-hotpink ml-1">Location:</span>
            </p>
            <p
              className="text-xl text-gray pl-5"
              style={{ overflowWrap: "anywhere" }}
            >
              London, UK
            </p>
          </div>
          <div className="mb-6">
            <p className="flex items-center">
              <img src="/images/icons/phone_fill.svg" alt="" />
              <span className="text-base text-hotpink ml-1">Phone number:</span>
            </p>
            <p
              className="text-xl text-gray pl-5"
              style={{ overflowWrap: "anywhere" }}
            >
              +44 76854937566
            </p>
          </div>
          <div className="mb-6">
            <p className="flex items-center">
              <img src="/images/icons/facebook_fill.svg" alt="" />
              <span className="text-base text-hotpink ml-1">Facebook:</span>
            </p>
            <p
              className="text-xl text-gray pl-5"
              style={{ overflowWrap: "anywhere" }}
            >
              https://www.facebook.com/
            </p>
          </div>
          <div className="mb-6">
            <p className="flex items-center">
              <img src="/images/icons/twitter_fill.svg" alt="" />
              <span className="text-base text-hotpink ml-1">Twitter:</span>
            </p>
            <p
              className="text-xl text-gray pl-5"
              style={{ overflowWrap: "anywhere" }}
            >
              https://twitter.com/home?lang=en
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Information;
