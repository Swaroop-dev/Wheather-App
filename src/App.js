import { useState } from "react";
import "./App.css";
import { search,searchCity } from "./Components/apiCalls";

function App() {
  const [data, setData] = useState([]);
  const [list, setlist] = useState([]);

  function handleChange(e) {
    setData(e.target.value);
  }
  function handleSubmit(dat) {
    search(dat).then((d) => setlist(d));
  }
  // function handleCity(city) {
  //   searchCity(city).then()
  // }
  return (
    <div className="App">
      <input type="text" value={data} onChange={(e) => handleChange(e)} />
      <button onClick={() => handleSubmit(data)}>search</button>
      <div>
        {list !== undefined &&
          list.map((l, index) => (
            <h4 key={index} onClick={() => handleCity(data[index].title)}>
              {l.title}
            </h4>
          ))}
      </div>
    </div>
  );
}

export default App;
