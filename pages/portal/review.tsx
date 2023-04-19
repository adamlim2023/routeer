import React from "react";
import MainLayout from "components/layout/MainLayuout";
import Layout from "features/portal/Layout";
import Pagination from "components/common/Pagination";
import ReviewCard from "components/common/ReviewCard";
import Select from "components/common/Select";

const PortalDashboard = () => {
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

  return (
    <MainLayout>
      <Layout active="review_portal">
        <div className="pt-4 p-10 px-3">
          <div className="flex justify-end items-end mb-3.5 desktop:mb-5">
            <div className="mr-8">
              <span className="text-base text-darkgray">Sorted by</span>
              <Select
                id="sort"
                instanceId="sort"
                options={[
                  { value: "rating", label: "Rating" },
                  { value: "duration", label: "Duration" },
                  { value: "price", label: "Price" },
                ]}
                defaultValue={{ value: "rating", label: "Rating" }}
              />
            </div>
            <div>
              <Select
                id="filters"
                instanceId="filters"
                options={[{ value: "add", label: "Add filters" }]}
                defaultValue={{ value: "add", label: "Add filters" }}
              />
            </div>
          </div>
          <div>
            {reviews.map((review, index) => {
              return (
                <div key={index} className="mb-3.5 tablet:mb-9 desktop:mb-10">
                  <ReviewCard {...review} />
                </div>
              );
            })}
          </div>
          <Pagination />
        </div>
      </Layout>
    </MainLayout>
  );
};

export default PortalDashboard;
