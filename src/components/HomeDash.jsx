import { Card } from "antd";
import React, { useState, useEffect } from "react";
// import { FormItemInputContext } from "antd/lib/form/context";
import { useNavigate } from "react-router-dom";
import FormInput from "./FormInput";

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

  return (
    <div id="cardContainer">
      <section id="section-container">
        <Card id="cardContainer" className="card">
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
        </Card>
        <Card id="cardContainer" className="card">
          <FormInput records={records} setRecords={setRecords} />
        </Card>
      </section>
    </div>
  );
}

export default HomeDash;
