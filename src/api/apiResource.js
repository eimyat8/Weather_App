import axios from "axios";

// export const api = axios.create({
//   baseURL: "http://localhost:4000",
// });

// Weather APP
export const api = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});

export const api_key = "15fe52489f63865ef1a6ed556412e920";
