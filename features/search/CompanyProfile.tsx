import Card from "components/common/Card";
import React, { FC } from "react";

interface SocialLinks {
  facebook: string;
  instagram: string;
  twitter: string;
}

interface Props {
  name: string;
  verified?: boolean;
  website: string;
  phone: string;
  email: string;
  social: SocialLinks;
}

const CompanyProfile: FC<Props> = (props) => {
  return (
    <Card className="relative p-4 pb-[60px] tablet:py-6 tablet:px-3 desktop:px-[45px] desktop:py-[30px] desktop:pb-[75px] flex flex-col tablet:flex-row desktop:flex-col items-center tablet:items-center desktop:items-start">
      <div className="w-full tablet:w-1/2 desktop:w-auto flex flex-col items-center">
        <div className="flex items-center mb-3.5">
          <div className="w-7 h-7 rounded-full flex items-center justify-center p-1 bg-gradient-to-r from-[#DEDEDE] to-[#F2F2F200] bg-[#FAFAFA] shadow-theme">
            <img
              src="/images/icons/user_cyanblue.svg"
              className="w-full h-full"
              alt=""
            />
          </div>
          <span className="ml-2.5 text-2xl font-bold text-darkgray">
            {props.name}
          </span>
        </div>
        {props.verified && (
          <div className="flex items-center mb-4 desktop:mb-5">
            <img src="/images/icons/verified.svg" alt="" />
            <span className="ml-1 text-base text-darkgray">
              Verified account
            </span>
          </div>
        )}
        <div className="flex absolute tablet:relative desktop:absolute bottom-[15px] tablet:bottom-auto desktop:bottom-[30px]">
          <a href={props.social.facebook} className="mx-5 desktop:ml-0">
            <img src="/images/icons/facebook_cyanblue.svg" alt="" />
          </a>
          <a href={props.social.instagram} className="mx-5">
            <img src="/images/icons/instagram_cyanblue.svg" alt="" />
          </a>
          <a href={props.social.twitter} className="mx-5">
            <img src="/images/icons/twitter_cyanblue.svg" alt="" />
          </a>
        </div>
      </div>
      <div className="w-full tablet:w-1/2 desktop:w-auto flex flex-col items-center">
        <div>
          <div className="flex items-center mb-3">
            <img src="/images/icons/website.svg" alt="" />
            <span className="ml-[9px] text-base text-darkgray">
              {props.website}
            </span>
          </div>
          <div className="flex items-center mb-3">
            <img src="/images/icons/phone.svg" alt="" />
            <span className="ml-[9px] text-base text-darkgray">
              {props.phone}
            </span>
          </div>
          <div className="flex items-center">
            <img src="/images/icons/email_hotpink.svg" alt="" />
            <span className="ml-[9px] text-base text-darkgray">
              {props.email}
            </span>
          </div>
        </div>
      </div>
    </Card>
  );
};

CompanyProfile.defaultProps = {
  verified: true,
};

export default CompanyProfile;
