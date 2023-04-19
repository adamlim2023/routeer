import React from "react";
import MainLayout from "components/layout/MainLayuout";
import Card from "components/common/Card";
import List from "features/mission/List";

const Mission = () => {
  const list = [
    {
      icon: "images/icons/feedback.svg",
      description:
        "Make life and travel much easier for our users; to empower them; save them money and hassle; and give them a sense of value too",
    },
    {
      icon: "images/icons/website.svg",
      description:
        "Boost social enterprise, particularly in less developed countries – by giving transport providers a real presence which they may not have already had; to give them more business; and to reward and encourage better service in the transport industry",
    },
    {
      icon: "images/icons/direction.svg",
      description:
        "Promote sustainable and ethical travel, safety and good environmental practices in transport",
    },
    {
      icon: "images/icons/chat.svg",
      description:
        "Knock down barriers for both types of users, and allow for disintermediation in the transport booking process",
    },
  ];

  return (
    <MainLayout>
      <div className="max-w-[1440px] mx-auto pt-[65px] pb-[60px] tablet:pb-18 desktop:pb-[54px] px-4 tablet:px-16 relative">
        <div className="flex flex-col-reverse desktop:flex-row flex-wrap items-center pt-14 pb-5 tablet:pt-[78px] desktop:pt-[92px] desktop:pb-10">
          <div className="w-full desktop:w-1/2">
            <Card className="w-5/6 tablet:w-4/5 desktop:w-full px-0 py-5 tablet:px-5 tablet:py-0 desktop:p-10">
              <img src="/images/pages/mission/2.png" alt="" />
            </Card>
          </div>
          <div className="w-full desktop:w-1/2 flex justify-end">
            <div className="w-5/6 tablet:w-2/3 desktop:w-full px-0 desktop:px-7 mb-5 desktop:mb-0">
              <p className="text-[40px] tablet:text-[64px] leading-none font-bold text-hotpink mb-5 desktop:mb-[60px] tracking-[-1px]">
                OUR MISSION
              </p>
              <p className="text-base tablet:text-xl desktop:text-2xl text-cyanblue leading-normal tablet:leading-6 desktop:leading-7">
                Our ultimate goal is to have worldwide coverage of information
                on all travel routes and transport providers. We aim to cover as
                many roads, rails, seas, rivers, mountains and forests that we
                possibly can, to connect the world, route by route.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center mb-10 desktop:mb-20">
          <div className="w-5/12 hidden desktop:flex">
            <Card className="w-full rounded-[20px]">
              <img
                src="/images/pages/mission/4.png"
                alt=""
                className="w-full"
              />
            </Card>
          </div>
          <div className="w-full desktop:w-7/12 px-0 desktop:px-8 text-base text-darkgray">
            We aim to create a seamless travel experience for users, reducing
            friction in all areas of finding and booking transport, and reducing
            the need for physical touchpoints. We can do this by giving any
            transport provider, no matter how small or non-technical, the
            ability to market their services and take bookings online.
            <br />
            <br />
            We are building a space for travellers to share their wisdom and
            experiences by contributing quality content and reviews. By
            combining this with the content of transport providers themselves,
            along with far-reaching transport databases, we aim to create a
            travel information network spanning all corners of the globe.
            <br />
            <br />
            No more out-dated, dilapidated travel guides telling you the wrong
            information (although they will always have a place in our hearts);
            travel advice should be up-to-date and tailored to suit the needs of
            the modern traveller.
          </div>
        </div>
        <div className="flex flex-col-reverse desktop:flex-row flex-wrap items-center mb-10 desktop:mb-20">
          <div className="w-full desktop:w-7/12 pr-0 desktop:pr-8 text-base text-darkgray">
            The integration of user-generated content is at the heart of our
            core values. We enable and encourage travellers to upload routes
            themselves, and add their own photos and reviews of the journeys
            they’ve taken. This means that a wide range of honest and valuable
            information can be used by others to their search for the perfect
            journey. Information captured includes: how comfortable the journey
            is; how safe it is; whether there is food/WiFi/toilets/charging
            stations on board; as well as useful tips, such as which side tosit
            on to get the best views!
            <br />
            <br />
            With the ability for travellers to leave reviews, we help to give
            voice to the consumers within the industry, allowing recognition to
            be awarded where deserved, which can help transform the service that
            travellers receive on their journeys in the future.
            <br />
            <br />
            We also understand that many of the world’s transport providers do
            not have the capabilities or resources to list their services on a
            website of their own or in popular guidebooks, and it can be
            difficult for them to be seen by travellers. By giving these
            transport providers access to a global marketplace, Routeer can help
            them grow their online presence and market their services to the
            world.
          </div>
          <div className="w-full desktop:w-5/12 mb-7 desktop:mb-0">
            <Card className="w-full rounded-[20px]">
              <img
                src="/images/pages/mission/1.png"
                className="w-full"
                alt=""
              />
            </Card>
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="w-full desktop:w-5/12 flex justify-center mb-[30px] desktop:mb-0">
            <img src="/images/pages/mission/3.png" alt="" />
          </div>
          <div className="w-full desktop:w-7/12 px-0 desktop:px-10">
            <p className="text-[40px] tablet:text-[64px] leading-normal tablet:leading-loose text-hotpink font-bold tracking-[-1px]">
              Our Aims
            </p>
            <p className="text-xl text-cyanblue leading-6 desktop:leading-7 mb-8 tablet:mb-4 desktop:mb-14">
              We are a purpose-driven organisation aiming to add genuine value
              to the travel world, especially following the recent devastation
              caused by the global Covid-19 pandemic. Our key aims are to:
            </p>
            <div>
              {list.map((item, index) => {
                return (
                  <div key={index}>
                    <List {...item} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Mission;
