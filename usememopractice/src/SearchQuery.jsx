import React, { useMemo, useState } from "react";
import ListItem from "./ListItem";

const SearchQuery = () => {
  const [search, setSearch] = useState("");
  const [counter, setCounter] = useState(0);

  // Generate data once
  const data = useMemo(() => {
    const firstNames = ["Ali","Ahmed","Sara","Ayesha","Usman"];
    const lastNames = ["Khan","Malik","Sheikh","Raza","Butt"];

    const arr = [];

    for (let i = 0; i < 10000; i++) {
      const first =
        firstNames[Math.floor(Math.random() * firstNames.length)];
      const last =
        lastNames[Math.floor(Math.random() * lastNames.length)];

      arr.push({
        id: i,
        name: `${first} ${last}`,
      });
    }

    return arr;
  }, []);

  // Filtering
  const filteredData = useMemo(() => {
    console.log("Filtering running...");
    return data.filter((item) =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search, data]);

  return (
    <div>
      <h2>Counter: {counter}</h2>

      <button onClick={() => setCounter(counter + 1)}>
        Increment Counter
      </button>

      <br /><br />

      <input
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filteredData.slice(0, 50).map((item) => (
          <ListItem key={item.id} name={item.name} />
        ))}
      </ul>
    </div>
  );
};

export default SearchQuery;