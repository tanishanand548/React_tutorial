// React Hooks

import { useState } from "react";
import { Fragment } from "react/jsx-runtime";

function Reacthookies() {
  let cities = ["Mumbai", "Delhi", "Bangalore", "Pune", "Hyderabad", "Noida"];
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <Fragment>
      {/* UseState hook */}
      <h1>Hello World</h1>
      <ul className="list-group">
        {cities.length === 0 ? <p>No element found</p> : null}
        {cities.map((cities, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={cities}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {cities}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default Reacthookies;
