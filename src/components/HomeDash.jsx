import { Card } from "antd";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import FormInput from "./FormInput";
import { FormInputContext } from "./context/Context.js";
import { useContext } from "react";

function HomeDash() {
  const [records, setRecords] = useState();
  let navigate = useNavigate();

  useEffect(() => {
    fetch("https://cardeets-backend-nb.web.app/diary")
      .then((response) => response.json())
      .then((data) => setRecords(data))
      .then(() => navigate("/"))
      .catch(console.error);
  }, []);

  const { user } = useContext(FormInputContext);

  return (
    <div id="cardContainer">
      <section id="section-container">
        <div id="cardContainer" className="card">
          <section id="cardContainer">
            <h2>
              Your car's name:
              {records?.map((record) => {
                return <p key={record._id}>{record.alias}</p>;
              })}
            </h2>
            <h2>
              Your previous mileage:
              {records?.map((record) => {
                return <p key={record._id}>{record.mileage}</p>;
              })}
            </h2>
          </section>
        </div>
        <Card id="cardContainer" className="card">
          <FormInput records={records} setRecords={setRecords} />
        </Card>
      </section>
    </div>
  );
}

export default HomeDash;
