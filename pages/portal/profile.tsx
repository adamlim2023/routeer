import React, { useState } from "react";
import MainLayout from "components/layout/MainLayuout";
import Button from "components/common/Button";
import Card from "components/common/Card";
import Modal from "components/common/Modal";
import Layout from "features/portal/Layout";
import PopularTags from "features/portal/PopularTags";
import Information from "features/portal/Information";
import GoogleMap from "features/portal/GoogleMap";
import EditProfileModal from "features/portal/EditProfileModal";

const PortalDashboard = () => {
  const [isShowModal, setIsShowModal] = useState(false);
  const tags = [
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

  return (
    <MainLayout>
      <Layout active="profile">
        <div className="py-4 pb-10">
          <div className="flex justify-end mb-4 tablet:mb-8">
            <Button variant="danger" onClick={() => setIsShowModal(true)}>
              edit profile
            </Button>
          </div>
          <div className="flex flex-wrap items-stretch -mx-2 tablet:-mx-4">
            <div className="w-full tablet:w-1/2 px-2 tablet:px-4 mb-4 tablet:mb-8">
              <Card className="h-full px-8 py-5">
                <p className="text-2xl text-hotpink mb-3">About us</p>
                <p className="text-base text-gray">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum. Duis aute irure dolor in
                  reprehenderit in voluptatety...
                  <span className="text-hotpink underline float-right">
                    Read more
                  </span>
                </p>
              </Card>
            </div>
            <div className="w-full tablet:w-1/2 px-2 tablet:px-4 mb-4 tablet:mb-8">
              <PopularTags tags={tags} />
            </div>
          </div>
          <div className="flex flex-wrap items-stretch -mx-2 tablet:-mx-4">
            <div className="w-full tablet:w-1/2 desktop:w-1/3 px-2 tablet:px-4 mb-4">
              <Information />
            </div>
            <div className="w-full tablet:w-1/2 desktop:w-2/3 px-2 tablet:px-4">
              <div className="mb-4 tablet:mb-8">
                <GoogleMap />
              </div>
              <div className="flex flex-wrap -mx-2 tablet:-mx-4">
                <div className="w-1/2 px-2 tablet:px-4 mb-4 tablet:mb-8">
                  <div className="shadow-large rounded-[20px] overflow-hidden">
                    <img
                      src="/images/pages/portal/routes/1.png"
                      className="w-full"
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-1/2 px-2 tablet:px-4 mb-4 tablet:mb-8">
                  <div className="shadow-large rounded-[20px] overflow-hidden">
                    <img
                      src="/images/pages/portal/routes/2.png"
                      className="w-full"
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-1/2 px-2 tablet:px-4 mb-4 tablet:mb-8">
                  <div className="shadow-large rounded-[20px] overflow-hidden">
                    <img
                      src="/images/pages/portal/routes/2.png"
                      className="w-full"
                      alt=""
                    />
                  </div>
                </div>
                <div className="w-1/2 px-2 tablet:px-4 mb-4 tablet:mb-8">
                  <div className="shadow-large rounded-[20px] overflow-hidden">
                    <img
                      src="/images/pages/portal/routes/3.png"
                      className="w-full"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
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

export default PortalDashboard;
