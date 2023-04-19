import React, { useState, useEffect } from "react";

interface Props {
  onClick?: (event: any) => void;
}
const PlacePredict = (props) => {
  const [placeArr, setPlaceArr] = useState([]);
  useEffect(() => {
    setPlaceArr(props.data);
  }, [props.data]);

  const handleClick = (place) => {
    props.onClick(place);
    setPlaceArr([]);
  };
  return (
    <>
      {placeArr.length > 0 && (
        <div className="absolute p-2 bg-light z-10 rounded-md shadow-theme mt-1">
          {placeArr?.map((item, index) => {
            return (
              <div
                key={index}
                className="cursor-pointer hover:bg-white leading-6 py-1"
                onClick={() =>
                  handleClick(item.structured_formatting.main_text)
                }
              >
                <b className="text-darkgray">
                  {item.structured_formatting.main_text}
                </b>{" "}
                <span className="text-gray">
                  {item.structured_formatting.secondary_text}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default PlacePredict;
