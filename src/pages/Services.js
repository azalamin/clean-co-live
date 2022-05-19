import React, { useEffect, useState } from "react";
import fetcher from "../api";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    (async () => {
      const { data } = await fetcher.get("/service");
      setServices(data);
    })();
  }, []);
  return (
    <div className="mt-16">
      <h1 className="text-5xl">This is services: {services?.length}</h1>
    </div>
  );
};

export default Services;
