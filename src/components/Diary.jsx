import React, { useContext } from "react";
import { FormItemInputContext } from "antd/lib/form/context";

function Diary() {
  const { record, mpg } = useContext(FormItemInputContext);

  return (
    <>
      <h1>test</h1>
      <h1>
        Previous mpg readings:
        {record?.map((record) => {
          return <p key={record._id}>{record.mpg}</p>;
        })}
      </h1>
      <h1>
        Previous notes:
        {record?.map((record) => {
          return <p key={record._id}>{record.notes}</p>;
        })}
      </h1>
    </>
  );
}

export default Diary;
