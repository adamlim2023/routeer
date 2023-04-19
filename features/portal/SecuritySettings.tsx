import React from "react";
import { Col, Row } from "components/common/Grid";
import TextField from "components/common/TextField";

const SecuritySettings = () => {
  return (
    <div>
      <Row className="mb-[25px] tablet:mb-[30px]">
        <Col size={["full", "5/12", "5/12"]} />
        <Col size={["full", "7/12", "7/12"]}>
          <p className="text-xl tablet:text-2xl text-cyanblue">
            Security Settings
          </p>
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
          <TextField type="password" placeholder="Input field text" />
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
          <TextField type="password" placeholder="Input field text" />
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
          <TextField type="password" placeholder="Input field text" />
        </Col>
      </Row>
    </div>
  );
};

export default SecuritySettings;
