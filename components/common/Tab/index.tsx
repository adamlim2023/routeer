import React, { FC, useState } from "react";
import {
  Tab as ReactTab,
  Tabs as ReactTabs,
  TabList as ReactTabList,
  TabPanel as ReactTabPanel,
  resetIdCounter,
} from "react-tabs";
import "react-tabs/style/react-tabs.css";

interface Props {
  tabs: string[];
  children: React.ReactNode;
  bgColor?: string;
}

const Tab: FC<Props> = (props) => {
  resetIdCounter();
  const [tabIndex, setTabIndex] = useState(0);
  const tabPanelRoundedClassName = () => {
    if (tabIndex === 0) {
      return "rounded-tr-[20px]";
    } else if (tabIndex === React.Children.count(props.children) - 1) {
      return "rounded-tl-[20px]";
    } else {
      return "rounded-t-[20px]";
    }
  };

  return (
    <ReactTabs
      style={{ background: props.bgColor }}
      selectedIndex={tabIndex}
      onSelect={(index) => setTabIndex(index)}
    >
      <ReactTabList className="flex mb-0 text-darkgray">
        {props.tabs.map((tab, index) => {
          return (
            <ReactTab
              key={index}
              className="w-full py-4 cursor-pointer rounded-t-[20px] text-center relative"
              selectedClassName="text-hotpink border border-hotpink border-b-0 -bottom-px"
              style={{ background: props.bgColor }}
            >
              <span
                className={`font-bold uppercase border-b-[3px] px-0 tablet:px-5 text-sm tablet:text-base ${
                  index === tabIndex ? `border-hotpink` : `border-transparent`
                }`}
              >
                {tab}
              </span>
              {index === tabIndex && (
                <>
                  {index !== 0 && (
                    <div
                      className="w-5 h-5 absolute -left-5 bottom-0 transform -rotate-180 z-10"
                      style={{ background: props.bgColor }}
                    >
                      <span className="w-full h-full block rounded-tl-[20px] border-t border-l border-hotpink"></span>
                    </div>
                  )}
                  {index < React.Children.count(props.children) - 1 && (
                    <div
                      className="w-5 h-5 absolute -right-5 bottom-0 transform -rotate-90 z-10"
                      style={{ background: props.bgColor }}
                    >
                      <span className="w-full h-full block rounded-tl-[20px] border-t border-l border-hotpink"></span>
                    </div>
                  )}
                </>
              )}
            </ReactTab>
          );
        })}
      </ReactTabList>
      <div
        className={`px-1.5 desktop:px-3 py-4 border border-hotpink rounded-b-[20px] ${tabPanelRoundedClassName()}`}
      >
        {React.Children.map(props.children, (child, index) => {
          return (
            <ReactTabPanel style={{ background: props.bgColor }} key={index}>
              {child}
            </ReactTabPanel>
          );
        })}
      </div>
    </ReactTabs>
  );
};

Tab.defaultProps = {
  bgColor: "#F2F2F2",
};

export default Tab;
