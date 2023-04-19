import React, { FC, useEffect } from "react";

interface Props {
  isShow: boolean;
  children: React.ReactElement;
  handleClose?: () => void;
  maxWidth?: string;
  hasCloseButton?: boolean;
  className?: string;
}

const Modal: FC<Props> = (props) => {
  useEffect(() => {
    document.body.style.overflow = props.isShow ? "hidden" : "auto";
  }, [props.isShow]);

  return (
    <>
      {props.isShow && (
        <div
          className={`z-50 fixed top-0 left-0 w-screen h-screen bg-[#BCBCBB50] px-3 tablet:px-6 overflow-y-auto pt-24 ${
            props.hasCloseButton ? `pr-5` : ``
          }`}
        >
          <div
            className={`${props.maxWidth} ${props.className} w-full bg-light relative left-1/2 transform -translate-x-1/2 rounded-[20px] mb-20`}
          >
            {props.hasCloseButton && (
              <button
                className="w-10 h-10 rounded-full bg-cyanblue shadow-theme flex items-center justify-center absolute -top-2 -right-3 z-50"
                onClick={props.handleClose}
              >
                <img src="/images/icons/close.svg" alt="" />
              </button>
            )}
            {React.cloneElement(props.children, props)}
          </div>
        </div>
      )}
    </>
  );
};

Modal.defaultProps = {
  maxWidth: "max-w-5xl",
  hasCloseButton: true,
};

export default Modal;
