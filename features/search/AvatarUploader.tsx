import React, { useRef, useState } from "react";

const AvatarUploader = () => {
  const [image, setImage] = useState(null);
  const fileRef = useRef<HTMLInputElement>();
  const handleChange = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  return (
    <div>
      <div className="relative">
        <div className="w-[100px] h-[100px] tablet:w-[150px] tablet:h-[150px] desktop:w-[182px] desktop:h-[182px] rounded-full shadow-theme bg-gradient-to-r from-[#DEDEDE] to-[#F2F2F200] bg-[#FAFAFA] flex items-end justify-center p-2 tablet:p-3 desktop:p-4">
          <img
            src={image ? image : `/images/pages/search/user.svg`}
            className="w-full h-full rounded-full object-cover"
            alt=""
          />
        </div>
        <button
          className="absolute w-10 h-10 rounded-full shadow-theme bg-hotpink flex items-center justify-center bottom-0 right-0 tablet:-right-2.5 desktop:right-4 outline-none"
          onClick={() => fileRef.current.click()}
        >
          <img src="/images/icons/pencil.svg" alt="" />
        </button>
      </div>

      <input
        type="file"
        className="hidden"
        ref={fileRef}
        onChange={handleChange}
      />
    </div>
  );
};

export default AvatarUploader;
