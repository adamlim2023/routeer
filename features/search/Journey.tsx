import React, { FC } from "react";
import Button from "components/common/Button";
import Card from "components/common/Card";
import { Col, Row } from "components/common/Grid";
import TimeField from "components/common/TimeField";
import TextField from "components/common/TextField";
import MultiSelect from "components/common/MultiSelect";

interface Props {
  handleNext: () => void;
  handleBack: () => void;
}

const Journey: FC<Props> = (props) => {
  const options = [
    { value: "senic", label: "Scenic" },
    { value: "pet", label: "Pet fiendly" },
    { value: "covid", label: "covid conscious" },
    { value: "food", label: "onboard food & drinks" },
  ];

  return (
    <Card className="py-8 px-4 pb-4 tablet:p-8 tablet:pb-6">
      <div>
        <p className="text-2xl font-bold text-hotpink mb-[5px] tablet:mb-2.5">
          Journey Description*
        </p>
        <p className="text-base tablet:text-xl text-darkgray mb-7">
          Share some details about the journey
        </p>
        <div className="">
          <Row className="mx-0 tablet:-mx-3 mb-2.5">
            <Col size={["full", "1/2", "1/2"]} className="px-0 tablet:px-3">
              <TimeField
                label="Journey Time*"
                className="mb-5"
                defaultHourValue={5}
                defaultMinuteValue={25}
              />
            </Col>
            <Col size={["full", "1/2", "1/2"]} className="px-0 tablet:px-3">
              <TextField
                label="Journey Cost*"
                className="mb-5"
                icon={
                  <span className="text-sm text-gray font-bold mx-2 block">
                    GBP
                  </span>
                }
              />
            </Col>
          </Row>
        </div>
      </div>
      <div className="mb-10">
        <p className="text-2xl font-bold text-hotpink mb-[5px] tablet:mb-2.5">
          Journey Characteristics
        </p>
        <p className="text-base tablet:text-xl text-darkgray mb-7">
          Choose up to 10
        </p>
        <div className="mb-5">
          <MultiSelect options={options} />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <Button variant="danger-text" onClick={props.handleBack}>
            previous
          </Button>
          <span className="text-sm text-[#BCBCBB] font-bold uppercase mt-2.5">
            score
          </span>
        </div>
        <div className="flex flex-col items-end">
          <Button variant="danger" onClick={props.handleNext}>
            next
          </Button>
          <span className="text-sm text-[#BCBCBB] font-bold uppercase mt-2.5">
            your review
          </span>
        </div>
      </div>
    </Card>
  );
};

export default Journey;
