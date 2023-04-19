import React, { FC, useState } from "react";
import Button from "components/common/Button";
import Card from "components/common/Card";
import Dropzone from "components/common/Dropzone";

interface Props {
  handleNext: () => void;
  handleBack: () => void;
}

const Photos: FC<Props> = (props) => {
  const [photos, setPhotos] = useState<string[]>([]);
  const handleDropPhotos = (selectedFiles) => {
    let fileList = photos;
    for (var i = 0; i < selectedFiles.length; i++) {
      if (!selectedFiles[i].name) return;
      fileList.push(selectedFiles[i].name);
    }
    setPhotos(fileList);
  };

  return (
    <Card className="py-8 px-4 pb-4 tablet:p-8 tablet:pb-6">
      <p className="text-2xl font-bold text-hotpink mb-[5px] tablet:mb-2.5">
        Photos from journey
      </p>
      <p className="text-base tablet:text-xl text-darkgray mb-8">
        Share some photos from the journey
      </p>
      <div className="mb-10 tablet:mb-[60px]">
        <Dropzone
          files={photos}
          handleDrop={handleDropPhotos}
          className="h-40"
        />
      </div>
      <div className="flex justify-between">
        <div className="flex flex-col">
          <Button variant="danger-text" onClick={props.handleBack}>
            previous
          </Button>
          <span className="text-sm text-[#BCBCBB] font-bold uppercase mt-2.5">
            your review
          </span>
        </div>
        <div className="flex flex-col items-end">
          <Button variant="danger" onClick={props.handleNext}>
            next
          </Button>
          <span className="text-sm text-[#BCBCBB] font-bold uppercase mt-2.5">
            summary
          </span>
        </div>
      </div>
    </Card>
  );
};

export default Photos;
