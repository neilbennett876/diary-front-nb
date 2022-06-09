import Layout, { Content, Footer, Header } from "antd/lib/layout/layout";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function HomeDash() {
  const [record, setRecord] = useState();
  const [diffMileage, setDiffMileage] = useState();
  const [gallons, setGallons] = useState(0);
  const [mpg, setMPG] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000/diary")
      .then((response) => response.json())
      .then((data) => {
        setRecord(data);
      })
      .catch(console.error);
  }, [mpg]);

  function displayMileage() {
    let testfn = setMPG(
      Math.floor((diffMileage - record[0].mileage) / gallons)
    );
    return testfn;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMileage = { diffMileage, gallons, mpg };
    const id = record[0]._id;
    fetch(`http://localhost:3000/diary/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMileage),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch(console.error);
  };

  return (
    <div>
      <Layout className="layout">
        <Content>
          <section>
            <h2>
              Your car's name:
              {record?.map((record) => {
                return <p key={record._id}>{record.alias}</p>;
              })}
            </h2>
            <h2>
              Your current mileage
              {record?.map((record) => {
                return <p key={record._id}>{record.mileage}</p>;
              })}
            </h2>

            <h2>Your mileage calculation goes here:</h2>
            <h3>{mpg}</h3>
          </section>

          <form onSubmit={handleSubmit}>
            <br />
            <input
              placeholder="current mileage"
              onChange={(e) => setDiffMileage(Number(e.target.value))}
            ></input>
            <input
              placeholder="gallons added"
              onChange={(e) => setGallons(Number(e.target.value))}
            ></input>
            <br />
            <button type="button" onClick={displayMileage}>
              Calculate
            </button>
            <button type="button" onClick={handleSubmit}>
              Send
            </button>
          </form>
        </Content>
      </Layout>
    </div>
  );
}

export default HomeDash;
