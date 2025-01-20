/* eslint-disable eqeqeq */
import React, { useEffect, useState } from "react";
import WCard from "./component/WCard.jsx";
import WSearh from "./component/WSearch.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { api, api_key } from "./api/apiResource.js";

function App() {
  const [country, setCountry] = useState("Yangon");
  const [data, setdata] = useState({});
  const fetchWeather = async (countryName) => {
    if (countryName != undefined) {
      setCountry(countryName);
    }
    try {
      const res = await api.get(`/weather?q=${country}&appid=${api_key}`);
      setdata(res.data);
      console.log(data);
    } catch (error) {
      console.log("Error...");
    }
  };
  useEffect(() => {
    fetchWeather();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [country]);

  return (
    <div className="w-full min-vh-100 d-flex justify-content-center align-items-center">
      <div className=" shadow-lg bg-success-subtle gap-4 rounded-4">
        <h2 className="text-center my-4">Weather App</h2>
        <WSearh fetchWeather={fetchWeather} />
        <WCard data={data} />
      </div>
    </div>
  );
}

export default App;
