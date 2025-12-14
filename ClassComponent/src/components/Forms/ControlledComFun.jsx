import React, { useState } from "react";
const ControlledComFun = () => {
  const [userName, setUserName] = useState("Mohsin");
  return (
    <div>
      <form>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default ControlledComFun;
