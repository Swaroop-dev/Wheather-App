import { useState } from "react";
import "./App.css";
import { search, searchCity } from "./Components/apiCalls";

function App() {
  const [data, setData] = useState([]);
  const [list, setlist] = useState([]);
  const [City, setCity] = useState([]);
  const [Detail, setDetail] = useState([]);

  function handleChange(e) {
    setData(e.target.value);
  }
  function handleSubmit(dat) {
    search(dat).then((d) => setlist(d));
  }
  function handleCity(i) {
    setCity(list[i].woeid);

    searchCity(City).then(({ consolidated_weather }) =>
      setDetail(consolidated_weather)
    );
    console.log(Detail);
  }
  return (
    <div className="App">
      <input type="text" value={data} onChange={(e) => handleChange(e)} />
      <button onClick={() => handleSubmit(data)}>search</button>
      <div>
        {list !== undefined &&
          list.map((l, index) => (
            <h4 key={index} onClick={() => handleCity(index)}>
              {l.title}
            </h4>
          ))}
      </div>
      {Detail !== undefined &&
        Detail.map((d) => <h2>{d.weather_state_name}</h2>)}
    </div>
  );
}

export default App;
