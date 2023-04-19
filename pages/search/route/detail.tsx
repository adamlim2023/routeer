import React from "react";
import MainLayout from "components/layout/MainLayuout";
import Link from "next/link";
import { Col, Row } from "components/common/Grid";
import GoogleMap from "components/common/GoogleMap";
import Button from "components/common/Button";
import Card from "components/common/Card";
import PopularTags from "features/search/PopularTags";
import Covid19Precautions from "features/search/Covid19Precautions";
import CompanyProfile from "features/search/CompanyProfile";
import Select from "components/common/Select";
import ReviewCard from "components/common/ReviewCard";
import RouteCard from "features/search/RouteCard";

const RouteDetail = () => {
  const popularTags = [
    {
      name: "covid conscious",
      color: "bg-[#A92633]",
    },
    {
      name: "scenic",
      color: "bg-[#68933C]",
    },
    {
      name: "easy to book",
      color: "bg-[#A567CA]",
    },
    {
      name: "onboard food & drinks",
      color: "bg-[#040A5C]",
    },
    {
      name: "Fast",
      color: "bg-[#EA4F2C]",
    },
  ];

  const companyInfo = {
    name: "Company name",
    verified: true,
    website: "www.ourcompany.com",
    phone: "+44 7475824759",
    email: "contact@ourcompany.com",
    social: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      twitter: "https://twitter.com",
    },
  };

  const areas = [
    "/images/areas/1.png",
    "/images/areas/2.png",
    "/images/areas/3.png",
    "/images/areas/4.png",
    "/images/areas/3.png",
    "/images/areas/1.png",
  ];

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

  const route = {
    journey: {
      from: "Penzance Ferry Terminal, Penzance, UK",
      to: "Sennen Beach, Sennen, Penzance, UK",
    },
    transportProvider: {
      name: "Transport provider name",
      avatar: "/images/icons/user_cyanblue.svg",
    },
    type: "/images/icons/scooter_hotpink.svg",
    rating: 3,
    reviewCount: 125,
    price: "£4.00",
    time: "0h 40min",
  };

  return (
    <MainLayout>
      <div className="max-w-[1440px] mx-auto pt-[65px] px-4 tablet:px-16 relative">
        <div className="pt-3 tablet:pt-6 desktop:pt-3.5 pb-[84px] tablet:pb-32 desktop:pb-[138px]">
          <Row className="mx-0 tablet:-mx-2 desktop:-mx-4 mb-5 items-stretch">
            <Col
              className="mb-5 tablet:mb-0 px-0 tablet:px-2 desktop:px-4"
              size={["full", "1/2", "1/3"]}
            >
              <RouteCard {...route} />
            </Col>
            <Col
              className="h-full px-0 tablet:px-2 desktop:px-4"
              size={["full", "1/2", "2/3"]}
            >
              <GoogleMap className="h-[244px] tablet:h-[460px] desktop:h-[510px]" />
            </Col>
          </Row>
          <Row className="mb-5 desktop:mb-[30px]">
            <Col>
              <Card className="px-8 pt-5 pb-10 relative">
                <p className="text-2xl text-cyanblue tablet:text-hotpink mb-3">
                  About Route
                </p>
                <p className="text-base text-darkgray">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Duis aute irure dolor in
                  reprehenderit in voluptatety.
                </p>
                <span className="absolute bottom-4 right-6 text-base font-bold underline text-cyanblue tablet:text-hotpink cursor-pointer">
                  Read more
                </span>
              </Card>
            </Col>
          </Row>
          <Row className="mx-0 desktop:-mx-4">
            <Col
              size={["full", "full", "1/3"]}
              className="mx-0 desktop:px-4 mb-5 tablet:mb-4 desktop:mb-0"
            >
              <Row className="mx-0 tablet:-mx-2 desktop:mx-0 items-stretch">
                <Col
                  size={["full", "1/2", "full"]}
                  className="px-0 tablet:px-2 desktop:px-0"
                >
                  <PopularTags tags={popularTags} />
                </Col>
                <Col
                  size={["full", "1/2", "full"]}
                  className="px-0 tablet:px-2 desktop:px-0"
                >
                  <Covid19Precautions />
                </Col>
              </Row>
              <div className="flex flex-col tablet:flex-row desktop:flex-col items-center">
                <div className="w-full mb-5 tablet:mb-0 desktop:mb-[30px] mr-0 tablet:mr-6 desktop:mr-0">
                  <CompanyProfile {...companyInfo} />
                </div>
                <Button variant="danger-text" className="flex-shrink-0">
                  edit route
                </Button>
              </div>
            </Col>
            <Col size={["full", "full", "2/3"]} className="mx-0 desktop:px-4">
              <Row className="-mx-2 tablet:-mx-1.5 desktop:-mx-3.5 mb-1.5 tablet:mb-7 desktop:mb-0">
                {areas.map((area: string, index: number) => {
                  return (
                    <Col
                      className="px-2 tablet:px-1.5 desktop:px-3.5 mb-3 tablet:mb-5 desktop:mb-8"
                      key={index}
                      size={["1/2", "1/2", "1/3"]}
                    >
                      <Card>
                        <div className="rounded-[20px] overflow-hidden">
                          <img src={area} className="w-full" alt="" />
                        </div>
                      </Card>
                    </Col>
                  );
                })}
              </Row>
              <Row>
                <Col>
                  <div className="flex flex-col-reverse tablet:flex-row items-center justify-between mb-2.5 tablet:mb-[34px]">
                    <p className="text-[40px] text-darkgray font-bold tracking-[-1px] self-start tablet:self-auto">
                      Reviews
                    </p>
                    <Button
                      className="self-end tablet:self-auto mb-2.5 tablet:mb-0"
                      variant="danger"
                    >
                      <Link href="/search/review/add">add your review</Link>
                    </Button>
                  </div>
                  <div className="flex items-end mb-3.5 desktop:mb-5">
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
                        <div
                          key={index}
                          className="mb-3.5 tablet:mb-9 desktop:mb-10"
                        >
                          <ReviewCard {...review} />
                        </div>
                      );
                    })}
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </MainLayout>
  );
};

export default RouteDetail;
