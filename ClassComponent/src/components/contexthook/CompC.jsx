import React, { useContext } from "react";
import { ChannelContext, NameContext } from "./CompMain";

const CompC = () => {
  const myName = useContext(NameContext);
  const myLearning = useContext(ChannelContext);
  return (
    <div>
      <h1>I am a Component C</h1>
      <p>{myName}</p>
      <p>{myLearning}</p>
    </div>
  );
};

export default CompC;
