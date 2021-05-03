// import axios from "axios";
const API = "https://www.metaweather.com/api/location/search/?query=";
const API1 = "https://www.metaweather.com/api/location/";

export const search = async (word) => {
  let changeUrl = API + word;
  
  return fetch(changeUrl).then((res) => res.json());

  
};

export const searchCity = async (woeid) => {
    let url = API1 + woeid
    return fetch(url).then((res)=>res.json())
}