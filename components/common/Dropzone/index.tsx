import React, { useState, useRef } from "react";

const Dropzone = (props) => {
  const [files, setFiles] = useState<string[]>(props.files);
  const [dragging, setDragging] = useState<boolean>(false);
  const [dragCounter, setDragCounter] = useState<number>(0);
  const fileRef = useRef<HTMLInputElement>();

  const handleSelectFile = () => {
    fileRef.current.click();
  };

  const handleChangeFileInput = (e) => {
    let fileLists = files;
    Object.keys(e.target.files).map((index) => {
      fileLists.push(e.target.files[index].name);
    });
    setFiles(fileLists);
  };

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragIn = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragCounter(dragCounter + 1);
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setDragging(true);
    }
  };

  const handleDragOut = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragCounter(dragCounter - 1);
    if (dragCounter > 0) return;
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      props.handleDrop(e.dataTransfer.files);
      e.dataTransfer.clearData();
      setDragCounter(0);
    }
  };

  return (
    <div>
      {props.label && (
        <div className="mb-3">
          {typeof props.label === "string" ? (
            <p className="text-base font-bold text-darkgray">{props.label}</p>
          ) : (
            <>{props.label}</>
          )}
        </div>
      )}
      <div
        className="w-full relative"
        onDragEnter={handleDragIn}
        onDragLeave={handleDragOut}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        {dragging && (
          <div className="absolute inset-0 bg-[#FFFFFF90] border-2 border-dashed border-hotpink z-20 rounded-[20px]">
            <div className="absolute inset-0 text-gray text-2xl uppercase flex items-center justify-center">
              <div>drop here</div>
            </div>
          </div>
        )}
        <div className="w-full min-h-[150px] h-auto rounded-[20px] shadow-smallInner bg-gradient-to-r from-[#DEDEDE] to-[#F2F2F200] bg-[#FAFAFA]">
          {files.length === 0 ? (
            <div className="absolute w-full top-1/2 transform -translate-y-1/2 flex items-center justify-center text-base text-gray">
              Drag & Drop your files or
              <span
                onClick={handleSelectFile}
                className="underline cursor-pointer ml-1"
              >
                Browse
              </span>
            </div>
          ) : (
            <div className="text-base text-darkgray w-full px-5 py-2">
              {files.map((file, index) => {
                return <p key={index}>{file}</p>;
              })}
            </div>
          )}
        </div>
      </div>
      <input
        type="file"
        ref={fileRef}
        className="hidden"
        multiple
        onChange={handleChangeFileInput}
      />
    </div>
  );
};

export default Dropzone;
