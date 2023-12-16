import React, { useEffect, useState } from "react";

export function MountingComponent() {
  const [rockets, setRockets] = useState([]);

  useEffect(() => {
    fetch("https://api.spacexdata.com/v4/rockets")
      .then((res) => res.json())
      .then((data) => setRockets(data))
      .catch((err) => console.err(err));
  }, []);

  return (
    <ul>
      {rockets.map((rocket) => {
        return <li key={rocket.id}>{rocket.name}</li>;
      })}
    </ul>
  );
}
