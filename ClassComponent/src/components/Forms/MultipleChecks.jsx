import React, { useState } from "react";

const MultipleChecks = () => {
  const [fruitArray, setFruitArray] = useState([]);
  const handleChange = (e) => {
    const value = e.target.value;
    const checked = e.target.checked;
    console.log(value, checked);
    if (checked) {
      setFruitArray([...fruitArray, value]);
    } else {
      setFruitArray(fruitArray.filter((e) => e !== value));
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fruitArray);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Select Fruits:</label>
        <br />
        <br />
        <input
          type="checkbox"
          name="fruits"
          value="Apple"
          onChange={handleChange}
        />
        <label htmlFor="">Apple</label>
        <br />
        <input
          type="checkbox"
          name="fruits"
          value="Mango"
          onChange={handleChange}
        />
        <label htmlFor="">Mango</label>
        <br />
        <input
          type="checkbox"
          name="fruits"
          value="Banana"
          onChange={handleChange}
        />
        <label htmlFor="">Banana</label>
        <br />
        <br />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default MultipleChecks;
