import React, { FC, useState } from "react";
import Button from "components/common/Button";
import { Col, Row } from "components/common/Grid";
import TextField from "components/common/TextField";
import BannerUploader from "features/search/BannerUploader";
import AvatarUploader from "features/search/AvatarUploader";

const EditProfileModal = (props) => {
  return (
    <div>
      <button
        className="w-10 h-10 rounded-full bg-cyanblue shadow-theme flex items-center justify-center absolute top-6 right-6 z-50"
        onClick={props.handleClose}
      >
        <img src="/images/icons/close.svg" />
      </button>
      <BannerUploader defaultImage="/images/pages/profile/banner.png" />
      <div className="px-6 pt-[88px] pb-8 tablet:px-10 tablet:pt-[126px] desktop:px-[98px] desktop:pt-8 desktop:pb-12 relative">
        <div className="absolute top-0 left-8 tablet:left-5 desktop:left-10 transform -translate-y-1/2">
          <AvatarUploader />
        </div>
        <Row className="mb-[25px] tablet:mb-[30px]">
          <Col size={["full", "5/12", "5/12"]} />
          <Col size={["full", "7/12", "7/12"]}>
            <p className="text-xl tablet:text-2xl text-cyanblue">
              Profile information
            </p>
          </Col>
        </Row>
        <Row className="mb-6 tablet:mb-5">
          <Col
            size={["full", "5/12", "5/12"]}
            className="flex justify-start tablet:justify-end items-center"
          >
            <p className="text-base text-darkgray font-bold mb-2 tablet:mb-0 pr-0 tablet:pr-8">
              Location <span className="text-hotpink">*</span>
            </p>
          </Col>
          <Col size={["full", "7/12", "7/12"]}>
            <TextField placeholder="Input field text" />
          </Col>
        </Row>
        <Row className="mb-6 tablet:mb-5">
          <Col
            size={["full", "5/12", "5/12"]}
            className="flex justify-start tablet:justify-end items-center"
          >
            <p className="text-base text-darkgray font-bold mb-2 tablet:mb-0 pr-0 tablet:pr-8">
              Website
            </p>
          </Col>
          <Col size={["full", "7/12", "7/12"]}>
            <TextField placeholder="Input field text" />
          </Col>
        </Row>
        <Row className="mb-6 tablet:mb-5">
          <Col
            size={["full", "5/12", "5/12"]}
            className="flex justify-start tablet:justify-end"
          >
            <p className="text-base text-darkgray font-bold mb-2 tablet:mb-0 pr-0 tablet:pr-8">
              About us
            </p>
          </Col>
          <Col size={["full", "7/12", "7/12"]}>
            <TextField
              type="textarea"
              className="h-[150px]"
              placeholder="Input field text"
            />
          </Col>
        </Row>
        <Row className="mb-[25px] tablet:mb-[30px]">
          <Col size={["full", "5/12", "5/12"]} />
          <Col size={["full", "7/12", "7/12"]}>
            <p className="text-xl tablet:text-2xl text-cyanblue">
              Personal information
            </p>
          </Col>
        </Row>
        <Row className="mb-6 tablet:mb-5">
          <Col
            size={["full", "5/12", "5/12"]}
            className="flex justify-start tablet:justify-end items-center"
          >
            <p className="text-base text-darkgray font-bold mb-2 tablet:mb-0 pr-0 tablet:pr-8">
              First name
            </p>
          </Col>
          <Col size={["full", "7/12", "7/12"]}>
            <TextField placeholder="Input field text" />
          </Col>
        </Row>
        <Row className="mb-6 tablet:mb-5">
          <Col
            size={["full", "5/12", "5/12"]}
            className="flex justify-start tablet:justify-end items-center"
          >
            <p className="text-base text-darkgray font-bold mb-2 tablet:mb-0 pr-0 tablet:pr-8">
              Last name
            </p>
          </Col>
          <Col size={["full", "7/12", "7/12"]}>
            <TextField placeholder="Input field text" />
          </Col>
        </Row>
        <Row className="mb-10">
          <Col
            size={["full", "5/12", "5/12"]}
            className="flex justify-start tablet:justify-end items-center"
          >
            <p className="text-base text-darkgray font-bold mb-2 tablet:mb-0 pr-0 tablet:pr-8">
              Username
            </p>
          </Col>
          <Col size={["full", "7/12", "7/12"]}>
            <TextField placeholder="Input field text" />
          </Col>
        </Row>
        <Row className="mb-10">
          <Col
            size={["full", "5/12", "5/12"]}
            className="flex justify-start tablet:justify-end items-center"
          >
            <p className="text-base text-darkgray font-bold mb-2 tablet:mb-0 pr-0 tablet:pr-8">
              Email
            </p>
          </Col>
          <Col size={["full", "7/12", "7/12"]}>
            <TextField type="email" placeholder="Input field text" />
          </Col>
        </Row>
        <Row className="mb-[25px] tablet:mb-[30px]">
          <Col size={["full", "5/12", "5/12"]} />
          <Col size={["full", "7/12", "7/12"]}>
            <p className="text-xl tablet:text-2xl text-cyanblue">Security</p>
          </Col>
        </Row>
        <Row className="mb-6 tablet:mb-5">
          <Col
            size={["full", "5/12", "5/12"]}
            className="flex justify-start tablet:justify-end items-center"
          >
            <p className="text-base text-darkgray font-bold mb-2 tablet:mb-0 pr-0 tablet:pr-8">
              Current password
            </p>
          </Col>
          <Col size={["full", "7/12", "7/12"]}>
            <TextField placeholder="Input field text" />
          </Col>
        </Row>
        <Row className="mb-6 tablet:mb-5">
          <Col
            size={["full", "5/12", "5/12"]}
            className="flex justify-start tablet:justify-end items-center"
          >
            <p className="text-base text-darkgray font-bold mb-2 tablet:mb-0 pr-0 tablet:pr-8">
              New password
            </p>
          </Col>
          <Col size={["full", "7/12", "7/12"]}>
            <TextField placeholder="Input field text" />
          </Col>
        </Row>
        <Row className="mb-10">
          <Col
            size={["full", "5/12", "5/12"]}
            className="flex justify-start tablet:justify-end items-center"
          >
            <p className="text-base text-darkgray font-bold mb-2 tablet:mb-0 pr-0 tablet:pr-8">
              Re-type new password
            </p>
          </Col>
          <Col size={["full", "7/12", "7/12"]}>
            <TextField placeholder="Input field text" />
          </Col>
        </Row>
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
              SUBMIT TRANSPORT PROVIDER
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default EditProfileModal;
