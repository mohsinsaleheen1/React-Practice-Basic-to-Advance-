import React from "react";

const ListItem = ({ name }) => {
  console.log(`Rendering ${name}`);
  return <li>{name}</li>;
};

export default React.memo(ListItem);
