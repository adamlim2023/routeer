import React from "react";
import { Col, Row } from "components/common/Grid";
import TextField from "components/common/TextField";
import MultiSelect from "components/common/MultiSelect";

const ProfileInformation = () => {
  const TransportTypeOptions = [
    { value: "scooter", label: "Scooter" },
    { value: "minivan", label: "Minivan" },
  ];

  const topCharacteristicOptions = [
    { value: "senic", label: "Scenic" },
    { value: "pet", label: "Pet fiendly" },
    { value: "covid", label: "covid conscious" },
    { value: "food", label: "onboard food & drinks" },
  ];

  return (
    <div>
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
            Company name
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
            Type of transport
          </p>
        </Col>
        <Col size={["full", "7/12", "7/12"]}>
          <MultiSelect options={TransportTypeOptions} />
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
      <Row className="pb-6 tablet:pb-5 border-b border-cyanblue">
        <Col
          size={["full", "5/12", "5/12"]}
          className="flex justify-start tablet:justify-end items-center"
        >
          <p className="text-base text-darkgray font-bold mb-2 tablet:mb-0 pr-0 tablet:pr-8">
            Top characteristics
          </p>
        </Col>
        <Col size={["full", "7/12", "7/12"]}>
          <MultiSelect options={topCharacteristicOptions} />
        </Col>
      </Row>
      <Row className="mb-6 tablet:mb-5 pt-6 tablet:pt-5 border-t border-cyanblue">
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
          <TextField type="number" placeholder="Input field text" />
        </Col>
      </Row>
      <Row className="pb-6 tablet:pb-5 border-b border-cyanblue">
        <Col
          size={["full", "5/12", "5/12"]}
          className="flex justify-start tablet:justify-end items-center"
        >
          <p className="text-base text-darkgray font-bold mb-2 tablet:mb-0 pr-0 tablet:pr-8">
            Contact email
          </p>
        </Col>
        <Col size={["full", "7/12", "7/12"]}>
          <TextField type="email" placeholder="Input field text" />
        </Col>
      </Row>
      <Row className="mb-6 tablet:mb-5 pt-6 tablet:pt-5 border-t border-cyanblue">
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
    </div>
  );
};

export default ProfileInformation;
