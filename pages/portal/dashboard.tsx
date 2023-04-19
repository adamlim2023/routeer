import React from "react";
import MainLayout from "components/layout/MainLayuout";
import Layout from "features/portal/Layout";
import Button from "components/common/Button";
import Card from "components/common/Card";

const PortalDashboard = () => {
  const data = [
    {
      avatar: "/images/pages/portal/route.svg",
      value: 14,
      name: "Number of routes",
      button: "add route",
      color: "bg-[#E7245B]",
    },
    {
      avatar: "/images/pages/portal/page_view.svg",
      value: 372,
      name: "Page views",
      button: "view more",
      color: "bg-[#E7245B80]",
    },
    {
      avatar: "/images/pages/portal/timetable_views.svg",
      value: 4837,
      name: "Timetable views",
      button: "view more",
      color: "bg-[#E7245B60]",
    },
    {
      avatar: "/images/pages/portal/review.svg",
      value: 4.2,
      name: "Review score",
      button: "view more",
      color: "bg-[#E7245B40]",
    },
    {
      avatar: "/images/pages/portal/traveler_review.svg",
      value: 76,
      name: "Traveler reviews",
      button: "view more",
      color: "bg-[#E7245B20]",
    },
  ];

  return (
    <MainLayout>
      <Layout active="dashboard" analystics={false}>
        <div className="py-14">
          <div className="-mx-2 tablet:-mx-4 flex flex-wrap items-stretch">
            {data.map((item, index) => {
              return (
                <div
                  key={index}
                  className="w-full tablet:w-1/3 px-2 tablet:px-4 mb-5 tablet:mb-10"
                >
                  <Card className="h-full flex flex-col overflow-hidden">
                    <div className="h-full pt-4 px-5 desktop:pt-6 pb-4">
                      <img src={item.avatar} alt="" />
                      <p className="text-[40px] desktop:text-[64px] font-bold text-gray my-4 leading-none">
                        {item.value}
                      </p>
                      <p className="text-xl desktop:text-2xl text-gray leading-none">
                        {item.name}
                      </p>
                    </div>
                    <div
                      className={`flex flex-shrink-0 justify-center p-3 desktop:p-5 ${item.color}`}
                    >
                      <Button variant="danger-text">{item.button}</Button>
                    </div>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </Layout>
    </MainLayout>
  );
};

export default PortalDashboard;
