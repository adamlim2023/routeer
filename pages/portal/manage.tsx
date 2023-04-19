import React from "react";
import MainLayout from "components/layout/MainLayuout";
import Link from "next/link";
import Layout from "features/portal/Layout";
import Button from "components/common/Button";
import RouteCard from "components/common/RouteCard";

const PortalDashboard = () => {
  const routes = [
    {
      journey: {
        from: "Penzance Ferry Terminal, Penzance, UK",
        to: "Sennen Beach, Sennen, Penzance, UK",
      },
      type: "/images/icons/scooter_hotpink.svg",
      price: "£4.00",
      time: "0h 40min",
      rate: 3,
      reviewCount: 125,
      transportInfo: {
        avatar: "/images/icons/user_cyanblue.svg",
        name: "Transport provider name",
        covid: true,
      },
    },
    {
      journey: {
        from: "Penzance Ferry Terminal, Penzance, UK",
        to: "Sennen Beach, Sennen, Penzance, UK",
      },
      type: "/images/icons/scooter_hotpink.svg",
      price: "£4.00",
      time: "0h 40min",
      rate: 3,
      reviewCount: 125,
      transportInfo: {
        avatar: "/images/icons/user_cyanblue.svg",
        name: "Transport provider name",
        covid: true,
      },
    },
    {
      journey: {
        from: "Penzance Ferry Terminal, Penzance, UK",
        to: "Sennen Beach, Sennen, Penzance, UK",
      },
      type: "/images/icons/scooter_hotpink.svg",
      price: "£4.00",
      time: "0h 40min",
      rate: 3,
      reviewCount: 125,
      transportInfo: {
        avatar: "/images/icons/user_cyanblue.svg",
        name: "Transport provider name",
        covid: true,
      },
    },
    {
      journey: {
        from: "Penzance Ferry Terminal, Penzance, UK",
        to: "Sennen Beach, Sennen, Penzance, UK",
      },
      type: "/images/icons/scooter_hotpink.svg",
      price: "£4.00",
      time: "0h 40min",
      rate: 3,
      reviewCount: 125,
      transportInfo: {
        avatar: "/images/icons/user_cyanblue.svg",
        name: "Transport provider name",
        covid: true,
      },
    },
    {
      journey: {
        from: "Penzance Ferry Terminal, Penzance, UK",
        to: "Sennen Beach, Sennen, Penzance, UK",
      },
      type: "/images/icons/scooter_hotpink.svg",
      price: "£4.00",
      time: "0h 40min",
      rate: 3,
      reviewCount: 125,
      transportInfo: {
        avatar: "/images/icons/user_cyanblue.svg",
        name: "Transport provider name",
        covid: true,
      },
    },
    {
      journey: {
        from: "Penzance Ferry Terminal, Penzance, UK",
        to: "Sennen Beach, Sennen, Penzance, UK",
      },
      type: "/images/icons/scooter_hotpink.svg",
      price: "£4.00",
      time: "0h 40min",
      rate: 3,
      reviewCount: 125,
      transportInfo: {
        avatar: "/images/icons/user_cyanblue.svg",
        name: "Transport provider name",
        covid: true,
      },
    },
  ];

  return (
    <MainLayout>
      <Layout active="manage">
        <div className="pt-4 pb-10 px-3">
          <div className="flex justify-end mb-2">
            <Button variant="danger">
              <Link href="/search/add/route">add new route</Link>
            </Button>
          </div>
          <div>
            <p className="text-[40px] font-bold text-cyanblue mb-6">Routes</p>
            <div>
              {routes.map((route, index) => {
                return (
                  <div key={index} className="mb-4">
                    <RouteCard {...route} />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Layout>
    </MainLayout>
  );
};

export default PortalDashboard;
