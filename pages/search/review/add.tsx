import React, { useState } from "react";
import MainLayout from "components/layout/MainLayuout";
import Card from "components/common/Card";
import { Col, Row } from "components/common/Grid";
import WizardHeader from "features/search/WizardHeader";
import Score from "features/search/Score";
import Journey from "features/search/Journey";
import Review from "features/search/Review";
import Photos from "features/search/Photos";
import Summary from "features/search/Summary";

const AddReview = () => {
  const [index, setIndex] = useState(0);
  const wizard = [
    {
      label: "Score",
      component: (
        <Score handleBack={() => setIndex(0)} handleNext={() => setIndex(1)} />
      ),
    },
    {
      label: "Characteristics",
      component: (
        <Journey
          handleBack={() => setIndex(0)}
          handleNext={() => setIndex(2)}
        />
      ),
    },
    {
      label: "Your Review",
      component: (
        <Review handleBack={() => setIndex(1)} handleNext={() => setIndex(3)} />
      ),
    },
    {
      label: "Photos",
      component: (
        <Photos handleBack={() => setIndex(2)} handleNext={() => setIndex(4)} />
      ),
    },
    {
      label: "Summary",
      component: (
        <Summary
          handleBack={() => setIndex(3)}
          handleNext={() => setIndex(4)}
        />
      ),
    },
  ];

  return (
    <MainLayout>
      <div className="max-w-[1440px] mx-auto pt-[65px] px-4 tablet:px-16 relative">
        <div className="px-0 desktop:px-[110px]">
          <div className="pt-6 tablet:pt-14 desktop:pt-8 pb-9 tablet:pb-10 desktop:pb-[120px]">
            <div>
              <Row className="mx-0 desktop:-mx-4">
                <Col className="w-full tablet:w-full desktop:w-1/5 px-0 desktop:px-4"></Col>
                <Col className="w-full tablet:w-full desktop:w-4/5 px-0 desktop:px-4">
                  <p className="font-bold text-[40px] text-hotpink mb-5">
                    Add Review
                  </p>
                  <div>
                    <p className="text-2xl font-bold text-darkgray mb-2 tablet:mb-2.5 desktop:mb-4">
                      The route
                    </p>
                    <div className="flex flex-wrap items-start mb-5">
                      <div className="flex items-center mr-0 tablet:mr-12 mb-2 desktop:mb-0">
                        <div className="mr-0.5">
                          <img
                            src="/images/icons/journey_md.svg"
                            className="hidden desktop:flex"
                            alt=""
                          />
                          <img
                            src="/images/icons/journey.svg"
                            className="flex desktop:hidden"
                            alt=""
                          />
                        </div>
                        <div className="text-base text-gray">
                          <p className="mb-1 tablet:mb-4 desktop:mb-6">
                            Penzance Ferry Terminal, Penzance, UK
                          </p>
                          <p>Sennen Beach, Sennen, Penzance, UK</p>
                        </div>
                      </div>
                      <img
                        src="/images/icons/scooter_hotpink.svg"
                        className="mr-10"
                        alt=""
                      />
                      <div className="flex items-center mt-2 tablet:mt-0">
                        <div className="mr-2 w-8 h-8 rounded-full shadow-theme bg-gradient-to-r from-[#DEDEDE] to-[#F2F2F200] bg-[#FAFAFA] flex items-center justify-center">
                          <img src="/images/icons/user_cyanblue.svg" alt="" />
                        </div>
                        <p className="text-base desktop:text-xl text-darkgray">
                          Transport provider name
                        </p>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
              <Row className="mx-0 desktop:-mx-4">
                <Col className="w-full tablet:w-full desktop:w-1/5 px-0 desktop:px-4">
                  <Card className="mb-5 rounded-[10px] desktop:rounded-[20px]">
                    <WizardHeader
                      header={wizard.map((item) => item.label)}
                      index={index}
                    />
                  </Card>
                </Col>
                <Col className="w-full tablet:w-full desktop:w-4/5 px-0 desktop:px-4">
                  {wizard[index].component}
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default AddReview;
