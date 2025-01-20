import React, { useRef } from "react";

function WSearh({ fetchWeather }) {
  const searchKey = useRef("");

  return (
    <div className="w-100 d-flex justify-content-center my-4">
      <input
        type="text"
        className="form-control ms-5"
        placeholder="Enter country"
        ref={searchKey}
      />
      <input
        type="button"
        className="me-5 ms-2 bg-dark text-white btn"
        value="Search"
        onClick={() => fetchWeather(searchKey.current.value)}
      />
    </div>
  );
}

export default WSearh;
