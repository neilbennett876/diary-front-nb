import { Card } from "antd";
import React, { useContext, useState, useEffect } from "react";
import { FormItemInputContext } from "antd/lib/form/context";
import { useNavigate } from "react-router-dom";
import FormInput from "./FormInput";

function HomeDash() {
  const [record, setRecord] = useState();
  const { mpg, mileage } = useContext(FormItemInputContext);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://cardeets-backend-nb.web.app/diary")
      .then((response) => response.json())
      .then((data) => {
        setRecord(data);
      })
      .catch(console.error);
  }, []);

  return (
    <div id="cardContainer">
      <section id="section-container">
        <Card id="cardContainer" className="card">
          <section id="cardContainer">
            <h2>
              Your car's name:
              {record?.map((record) => {
                return <p key={record._id}>{record.alias}</p>;
              })}
            </h2>
            <h2>
              Your previous mileage:
              {record?.map((record) => {
                return <p key={record._id}>{record.mileage}</p>;
              })}
            </h2>
          </section>
        </Card>
        <Card id="cardContainer" className="card">
          <FormInput record={record} setRecord={setRecord} />
        </Card>
      </section>
    </div>
  );
}

export default HomeDash;
