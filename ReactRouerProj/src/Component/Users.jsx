import React from "react";
import { Link } from "react-router-dom";

const Users = () => {
  return (
    <div>
      <h1>All Users Display</h1>
      <div>
        <h1>
          <Link to="/user/1">User 1</Link>
        </h1>
        <h1>
          <Link to="/user/2">User 2</Link>
        </h1>
        <h1>
          <Link to="/user/3">User 3</Link>
        </h1>
      </div>
    </div>
  );
};

export default Users;
