import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function HomeDash() {
  const [record, setRecord] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:3000")
      .then((response) => response.json())
      .then((data) => {
        setRecord(data);
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <view>
        <h2>
          {record?.map((record) => {
            return <p key={record.id}>{record.alias}</p>;
          })}
        </h2>
        <h2>
          {record?.map((record) => {
            return <p key={record.id}>{record.mileage}</p>;
          })}
        </h2>
      </view>
      <section>
        <button type="submit" onClick={() => navigate("add")}>
          Add record!
        </button>
      </section>
    </>
  );
}

export default HomeDash;
