import React, { useState } from "react";

const Otherinouts = () => {
  const [textArea, setTextArea] = useState("");
  const [selectMenu, setSelectMenu] = useState("USA");
  const [checked, setChecked] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target[0].value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label style={{ verticalAlign: "top" }}>Comments: </label>
        <textarea
          value={textArea}
          onChange={(e) => setTextArea(e.target.value)}
          cols="30"
          rows="10"
        ></textarea>
        <br />
        <br />
        <label>Select Country:</label>
        <select
          value={selectMenu}
          onChange={(e) => setSelectMenu(e.target.value)}
        >
          <option value="Canada">Canada</option>
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="Dubai">Dubai</option>
        </select>
        <br />
        <br />
        <label htmlFor="">Yes I Agree The Terms </label>
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Otherinouts;
