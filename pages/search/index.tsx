import React, { useState } from "react";
import MainLayout from "components/layout/MainLayuout";
import Link from "next/link";
import TravelRoute from "components/common/TravelRoute";
import { Col, Row } from "components/common/Grid";
import Button from "components/common/Button";
import Card from "components/common/Card";
import Select from "components/common/Select";
import RouteCard from "components/common/RouteCard";
import Pagination from "components/common/Pagination";
import Tab from "components/common/Tab";
import GoogleMap from "components/common/GoogleMap";

const Search = () => {
  const sortedByOptions = [
    { value: "rating", label: "Rating" },
    { value: "duration", label: "Duration" },
    { value: "price", label: "Price" },
  ];

  const [sortedBy, setSortedBy] = useState(sortedByOptions[0]);
  const handleSortedBy = (selectedOption) => {
    setSortedBy(selectedOption);
  };

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
  ];

  return (
    <MainLayout>
      <div className="max-w-[1440px] mx-auto pt-[65px] px-4 tablet:px-16 relative">
        <div className="py-4 desktop:py-6">
          <Row>
            <Col size={["full", "full", "7/12"]} className="pr-0 desktop:pr-5">
              <div className="px-0 tablet:px-1.5 desktop:px-3 mb-8">
                <Card>
                  <TravelRoute isResearch={true} />
                </Card>
              </div>
              <div>
                <div className="flex justify-between items-center px-0 tablet:px-1.5 desktop:px-3 mb-4 tablet:mb-8">
                  <div className="flex flex-col">
                    <span className="text-base text-gray leading-normal">
                      Sorted by
                    </span>
                    <Select
                      id="sortedBy"
                      instanceId="sortedBy"
                      options={sortedByOptions}
                      value={sortedBy}
                      onChange={handleSortedBy}
                    />
                  </div>
                  <Button variant="danger-text">
                    <Link href="/search/route/add">add new route</Link>
                  </Button>
                </div>
                <div className="mb-4">
                  <Tab tabs={["The marketplace", "Live routes"]}>
                    <div>
                      <div className="mb-6">
                        {routes.map((route, index) => {
                          return (
                            <div key={index} className="mb-4">
                              <RouteCard {...route} />
                            </div>
                          );
                        })}
                      </div>
                      <Pagination />
                    </div>
                    <div>
                      <div className="mb-6">
                        {routes.map((route, index) => {
                          return (
                            <div key={index} className="mb-4">
                              <RouteCard {...route} />
                            </div>
                          );
                        })}
                      </div>
                      <Pagination />
                    </div>
                  </Tab>
                </div>
                <p className="text-xl text-darkgray mb-10">
                  Don’ see what you’re looking for?{" "}
                  <span className="font-bold underline">
                    Try the public routes
                  </span>
                </p>
                <div>
                  <p className="text-xl tablet:text-2xl font-bold text-hotpink mb-2">
                    The Marketplace
                  </p>
                  <Row>
                    {routes.map((route, index) => {
                      return (
                        <Col
                          size={["full", "1/2", "1/2"]}
                          key={index}
                          className="px-0 py-2 tablet:px-2"
                        >
                          <RouteCard size="sm" {...route} />
                        </Col>
                      );
                    })}
                  </Row>
                </div>
              </div>
            </Col>
            <Col
              size={["full", "full", "5/12"]}
              className="hidden desktop:block"
            >
              <GoogleMap className="h-[650px]" />
            </Col>
          </Row>
        </div>
      </div>
    </MainLayout>
  );
};

export default Search;
