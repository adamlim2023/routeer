import React, { FC, useState } from "react";
import Link from "next/link";
import ProfileCompletePercent from "features/profile/ProfileCompletePercent";
import CompanyCard from "features/portal/CompanyCard";
import DetailCard from "features/portal/DetailCard";
import AnalyticsCard from "features/portal/AnalyticsCard";

interface Props {
  children: React.ReactNode;
  analystics?: boolean;
  active: string;
}

const Layout: FC<Props> = (props) => {
  const tabs = [
    { id: "dashboard", label: "Dashboard", link: "/portal/dashboard" },
    { id: "profile", label: "Profile", link: "/portal/profile" },
    { id: "manage", label: "Manage", link: "/portal/manage" },
    { id: "review_portal", label: "Review portal", link: "/portal/review" },
    { id: "analytics", label: "Analytics", link: "/portal/analytics" },
  ];

  return (
    <div className="max-w-[1440px] mx-auto pt-[65px] desktop:px-16 relative">
      <div>
        <img src="/images/pages/portal/banner.png" className="w-full" alt="" />
      </div>
      <div className="w-full desktop:w-1/4 relative px-4 tablet:px-0">
        <div className="w-full desktop:absolute desktop:top-[-410px] desktop:-left-10 flex flex-col tablet:flex-row desktop:flex-col pb-5 tablet:px-[60px] desktop:px-0 tablet:py-5 desktop:py-0">
          <div className="w-full">
            <div className="w-full flex flex-col tablet:flex-row desktop:flex-col">
              <div className="mb-5 flex-shrink-0 tablet:mr-4 desktop:mr-0 -mt-14 desktop:mt-0">
                <CompanyCard
                  avatar="/images/pages/portal/user.svg"
                  name="Company name"
                  verified={true}
                />
              </div>
              <div className="w-full">
                <div className="mb-5">
                  <ProfileCompletePercent percent={75} />
                </div>
                <div className="mb-5">
                  <DetailCard />
                </div>
              </div>
            </div>
            {props.analystics && (
              <div className="flex flex-wrap -mx-2 items-stretch">
                <div className="w-1/3 desktop:w-full mb-5 px-2">
                  <AnalyticsCard
                    name="Number of routes"
                    value={14}
                    avatar="/images/pages/portal/route.svg"
                  />
                </div>
                <div className="w-1/3 desktop:w-full mb-5 px-2">
                  <AnalyticsCard
                    name="Review score"
                    value={4.2}
                    avatar="/images/pages/portal/review.svg"
                  />
                </div>
                <div className="w-1/3 desktop:w-full mb-5 px-2">
                  <AnalyticsCard
                    name="Traveler reviews"
                    value={76}
                    avatar="/images/pages/portal/traveler_review.svg"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap bg-darkgray">
        <div className="w-full desktop:w-1/4"></div>
        <div className="w-full desktop:w-3/4 px-3 tablet:px-14 desktop:px-3">
          <ul className="h-12 flex items-center overflow-hidden">
            {tabs.map((tab) => {
              return (
                <li
                  key={tab.id}
                  className="h-full flex items-center mr-10 desktop:mr-20 relative px-1.5 whitespace-nowrap"
                >
                  <Link href={tab.link}>
                    <span
                      className={`text-base tablet:text-xl text-white cursor-pointer ${
                        tab.id === props.active ? `` : `opacity-50`
                      }`}
                    >
                      {tab.label}
                    </span>
                  </Link>
                  {tab.id === props.active && (
                    <span className="absolute left-0 bottom-0 w-full h-1 rounded-sm bg-cyanblue"></span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="flex flex-wrap">
        <div className="w-full desktop:w-1/4 relative"></div>
        <div className="w-full desktop:w-3/4 px-3 tablet:px-14 desktop:px-3">
          {props.children}
        </div>
      </div>
    </div>
  );
};

Layout.defaultProps = {
  analystics: true,
};

export default Layout;
