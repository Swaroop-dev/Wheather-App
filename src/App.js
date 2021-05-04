import { useState } from "react";
import "./App.css";
import { search, searchCity } from "./Components/apiCalls";
import CityComponent from "./Components/City";
import logo from "./material-icon-2155442_960_720.png";

const App = () => {
  const [data, setData] = useState([]);
  const [list, setlist] = useState([]);
  const [City, setCity] = useState([]);
  const [Detail, setDetail] = useState([]);

  const handleChange = (e) => {
    setData(e.target.value);
  };
  const handleSubmit = (dat) => {
    search(dat).then((d) => setlist(d));
  };
  const handleCity = (i) => {
    setCity(list[i].woeid);
    searchCity(City).then(({ consolidated_weather }) =>
      setDetail(consolidated_weather)
    );
    console.log(Detail);
  };

  return (
    <div className="wrap">
      <div className="search">
        <input
          type="text"
          value={data}
          onChange={(e) => handleChange(e)}
          className="searchTerm"
          placeholder="Which place are you looking for?"
        />
        <button onClick={() => handleSubmit(data)} className="searchButton">
          <img src={logo} className="Image"></img>
        </button>
      </div>
      <div>
        {list !== undefined &&
          list.map((l, index) => (
            <CityComponent name={l.title} key1={index} details={handleCity} id={l.woeid} />
          ))}
      </div>
      {Detail !== undefined &&
        Detail.map((det) => <h1>{det.weather_state_name}</h1>)}
    </div>
  );
};

export default App;
