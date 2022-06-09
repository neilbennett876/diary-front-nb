import { Button } from "antd";
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
  }, []);

  function handleClick(e) {
    e.preventDefault();
  }

  // function setMPG() {
  //   let avg = diffMileage - record[0].mileage;
  //   avg /= gallons;
  //   return avg;
  // }

  return (
    <div onClick={handleClick}>
      <Layout className="layout">
        <Content
          style={{
            padding: "0 50px",
          }}
        >
          <section>
            <h2>
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

          <form>
            <br />
            <input
              placeholder="current mileage"
              onChange={(e) => setDiffMileage(e.target.value)}
            ></input>
            <input
              placeholder="gallons added"
              onChange={(e) => setGallons(e.target.value)}
            ></input>
            <br />
            <button
              onClick={() =>
                setMPG((diffMileage - record[0].mileage) / gallons)
              }
            >
              Calculate
            </button>
          </form>
        </Content>

        <Footer
          style={{
            textAlign: "center",
          }}
        >
          Gasdeets! ©2022
        </Footer>
      </Layout>
    </div>
  );
}

export default HomeDash;
