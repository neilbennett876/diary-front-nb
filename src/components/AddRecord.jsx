import React, { useState } from "react";

function Add() {
  const [mileage, setMileage] = useState();
  const [gallons, setGallons] = useState();

  const handleSubmit = () => {
    const update = { mileage, gallons };
    fetch("http://localhost:3000/diary", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(update),
    })
      .then((res) => res.json())
      .then((user) => console.log(user))
      .catch(console.error);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="number"
        placeholder="miles"
        value={mileage}
        onChange={(e) => setMileage(e.target.value)}
      />
      <br />
      <input
        type="number"
        placeholder="gallons"
        value={gallons}
        onChange={(e) => setGallons(e.target.value)}
      />
      <br />
      <button type="submit">Add mileage!</button>
    </form>
  );
}

export default Add;
