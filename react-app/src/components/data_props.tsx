// Passind data via props
import { Fragment } from "react/jsx-runtime";
import { useState } from "react";
interface Props {
  cities: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function Propsinrtx({ cities, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <Fragment>
      <h1>{heading}</h1>
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
              onSelectItem(cities);
            }}
          >
            {cities}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default Propsinrtx;
