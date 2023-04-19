import React, { FC } from "react";
import Card from "../Card";
import Reviewer from "./Reviewer";
import Rating from "../Rating";
import { Col, Row } from "../Grid";
import Tag from "../Tag";
import TransportProvider from "./TransportProvider";

interface TagProps {
  name: string;
  color: string;
}

interface TransportProviderProps {
  name: string;
  avatar: string;
  rating: number;
  reviewCount: number;
}

interface JourneyProps {
  from: string;
  to: string;
  time: string;
  cost: string;
}

interface ScoreProps {
  quality: number;
  value: number;
  service: number;
}

interface Props {
  name: string;
  date: string;
  avatar: string;
  rating: number;
  review: string;
  tags: TagProps[];
  assets?: string[];
  mine: boolean;
  transportProviderInfo: TransportProviderProps;
  journey: JourneyProps;
  score: ScoreProps;
}

const ReviewCard: FC<Props> = (props) => {
  return (
    <Card className="flex flex-col-reverse desktop:flex-row relative">
      <button className="absolute top-5 right-5 cursor-pointer">
        <img src="/images/icons/more.svg" alt="" />
      </button>
      <div className="w-full desktop:w-[62.5%] px-4 tablet:px-6 desktop:px-5 pt-3 pb-4">
        <div className="flex items-end tablet:items-center justify-between mb-5 absolute desktop:relative top-0 left-0 w-full pt-4 px-3.5 tablet:p-5 desktop:p-0">
          <Reviewer name={props.name} date={props.date} avatar={props.avatar} />
          <Rating
            rating={props.rating}
            active={
              <img
                src="/images/icons/star_hotpink.svg"
                className="w-[18px] tablet:w-7 mx-0.5 tablet:mx-1"
              />
            }
            inactive={
              <img
                src="/images/icons/star_hotpink_outline.svg"
                className="w-[18px] tablet:w-7 mx-0.5 tablet:mx-1"
              />
            }
          />
        </div>
        <div>
          <p className="text-base text-gray leading-snug mb-5">
            {props.review}
          </p>
          {props.assets && (
            <Row className="-mx-2.5 tablet:-mx-3 mb-5">
              {props.assets.map((assets: string, index: number) => {
                return (
                  <Col
                    size={["1/2", "1/3", "1/3"]}
                    className="px-2.5 tablet:px-3 mb-3.5"
                    key={index}
                  >
                    <img src={assets} alt="" className="w-full h-full" />
                  </Col>
                );
              })}
            </Row>
          )}
        </div>
        <div className="flex flex-wrap flex-col tablet:flex-row relative mb-2">
          {props.tags &&
            props.tags.map((tag, index) => {
              return (
                <div className="pb-2 pr-2 tablet:px-1 tablet:pb-4" key={index}>
                  <Tag {...tag} />
                </div>
              );
            })}
          <span className="cursor-pointer text-hotpink text-base underline font-bold absolute bottom-2 tablet:bottom-4 right-0">
            View more
          </span>
        </div>

        <TransportProvider {...props.transportProviderInfo} />
      </div>
      <div className="w-full desktop:w-[37.5%] flex flex-col tablet:flex-row desktop:flex-col desktop:border-l border-cyanblue px-0 pt-[70px] tablet:pt-[100px] desktop:pt-11">
        <div className="flex items-center pb-2.5 desktop:pb-8 w-full tablet:w-1/2 desktop:w-full border-b border-cyanblue desktop:border-0 px-4 tablet:px-6 desktop:px-5">
          <div>
            <img
              src="/images/icons/journey_long.svg"
              className="hidden tablet:flex"
              alt=""
            />
            <img
              src="/images/icons/journey.svg"
              className="tablet:hidden"
              alt=""
            />
          </div>
          <div className="ml-5 text-base tablet:text-xl text-gray">
            <p className="mb-0 tablet:mb-6">{props.journey.from}</p>
            <p>{props.journey.to}</p>
          </div>
        </div>
        <div className="w-full tablet:w-1/2 desktop:w-full tablet:border-b border-cyanblue desktop:border-0 px-4 tablet:px-6 desktop:px-4 pt-2.5 tablet:pb-0">
          <div className="flex items-center mb-3 tablet:mb-5">
            <div className="flex items-center w-1/2">
              <img src="/images/icons/star_hotpink_sm.svg" alt="" />
              <span className="text-base font-bold text-gray ml-3 uppercase">
                quality:
              </span>
            </div>
            <div className="w-1/2">
              <Rating
                rating={props.score.quality}
                active={
                  <img
                    src="/images/icons/star_cyanblue.svg"
                    className="w-[18px] mx-0.5"
                  />
                }
                inactive={
                  <img
                    src="/images/icons/star_cyanblue_outline.svg"
                    className="w-[18px] mx-0.5"
                  />
                }
              />
            </div>
          </div>
          <div className="flex items-center mb-3 tablet:mb-5">
            <div className="flex items-center w-1/2">
              <img src="/images/icons/heart.svg" alt="" />
              <span className="text-base font-bold text-gray ml-3 uppercase">
                value:
              </span>
            </div>
            <div className="w-1/2">
              <Rating
                rating={props.rating}
                active={
                  <img
                    src="/images/icons/star_cyanblue.svg"
                    className="w-[18px] mx-0.5"
                  />
                }
                inactive={
                  <img
                    src="/images/icons/star_cyanblue_outline.svg"
                    className="w-[18px] mx-0.5"
                  />
                }
              />
            </div>
          </div>
          <div className="flex items-center mb-3 tablet:mb-5">
            <div className="flex items-center w-1/2">
              <img src="/images/icons/service.svg" alt="" />
              <span className="text-base font-bold text-gray ml-3 uppercase">
                service:
              </span>
            </div>
            <div className="w-1/2">
              <Rating
                rating={props.score.service}
                active={
                  <img
                    src="/images/icons/star_cyanblue.svg"
                    className="w-[18px] mx-0.5"
                  />
                }
                inactive={
                  <img
                    src="/images/icons/star_cyanblue_outline.svg"
                    className="w-[18px] mx-0.5"
                  />
                }
              />
            </div>
          </div>
          <div className="flex items-center mb-3 tablet:mb-5">
            <div className="flex items-center w-1/2">
              <img src="/images/icons/time.svg" alt="" />
              <span className="text-base font-bold text-gray ml-3 uppercase">
                journey time:
              </span>
            </div>
            <div className="w-1/2">
              <span className="text-base font-bold text-gray ml-3 uppercase">
                {props.journey.time}
              </span>
            </div>
          </div>
          <div className="flex items-center mb-3 tablet:mb-5">
            <div className="flex items-center w-1/2">
              <img src="/images/icons/pound.svg" alt="" />
              <span className="text-base font-bold text-gray ml-3 uppercase">
                Jonrney Cost:
              </span>
            </div>
            <div className="w-1/2">
              <span className="text-base font-bold text-gray ml-3 uppercase">
                {props.journey.cost}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ReviewCard;
