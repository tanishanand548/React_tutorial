import { Fragment } from "react/jsx-runtime";

function ListGroup() {
  let cities = ["Mumbai", "Delhi", "Bangalore", "Pune", "Hyderabad", "Noida"];
  // cities = [];

  // const msg = cities.length === 0 ? <p>No element found</p> : null;

  // const getmsg = () =>{
  //     return cities.length === 0 ? <p>No element found</p> : null;
  // }
  return (
    <Fragment>
      <h1>Hello World</h1>
      {/* <ul className="list-group">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A fourth item</li>
          <li className="list-group-item">And a fifth one</li>
        </ul> */}
      <ul className="list-group">
        {cities.length === 0 ? <p>No element found</p> : null}
        {/* {cities.length === 0 && <p>No element found</p> } // Another way */}
        {/* {msg} */}
        {/* {getmsg()} */}
        {cities.map((cities, index) => (
          <li
            className="list-group-item"
            key={cities}
            // onClick={() => console.log(cities, index)}
            onClick={(event) => console.log(event)}
          >
            {cities}
          </li>
        ))}
      </ul>
    </Fragment>
  );
}

export default ListGroup;
