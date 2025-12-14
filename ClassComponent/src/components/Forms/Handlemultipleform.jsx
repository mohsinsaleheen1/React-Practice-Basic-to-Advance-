import React, { useState } from "react";

const Handlemultipleform = () => {
  const [data, setData] = useState({ name: "", email: "" });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(name, value);
    setData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  return (
    <div>
      <form>
        <label>Enter Name</label>
        <input
          type="text"
          value={data.name}
          name="name"
          onChange={handleChange}
        />
        <br />
        <label>Enter Email</label>
        <input
          type="text"
          value={data.email}
          name="emial"
          onChange={handleChange}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default Handlemultipleform;
