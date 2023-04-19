import React, { FC, useEffect, useState } from "react";
import useGoogle from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import Link from "next/link";
import Button from "components/common/Button";
import TextField from "components/common/TextField";
import Tag from "./Tag";
import PlacePredict from "../PlacePredict";

interface Props {
  isResearch?: boolean;
  fromLabel?: string;
  toLabel?: string;
}

const TravelRoute: FC<Props> = (props) => {
  const tags = {
    road: {
      isChecked: true,
      tooltip: "Road",
      icon: "images/icons/bus.svg",
    },
    rail: {
      isChecked: true,
      tooltip: "Rail",
      icon: "images/icons/train.svg",
    },
    water: {
      isChecked: true,
      tooltip: "Water",
      icon: "images/icons/boat.svg",
    },
    air: {
      isChecked: true,
      tooltip: "Air",
      icon: "images/icons/air.svg",
    },
  };

  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const {
    placePredictions: fromPlacePredictions,
    getPlacePredictions: getFromplacePredictions,
    isPlacePredictionsLoading: isFromPlacePredictionsLoading,
  } = useGoogle({
    apiKey: process.env.GOOGLE_API_KEY,
  });
  const {
    placePredictions: toPlacePredictions,
    getPlacePredictions: getToPlacePredictions,
    isPlacePredictionsLoading: isToPlacePredictionsLoading,
  } = useGoogle({
    apiKey: process.env.GOOGLE_API_KEY,
  });

  const fromClick = (place) => {
    setFrom(place);
  };
  const toClick = (place) => {
    setTo(place);
  };

  return (
    <div className="px-4 pt-8 pb-5 tablet:p-6 tablet:pb-8 rounded-[20px] bg-[#F2F2F290]">
      <div className="w-full flex flex-col items-center">
        {!props.isResearch && (
          <p className="text-[40px] font-bold mb-8 leading-none text-darkgray text-center tracking-[-1px]">
            <span className="text-hotpink">Where</span> would you like to go?
          </p>
        )}
        <div className="w-full tablet:w-max flex flex-col desktop:flex-row items-center desktop:items-start">
          <div
            className={`w-full flex flex-col items-center ${
              !props.isResearch && `mb-2 tablet:mb-[30px] desktop:mb-0`
            }`}
          >
            <div className="w-full flex flex-col tablet:flex-row items-center mb-5 relative">
              <div className="relative">
                <TextField
                  value={from}
                  onChange={(evt) => {
                    getFromplacePredictions({ input: evt.target.value });
                    setFrom(evt.target.value);
                  }}
                  placeholder={props.fromLabel}
                  className="w-full tablet:w-[275px] desktop:w-[307px] mb-3 tablet:mb-0"
                  icon={<img src="/images/icons/from_marker.svg" />}
                />
                {!isFromPlacePredictionsLoading && (
                  <PlacePredict
                    data={fromPlacePredictions}
                    onClick={fromClick}
                  />
                )}
              </div>
              <Button className="flex-shrink-0 tablet:mx-2.5 w-[30px] h-[30px] rounded-full shadow-theme border border-hotpink bg-light -translate-x-1/2 -translate-y-1/2 rotate-90 tablet:transform-none absolute tablet:relative top-1/2 left-1/2 tablet:inset-0">
                <img src="/images/icons/swap.svg" alt="" />
              </Button>
              <div className="relative">
                <TextField
                  value={to}
                  onChange={(evt) => {
                    getToPlacePredictions({ input: evt.target.value });
                    setTo(evt.target.value);
                  }}
                  placeholder={props.toLabel}
                  className="w-full tablet:w-[275px] desktop:w-[307px]"
                  icon={<img src="/images/icons/to_marker.svg" />}
                />
                {!isToPlacePredictionsLoading && (
                  <PlacePredict
                    data={toPlacePredictions}
                    onClick={toClick}
                  />
                )}
              </div>
            </div>
            <div className="flex flex-col tablet:flex-row items-center">
              <div className="flex flex-col tablet:flex-row">
                <div className="flex">
                  <div className="mx-[5px] mb-2.5 tablet:mx-2.5 tablet:mb-0">
                    <Tag {...tags.road} />
                  </div>
                  <div className="mx-[5px] mb-2.5 tablet:mx-2.5 tablet:mb-0">
                    <Tag {...tags.rail} />
                  </div>
                </div>
                <div className="flex">
                  <div className="mx-[5px] mb-2.5 tablet:mx-2.5 tablet:mb-0">
                    <Tag {...tags.water} />
                  </div>
                  <div className="mx-[5px] mb-2.5 tablet:mx-2.5 tablet:mb-0">
                    <Tag {...tags.air} />
                  </div>
                </div>
              </div>
              {props.isResearch && (
                <div className="ml-0 tablet:ml-4">
                  <Button variant="danger">Sear again</Button>
                </div>
              )}
            </div>
          </div>
          {!props.isResearch && (
            <div className="ml-0 desktop:ml-2.5 flex-shrink-0">
              <Button variant="danger">
                <Link href="/search">Let's go</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

TravelRoute.defaultProps = {
  isResearch: false,
  fromLabel: "Input field text",
  toLabel: "Input field text",
};

export default TravelRoute;
