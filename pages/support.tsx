import React from "react";
import MainLayout from "components/layout/MainLayuout";
import Card from "components/common/Card";
import TransportTypeCard from "features/support/TransportTypeCard";

const Support = () => {
  const transportTypes = [
    {
      name: "Buses, coaches and minibuses of all sizes",
      icons: [
        "images/icons/bus_lg.svg",
        "images/icons/coach.svg",
        "images/icons/minibus.svg",
        "images/icons/minivan.svg",
      ],
      theme: "hotpink",
    },
    {
      name: "Trains, trams and rail",
      icons: [
        "images/icons/train_lg.svg",
        "images/icons/high_speed_train.svg",
        "images/icons/tram.svg",
        "images/icons/funicular.svg",
      ],
      theme: "cyanblue",
    },
    {
      name: "Boats, ferries, ships, yachts",
      icons: [
        "images/icons/boat_lg.svg",
        "images/icons/ferry.svg",
        "images/icons/cruise.svg",
        "images/icons/yacht.svg",
      ],
      theme: "cyanblue",
    },
    {
      name: "Private vehicles: cars, bikes, minivans, 4x4s, etc.",
      icons: [
        "images/icons/car.svg",
        "images/icons/air_lg.svg",
        "images/icons/4x4.svg",
        "images/icons/scooter.svg",
      ],
      theme: "hotpink",
    },
  ];

  return (
    <MainLayout>
      <img
        src="/images/pages/support/location.svg"
        className="w-1/2 tablet:w-5/12 absolute top-[65px] left-0 filter brightness-0 invert"
        alt=""
      />
      <div className="max-w-[1440px] mx-auto pt-[65px] pb-[60px] tablet:pb-18 desktop:pb-[54px] px-4 tablet:px-16 relative">
        <div className="flex flex-wrap pt-[34px] tablet:pt-[78px] desktop:pt-16 mb-10 tablet:mb-[60px] desktop:mb-[100px]">
          <div className="w-full desktop:w-1/2 pr-0 desktop:pr-9 mb-5 desktop:mb-0">
            <p className="text-[40px] tablet:text-[64px] font-bold tracking-[-1px] text-hotpink mb-5 desktop:mb-16 leading-none">
              WHO WE SUPPORT
            </p>
            <div className="w-full tablet:w-4/5 desktop:w-2/3">
              <p className="text-base tablet:text-xl leading-6 text-darkgray mb-2.5 desktop:mb-10">
                Anyone can sign up and use Routeer for free, whether you are an
                experienced globe-trotter, a tuk-tuk driver in Nepal, a tourist
                in Thailand, a bus company in London, or a boat captain in the
                Seychelles!
              </p>
              <p className="text-xl tablet:text-2xl leading-7 text-cyanblue">
                As a travel marketplace, Routeer has two types of users who we
                support: Travellers and Transport Providers
              </p>
            </div>
          </div>
          <div className="w-full desktop:w-1/2 flex justify-end">
            <Card className="w-5/6 desktop:w-full px-10 py-5 tablet:py-5 desktop:pb-20 desktop:pt-10">
              <img src="/images/pages/support/1.png" alt="" />
            </Card>
          </div>
        </div>
        <div className="px-0 desktop:px-28">
          <div className="flex flex-col-reverse desktop:flex-row flex-wrap items-center mb-10 tablet:mb-[60px] desktop:mb-[100px]">
            <div className="w-full desktop:w-1/2">
              <Card className="overflow-hidden">
                <img
                  src="/images/pages/support/2.png"
                  className="w-full desktop:h-[536px] object-cover"
                />
              </Card>
            </div>
            <div className="w-full desktop:w-1/2 pl-0 desktop:pl-9 mb-10 tablet:mb-8 desktop:mb-0">
              <p className="text-[40px] text-hotpink font-bold tracking-[-1px] mb-5 tablet:mb-11">
                Travellers
              </p>
              <p className="text-2xl text-darkgray leading-7 mb-5 talbet:mb-8">
                By traveller we mean anyone in need of transportation – from
                backpackers and nomads, to tourists and business trippers.
              </p>
              <p className="text-xl text-darkgray">
                We are aiming to have worldwide coverage on all types of
                locations, but we want to focus on connecting the world’s routes
                in the areas which aren’t served well by public transport or
                major transport companies. We want (and need) your support and
                contribution to do this – help us in adding these niche and
                rural routes so that other travellers can benefit for years to
                come!
                <br />
                <br />
                In helping us to contribute to the site’s growing network of
                transport routes, you will become part of our esteemed
                community, something we take to heart here at Routeer.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center mb-10 tablet:mb-[60px] desktop:mb-[100px]">
            <div className="w-full desktop:w-1/2 pr-0 desktop:pr-9 mb-10 tablet:mb-8 desktop:mb-0">
              <p className="text-[40px] text-hotpink font-bold tracking-[-1px] mb-5 tablet:mb-11">
                Transport Providers
              </p>
              <p className="text-xl text-darkgray mb-5 talbet:mb-8">
                Any transport provider can sign up and list their services on
                Routeer, whether you are a large ferry company with 100 vessels,
                or a solo driver with one old but treasured minivan. Routeer
                reaches every corner of the globe,from rivers to mountains,
                oceans to deserts.
              </p>
              <p className="text-2xl text-darkgray leading-7">
                If you have a steering wheel, we can help!
              </p>
            </div>
            <div className="w-full desktop:w-1/2">
              <Card className="overflow-hidden">
                <img
                  src="/images/pages/support/3.png"
                  className="w-full desktop:h-[536px] object-cover"
                />
              </Card>
            </div>
          </div>
          <div className="px-0 tablet:px-[66px] desktop:px-0">
            <p className="text-2xl text-cyanblue font-bold leading-7 tracking-[-1px] mb-5 tablet:mb-4 desktop:mb-10">
              Examples of transport type includes
            </p>
            <div className="flex flex-wrap mx-0 desktop:-mx-4 items-stretch">
              {transportTypes.map((type, index) => {
                return (
                  <div
                    key={index}
                    className="w-full desktop:w-1/2 px-0 desktop:px-4 mb-8 desktop:mb-11"
                  >
                    <TransportTypeCard {...type} />
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

export default Support;
