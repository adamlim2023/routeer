import React, { FC, useState } from "react";
import Button from "components/common/Button";
import { Col, Row } from "components/common/Grid";
import BannerUploader from "features/search/BannerUploader";
import AvatarUploader from "features/search/AvatarUploader";
import ProfileInformation from "./ProfileInformation";
import CompanySettings from "./CompanySettings";
import SecuritySettings from "./SecuritySettings";

const EditProfileModal = (props) => {
  const tabs = [
    {
      id: "profile",
      label: "Profile Information",
    },
    {
      id: "company",
      label: "Company Settings",
    },
    {
      id: "security",
      label: "Security Settings",
    },
  ];

  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div>
      <button
        className="w-10 h-10 rounded-full bg-cyanblue shadow-theme flex items-center justify-center absolute top-6 right-6 z-50"
        onClick={props.handleClose}
      >
        <img src="/images/icons/close.svg" />
      </button>
      <BannerUploader />
      <div className="px-6 pt-[88px] pb-8 tablet:px-10 tablet:pt-[126px] desktop:px-[98px] desktop:pt-8 desktop:pb-12 relative">
        <div className="absolute top-0 left-8 tablet:left-5 desktop:left-10 transform -translate-y-1/2">
          <AvatarUploader />
        </div>
        <div className="flex items-center justify-end mb-8">
          {tabs.map((tab: any) => {
            return (
              <div
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`text-base text-darkgray font-bold uppercase mx-2 px-2 cursor-pointer ${
                  activeTab === tab.id
                    ? `border-b-[3px] border-hotpink`
                    : `border-b border-gray`
                }`}
              >
                {tab.label}
              </div>
            );
          })}
        </div>
        {activeTab === "profile" && <ProfileInformation />}
        {activeTab === "company" && <CompanySettings />}
        {activeTab === "security" && <SecuritySettings />}
        <Row>
          <Col
            size={["full", "full", "full"]}
            className="flex flex-col-reverse items-center tablet:flex-row justify-center"
          >
            <Button
              className="mx-4"
              variant="danger-text"
              onClick={props.handleClose}
            >
              Cancel
            </Button>
            <Button
              className="mx-0 tablet:mx-4 mb-5 tablet:mb-0"
              variant="danger"
              onClick={props.handleClose}
            >
              Update
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default EditProfileModal;
