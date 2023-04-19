import React from "react";
import MainLayout from "components/layout/MainLayuout";
import TravelRoute from "components/common/TravelRoute";
import List from "features/home/List";
import Card from "components/common/Card";

export default function Home() {
  const travelers = {
    title: "for Travelers",
    items: [
      {
        name: "Find the most suitable routes",
        description:
          "For all types of transport – bus, coach, train, boat, private services and many more – Routeer covers a vast amount of travel transport information. From the simple stuff, such as cost, duration, and how to book, to the stuff you really want to know and see, such as: user reviews, photos, safety ratings, on-board amenities (WiFi, food, toilets, etc), and even what Covid-19 measures are in place.",
        icon: "images/icons/route.svg",
      },
      {
        name: "Save valuable time",
        description:
          "No more endless scrolling or physically standing in queues for information or tickets – save vast amounts of time by having all of your transport information in one easily accessible place, as well as by using our e-ticketing system.",
        icon: "images/icons/fast.svg",
      },
      {
        name: "Accurate & up-to-date information",
        description:
          "Through regular content by both travel operators and their users, transport information will be kept refreshed and up-to-date, as opposed to old, out-of-date guidebooks or websites.",
        icon: "images/icons/update.svg",
      },
      {
        name: "Ability to see and leave reviews",
        description:
          "Reviews give users free expression, rewards great service in travel, and helps other travellers by reassuring them of the safety and quality of transport providers. ",
        icon: "images/icons/feedback.svg",
      },
    ],
    callback: {
      name: "find the perfect journey",
      handleClick: () => {
        alert();
      },
    },
  };

  const transportProviders = {
    title: "for Transport providers",
    items: [
      {
        name: "Be discovered online",
        description:
          "Utilise Routeer's powerful global reach to get your transport services in front of a wide audience of travellers and tourists. We put you on the digital map (for free!), allowing your services to be seen and booked by customers.",
        icon: "images/icons/route.svg",
      },
      {
        name: "Valuable insight and feedback from customers",
        description:
          "Access to your own transport provider portal to view your customer and performance data, and analyse the useful feedback they are providing on your services.",
        icon: "images/icons/fast.svg",
      },
      {
        name: "Routeer Trustmark",
        description:
          "Earn the Routeer Trustmark and display it proudly on your profile and vehicles. This identifies you as a safe, high-quality, trustworthy and digitally connected transport provider.",
        icon: "images/icons/update.svg",
      },
      {
        name: "Get recognised for good service",
        description:
          "Most users view online reviews before booking anything within the travel industry. Traveller reviews and interaction helps endorse loyalty and cement a positive brand image for your company, giving you a valuable competitive advantage!",
        icon: "images/icons/feedback.svg",
      },
    ],
    callback: {
      name: "add your routes",
      handleClick: () => {
        alert();
      },
    },
  };

  const reviews = [
    {
      percent: 82,
      description:
        "of travel bookings in 2018 were completed via a website or mobile app, without human interaction",
      name: "Trekksoft",
      year: 2019,
    },
    {
      percent: 93,
      description:
        "of consumers say online reviews impact their purchasing decisions",
      name: "Podium",
      year: 2019,
    },
    {
      percent: 84,
      description: "of people trust online reviews as much as friends",
      name: "Inc.com,",
      year: 2020,
    },
  ];

  return (
    <MainLayout>
      <div className="max-w-[1440px] mx-auto">
        <div className="relative">
          <img
            src="/images/pages/home/banner.png"
            className="w-full min-h-[664px] tablet:min-h-[683px] desktop:min-h-[744px] object-cover"
          />
          <div className="w-full tablet:w-max max-w-full absolute top-28 tablet:top-[200px] desktop:top-40 left-1/2 px-8 transform -translate-x-1/2">
            <TravelRoute fromLabel="FROM" toLabel="TO" />
          </div>
        </div>
        <div className="px-4 tablet:px-16 pt-10 tablet:pt-8 desktop:pt-10 pb-20 bg-light">
          <div className="mb-10 shadow-large rounded-[20px] bg-cyanblue flex items-center">
            <img
              src="/images/pages/home/routeer.svg"
              className="w-[116px] tablet:w-[134px] desktop:w-[200px] flex-shrink-0"
              alt=""
            />
            <p className="p-4 tablet:p-5 tablet:pl-2.5 desktop:p-9 text-base tablet:text-xl desktop:text-2xl leading-normal tablet:leading-6 desktop:leading-7 text-white">
              Routeer is an online travel marketplace, connecting travellers
              with transport providers on our new digital platform. We are a
              global journey planner: allowing users to find, compare and choose
              the best routes and transport options for their trips.
            </p>
          </div>
          <div className="flex flex-wrap items-center">
            <div className="w-full desktop:w-1/2 pr-0 desktop:pr-9">
              <List {...travelers} />
            </div>
            <div className="w-full desktop:w-1/2 mb-16">
              <Card>
                <div className="w-full flex justify-center">
                  <img src="/images/pages/home/desktop_mockup.png" />
                </div>
              </Card>
            </div>
          </div>
          <div className="flex flex-wrap flex-col-reverse desktop:flex-row items-center">
            <div className="w-full desktop:w-1/2 mb-10 desktop:mb-0 flex justify-center">
              <img
                src="/images/pages/home/mobile_mockup.png"
                className="w-auto max-w-full"
                alt=""
              />
            </div>
            <div className="w-full desktop:w-1/2">
              <List {...transportProviders} />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 tablet:-mx-2 desktop:-mx-4">
            {reviews.map((review, index) => {
              return (
                <div
                  key={index}
                  className="px-3 tablet:px-2 desktop:px-4 w-full tablet:w-1/3 mb-3 tablet:mb-0"
                >
                  <Card className="h-full">
                    <div className="py-4 px-7 tablet:p-[38px] tablet:pb-6">
                      <p className="text-2xl tablet:text-[40px] font-bold text-hotpink leading-none mb-4 tablet:mb-7">
                        "{review.percent}%
                      </p>
                      <p className="text-base tablet:text-xl text-darkgray leading-6 mb-4">
                        {review.description}
                        <span className="inline-flex text-[40px] font-bold text-hotpink leading-4">
                          "
                        </span>
                      </p>
                      <p className="text-base font-bold text-darkgray">
                        {review.name} {review.year}
                      </p>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
