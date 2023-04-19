import React, { FC, useState } from "react";
import Button from "components/common/Button";
import Dropzone from "components/common/Dropzone";
import { Col, Row } from "components/common/Grid";
import TextField from "components/common/TextField";
import MultiSelect from "components/common/MultiSelect";
import BannerUploader from "./BannerUploader";
import AvatarUploader from "./AvatarUploader";

const TransportProviderModal = (props) => {
  const [photos, setPhotos] = useState<string[]>([]);
  const handleDropPhotos = (selectedFiles) => {
    let fileList = photos;
    for (var i = 0; i < selectedFiles.length; i++) {
      if (!selectedFiles[i].name) return;
      fileList.push(selectedFiles[i].name);
    }
    setPhotos(fileList);
  };

  const transportTypeOptions = [
    { value: "scooter", label: "scooter" },
    { value: "tuk", label: "tuk tuk" },
  ];

  const topCharacteristicOptions = [
    { value: "scenic", label: "Scenic" },
    { value: "pet", label: "Pet fiendly" },
    { value: "covid", label: "covid conscious" },
    { value: "food", label: "onboard food & drinks" },
  ];

  return (
    <div>
      <BannerUploader />
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
              Name <span className="text-hotpink">*</span>
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
              Type of transport <span className="text-hotpink">*</span>
            </p>
          </Col>
          <Col size={["full", "7/12", "7/12"]}>
            <MultiSelect
              id="transportType"
              instanceId="transportType"
              placeholder="Input field text"
              options={transportTypeOptions}
            />
          </Col>
        </Row>
        <Row className="mb-6 tablet:mb-5">
          <Col
            size={["full", "5/12", "5/12"]}
            className="flex justify-start tablet:justify-end items-center"
          >
            <p className="text-base text-darkgray font-bold mb-2 tablet:mb-0 pr-0 tablet:pr-8">
              Location
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
            className="flex justify-start tablet:justify-end items-center"
          >
            <p className="text-base text-darkgray font-bold mb-2 tablet:mb-0 pr-0 tablet:pr-8">
              Phone number
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
              Contact email
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
        <Row className="mb-6 tablet:mb-5">
          <Col
            size={["full", "5/12", "5/12"]}
            className="flex justify-start tablet:justify-end items-center"
          >
            <p className="text-base text-darkgray font-bold mb-2 tablet:mb-0 pr-0 tablet:pr-8">
              Top characteristics
            </p>
          </Col>
          <Col size={["full", "7/12", "7/12"]}>
            <MultiSelect
              id="topCharacteristics"
              instanceId="topCharacteristics"
              placeholder="Input field text"
              options={topCharacteristicOptions}
            />
          </Col>
        </Row>
        <Row className="mb-6 tablet:mb-5">
          <Col
            size={["full", "5/12", "5/12"]}
            className="flex justify-start tablet:justify-end items-center"
          >
            <p className="text-base text-darkgray font-bold mb-2 tablet:mb-0 pr-0 tablet:pr-8">
              Facebook
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
              Instagram
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
              Twitter
            </p>
          </Col>
          <Col size={["full", "7/12", "7/12"]}>
            <TextField placeholder="Input field text" />
          </Col>
        </Row>
        <Row className="mb-[60px]">
          <Col size={["full", "5/12", "5/12"]} />
          <Col size={["full", "7/12", "7/12"]}>
            <p className="text-2xl text-cyanblue mb-3.5 desktop:mb-6">Photos</p>
            <Dropzone files={photos} handleDrop={handleDropPhotos} />
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

export default TransportProviderModal;
