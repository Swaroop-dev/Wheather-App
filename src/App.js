import { useState } from "react";
import "./App.css";
import { search, searchCity } from "./Components/apiCalls";
import logo from './material-icon-2155442_960_720.png'

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
    <div className="wrap">
      <div className="search">
        <input
          type="text"
          value={data}
          onChange={(e) => handleChange(e)}
          class="searchTerm"
          placeholder="What are you looking for?"
        />
        <button onClick={() => handleSubmit(data)} className="searchButton">
          <img src={ logo} className="Image"></img>
        </button>
      </div>
      <div>
        {list !== undefined &&
          list.map((l, index) => (
            <h4 key={index} onClick={() => handleCity(index)}>
              {l.title}
            </h4>
          ))}
      </div>
    </div>
  );
}

export default App;
