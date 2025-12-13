import React, { createContext } from "react";
import CompA from "./CompA";
export const NameContext = createContext();
export const ChannelContext = createContext();
const CompMain = () => {
  return (
    <div>
      <NameContext.Provider value={"Adil"}>
        <ChannelContext.Provider value={"Use Context Hook In React"}>
          <CompA />
        </ChannelContext.Provider>
      </NameContext.Provider>
    </div>
  );
};

export default CompMain;
