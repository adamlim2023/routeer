import React, { useState } from "react";
import MainLayout from "components/layout/MainLayuout";
import Button from "components/common/Button";
import UserCard from "features/profile/UserCard";
import DetailInformation from "features/profile/DetailInformation";
import ReviewDistribution from "features/profile/ReviewDistribution";
import ProfileCompletePercent from "features/profile/ProfileCompletePercent";
import Reviews from "features/profile/Reviews";
import RouteCards from "features/profile/RouteCards";
import Photos from "features/profile/Photos";
import Modal from "components/common/Modal";
import EditProfileModal from "features/profile/EditProfileModal";

const Profile = () => {
  const [zoom, setZoom] = useState(11);
  const mapInfo = {
    position: {
      lat: 59.95,
      lng: 30.33,
    },
    zoom,
  };
  const tabs = [
    { id: "reviews", label: "Reviews" },
    { id: "routes", label: "Routes" },
    { id: "photos", label: "Photos" },
  ];

  const [activeTab, setActiveTab] = useState<string>(tabs[0].id || "");
  const [isShowModal, setIsShowModal] = useState<boolean>(false);

  const reviews = [
    {
      name: "Lauratravels",
      date: "20 Aug 2020, 15:35",
      avatar: "/images/reviewer.png",
      mine: false,
      rating: 3,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      tags: [
        { name: "ONBOARD FOOD & DRINK", color: "bg-[#040A5C]" },
        { name: "SCENIC", color: "bg-[#68933C]" },
        { name: "WOW FACTOR", color: "bg-[#EA4F2C]" },
      ],
      transportProviderInfo: {
        name: "Transport provider name",
        avatar: "/images/transport_provider.png",
        rating: 2,
        reviewCount: 150050,
      },
      journey: {
        from: "Penzance Ferry Terminal, Penzance, UK",
        to: "Sennen Beach, Sennen, Penzance, UK",
        time: "1h 15 min",
        cost: "19.00 GBP",
      },
      score: {
        quality: 3,
        value: 3,
        service: 3,
      },
    },
    {
      name: "Lauratravels",
      date: "20 Aug 2020, 15:35",
      avatar: "/images/reviewer.png",
      mine: false,
      rating: 3,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      assets: [
        "/images/review.png",
        "/images/review.png",
        "/images/review.png",
      ],
      tags: [
        { name: "ONBOARD FOOD & DRINK", color: "bg-[#040A5C]" },
        { name: "SCENIC", color: "bg-[#68933C]" },
        { name: "WOW FACTOR", color: "bg-[#EA4F2C]" },
      ],
      transportProviderInfo: {
        name: "Transport provider name",
        avatar: "/images/transport_provider.png",
        rating: 2,
        reviewCount: 150050,
      },
      journey: {
        from: "Penzance Ferry Terminal, Penzance, UK",
        to: "Sennen Beach, Sennen, Penzance, UK",
        time: "1h 15 min",
        cost: "19.00 GBP",
      },
      score: {
        quality: 3,
        value: 3,
        service: 3,
      },
    },
    {
      name: "Lauratravels",
      date: "20 Aug 2020, 15:35",
      avatar: "/images/reviewer.png",
      mine: true,
      rating: 3,
      review:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      tags: [
        { name: "ONBOARD FOOD & DRINK", color: "bg-[#040A5C]" },
        { name: "SCENIC", color: "bg-[#68933C]" },
        { name: "WOW FACTOR", color: "bg-[#EA4F2C]" },
      ],
      transportProviderInfo: {
        name: "Transport provider name",
        avatar: "/images/transport_provider.png",
        rating: 2,
        reviewCount: 150050,
      },
      journey: {
        from: "Penzance Ferry Terminal, Penzance, UK",
        to: "Sennen Beach, Sennen, Penzance, UK",
        time: "1h 15 min",
        cost: "19.00 GBP",
      },
      score: {
        quality: 3,
        value: 3,
        service: 3,
      },
    },
  ];

  const routes = [
    {
      journey: {
        from: "Penzance Ferry Terminal, Penzance, UK",
        to: "Sennen Beach, Sennen, Penzance, UK",
      },
      type: "images/icons/scooter_hotpink.svg",
      price: "£4.00",
      time: "0h 40min",
      rate: 3,
      reviewCount: 125,
      transportInfo: {
        avatar: "images/icons/user_cyanblue.svg",
        name: "Transport provider name",
        covid: true,
      },
    },
    {
      journey: {
        from: "Penzance Ferry Terminal, Penzance, UK",
        to: "Sennen Beach, Sennen, Penzance, UK",
      },
      type: "images/icons/scooter_hotpink.svg",
      price: "£4.00",
      time: "0h 40min",
      rate: 3,
      reviewCount: 125,
      transportInfo: {
        avatar: "images/icons/user_cyanblue.svg",
        name: "Transport provider name",
        covid: true,
      },
    },
    {
      journey: {
        from: "Penzance Ferry Terminal, Penzance, UK",
        to: "Sennen Beach, Sennen, Penzance, UK",
      },
      type: "images/icons/scooter_hotpink.svg",
      price: "£4.00",
      time: "0h 40min",
      rate: 3,
      reviewCount: 125,
      transportInfo: {
        avatar: "images/icons/user_cyanblue.svg",
        name: "Transport provider name",
        covid: true,
      },
    },
    {
      journey: {
        from: "Penzance Ferry Terminal, Penzance, UK",
        to: "Sennen Beach, Sennen, Penzance, UK",
      },
      type: "images/icons/scooter_hotpink.svg",
      price: "£4.00",
      time: "0h 40min",
      rate: 3,
      reviewCount: 125,
      transportInfo: {
        avatar: "images/icons/user_cyanblue.svg",
        name: "Transport provider name",
        covid: true,
      },
    },
    {
      journey: {
        from: "Penzance Ferry Terminal, Penzance, UK",
        to: "Sennen Beach, Sennen, Penzance, UK",
      },
      type: "images/icons/scooter_hotpink.svg",
      price: "£4.00",
      time: "0h 40min",
      rate: 3,
      reviewCount: 125,
      transportInfo: {
        avatar: "images/icons/user_cyanblue.svg",
        name: "Transport provider name",
        covid: true,
      },
    },
    {
      journey: {
        from: "Penzance Ferry Terminal, Penzance, UK",
        to: "Sennen Beach, Sennen, Penzance, UK",
      },
      type: "images/icons/scooter_hotpink.svg",
      price: "£4.00",
      time: "0h 40min",
      rate: 3,
      reviewCount: 125,
      transportInfo: {
        avatar: "images/icons/user_cyanblue.svg",
        name: "Transport provider name",
        covid: true,
      },
    },
  ];

  const photos = [
    {
      name: "Lauratravels",
      date: "20 Aug 2020, 15:35",
      avatar: "/images/reviewer.png",
      rating: 3,
      image: "/images/pages/profile/photos/1.png",
      transportProviderInfo: {
        name: "Transport provider name",
        avatar: "/images/transport_provider.png",
        rating: 3,
        reviewCount: 15050,
      },
    },
    {
      name: "Lauratravels",
      date: "20 Aug 2020, 15:35",
      avatar: "/images/reviewer.png",
      rating: 3,
      image: "/images/pages/profile/photos/2.png",
      transportProviderInfo: {
        name: "Transport provider name",
        avatar: "/images/transport_provider.png",
        rating: 3,
        reviewCount: 15050,
      },
    },
    {
      name: "Lauratravels",
      date: "20 Aug 2020, 15:35",
      avatar: "/images/reviewer.png",
      rating: 3,
      image: "/images/pages/profile/photos/3.png",
      transportProviderInfo: {
        name: "Transport provider name",
        avatar: "/images/transport_provider.png",
        rating: 3,
        reviewCount: 15050,
      },
    },
  ];

  return (
    <MainLayout>
      <div className="max-w-[1440px] mx-auto pt-[65px] desktop:px-16 relative">
        <div>
          <img
            src="/images/pages/profile/banner.png"
            className="w-full"
            alt=""
          />
        </div>
        <div className="w-full desktop:w-1/4 relative px-4 tablet:px-0">
          <div className="w-full desktop:absolute desktop:top-[-410px] desktop:-left-10 flex flex-col tablet:flex-row desktop:flex-col pb-5 tablet:px-[60px] desktop:px-0 tablet:py-5 desktop:py-0">
            <div className="mb-4 flex-shrink-0 -mt-14 desktop:mt-0">
              <UserCard
                avatar="/images/pages/profile/avatar.png"
                name="Laura Brown"
                username="lauratravels"
              />
            </div>
            <div className="tablet:pl-[60px] desktop:pl-0">
              <div className="mb-4">
                <ProfileCompletePercent percent={75} />
              </div>
              <div className="mb-4">
                <DetailInformation
                  verified={true}
                  reviews={8}
                  photos={5}
                  address="London, UK"
                  joinDate="september 2020"
                  website="www.lauratravels.com"
                  about="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Duis aute irure dolor in reprehenderit in voluptatety."
                />
              </div>
              <ReviewDistribution />
            </div>
          </div>
        </div>
        <div className="flex flex-wrap bg-darkgray">
          <div className="w-full desktop:w-1/4"></div>
          <div className="w-full desktop:w-3/4 flex justify-between items-center px-3 desktop:pr-[72px]">
            <ul className="h-12 flex items-center">
              {tabs.map((tab) => {
                return (
                  <li
                    key={tab.id}
                    className="h-full flex items-center mr-12 tablet:mr-14 desktop:mr-36 relative px-1.5"
                    onClick={() => setActiveTab(tab.id)}
                  >
                    <span
                      className={`text-base tablet:text-xl text-white cursor-pointer ${
                        tab.id === activeTab ? `` : `opacity-50`
                      }`}
                    >
                      {tab.label}
                    </span>
                    {tab.id === activeTab && (
                      <span className="absolute left-0 bottom-0 w-full h-1 rounded-sm bg-cyanblue"></span>
                    )}
                  </li>
                );
              })}
            </ul>
            <Button
              variant="danger"
              className="hidden desktop:flex"
              onClick={() => setIsShowModal(true)}
            >
              edit profile
            </Button>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full desktop:w-1/4 relative"></div>
          <div className="w-full desktop:w-3/4">
            {activeTab === "reviews" && <Reviews reviews={reviews} />}
            {activeTab === "routes" && <RouteCards routes={routes} />}
            {activeTab === "photos" && <Photos photos={photos} />}
          </div>
        </div>
      </div>

      <Modal
        isShow={isShowModal}
        hasCloseButton={false}
        handleClose={() => setIsShowModal(false)}
      >
        <EditProfileModal />
      </Modal>
    </MainLayout>
  );
};

export default Profile;
