import React from "react";
import MainLayout from "components/layout/MainLayuout";
import Card from "components/common/Card";

const Careers = () => {
  const items = [
    {
      name: "Regional Content Creators",
      description:
        "Helping us to grow our wide transport network by mapping out routes in your designated areas, on a flexible, share-of-commission basis.",
    },
    {
      name: "Digital Marketer",
      description:
        "Helping us to showcase and shout from the rooftops about Routeer",
    },
    {
      name: "Head of Growth",
      description:
        "Helping us to acquire new users and build a loyal Routeer Community.",
    },
    {
      name: "Back-end Developer",
      description: "Helping us to build our brilliant new travel platform.",
    },
  ];

  return (
    <MainLayout>
      <img
        src="/images/pages/careers/1.png"
        className="w-1/2 tablet:w-5/12 absolute top-[65px] right-0 filter brightness-0 invert"
        alt=""
      />
      <div className="max-w-[1440px] mx-auto pt-[65px] pb-20 tablet:pb-[90px] px-4 tablet:px-[60px] desktop:px-[180px] relative">
        <p className="text-[40px] tablet:text-[64px] mb-9 tablet:mb-14 desktop:mb-16 text-hotpink font-bold text-center leading-none pt-14 tablet:pt-[78px] desktop:pt-[135px]">
          JOIN US
        </p>
        <p className="text-xl tablet:text-2xl leading-6 tablet:leading-7 mb-[30px] tablet:mb-10 text-darkgray px-0 tablet:px-16 desktop:px-28">
          We're always on the lookout for talented, creative and passionate
          people to join our growing team, who areinterested in disrupting the
          travel transport market. If this sounds like you, we’d love for you to
          get in touch!
          <br />
          <br />
          Below are some of the opportunities we’re currently recruiting for:
        </p>
        <div className="flex flex-wrap items-stretch mx-0 desktop:-mx-5 mb-0 tablet:mb-2.5 desktop:mb-4 px-0 tablet:px-16">
          {items.map((item, index) => {
            return (
              <div
                className="w-full desktop:w-1/2 px-0 desktop:px-5 mb-10 tablet:mb-[30px] desktop:mb-6"
                key={index}
              >
                <Card className="w-full h-full flex flex-col">
                  <div className="h-full p-5 pb-3 tablet:px-11 tablet:py-8 border-b border-cyanblue">
                    <p className="text-2xl font-bold mb-4 tablet:mb-8 text-cyanblue">
                      {item.name}
                    </p>
                    <p className="text-xl text-darkgray">{item.description}</p>
                  </div>
                  <div className="flex justify-end p-5 pt-4 tablet:pt-3.5 tablet:pb-4 tablet:pr-10">
                    <span className="text-xl text-hotpink">Hiring soon</span>
                  </div>
                </Card>
              </div>
            );
          })}
        </div>
        <div className="flex items-center flex-col tablet:flex-row">
          <div className="w-full tablet:w-1/2 flex justify-center mb-[30px] tablet:mb-0">
            <img src="/images/pages/careers/2.png" alt="" />
          </div>
          <div className="w-full tablet:w-1/2">
            <p className="text-[30px] font-bold text-cyanblue mb-5 tablet:mb-4 leading-10">
              Interested in these roles, or feel you would be a good fit for
              another position?
            </p>
            <p className="text-2xl text-darkgray">
              Send us a CV and snippet about yourself to us at:{" "}
              <span className="text-hotpink">hello@routeer.com</span>
            </p>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Careers;
