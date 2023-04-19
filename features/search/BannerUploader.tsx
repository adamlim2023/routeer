import React, { FC, useRef, useState } from "react";

interface Props {
  defaultImage?: string;
}

const BannerUploader: FC<Props> = (props) => {
  const [image, setImage] = useState(null);
  const fileRef = useRef<HTMLInputElement>();
  const handleChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div className="relative">
      <div className="h-[270px] desktop:h-[420px]">
        <img
          src={image ? image : props.defaultImage}
          className="w-full h-full rounded-t-[20px] object-cover"
          alt=""
        />
      </div>
      <button
        className="absolute w-10 h-10 rounded-full shadow-theme bg-hotpink flex items-center justify-center bottom-4 right-4 outline-none"
        onClick={() => fileRef.current.click()}
      >
        <img src="/images/icons/pencil.svg" alt="" />
      </button>
      <input
        type="file"
        className="hidden"
        accept="image/*"
        ref={fileRef}
        onChange={handleChange}
      />
    </div>
  );
};

BannerUploader.defaultProps = {
  defaultImage: "/images/pages/search/banner.png",
};

export default BannerUploader;
