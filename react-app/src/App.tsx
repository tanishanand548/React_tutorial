// import Message from "./Message";
// import ListGroup from "./components/ListGroup";
// import Reacthookies from "./components/rhook";
import Propsinrtx from "./components/data_props";
// function App(){
//   // return <div><Message></Message></div>
// }

function LGroup() {
  let cities = ["Mumbai", "Delhi", "Bangalore", "Pune", "Hyderabad", "Noida"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      {/* <ListGroup></ListGroup> */}
      {/* <Reacthookies></Reacthookies> */}
      <Propsinrtx
        cities={cities}
        heading="item"
        onSelectItem={handleSelectItem}
      ></Propsinrtx>
    </div>
  );
}

// export default App;
export default LGroup;
