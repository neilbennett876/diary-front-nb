import { Card } from "antd";
import { Content, Footer, Header } from "antd/lib/layout/layout";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateProfile() {
  const [alias, setAlias] = useState("");
  const [year, setYear] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [mileage, setMileage] = useState(0);

  let navigate = useNavigate();

  const handleSubmit = (e) => {
    const newUser = { alias, year, make, model, mileage };
    fetch("https://cardeets-back-firestore.web.app/diary", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch(console.error);
  };

  return (
    <>
      <Content style={{ textAlign: "center" }}>
        <Card className="card">
          <form onSubmit={handleSubmit}>
            <h3>Car Alias</h3>
            <input
              placeholder="alias"
              value={alias}
              onChange={(e) => setAlias(e.target.value)}
            />
            <br />
            <h3>Year</h3>
            <input
              placeholder="year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
            />
            <br />
            <h3>Make</h3>
            <input
              placeholder="make"
              value={make}
              onChange={(e) => setMake(e.target.value)}
            />
            <br />
            <h3>Model</h3>
            <input
              placeholder="model"
              value={model}
              onChange={(e) => setModel(e.target.value)}
            />
            <br />
            <h3>Mileage</h3>
            <input
              type="number"
              placeholder="mileage"
              value={mileage}
              onChange={(e) => setMileage(e.target.value)}
            />
            <br />
            <br />
            <button>Create user</button>
          </form>
        </Card>
      </Content>
      <br />
    </>
  );
}

export default CreateProfile;
