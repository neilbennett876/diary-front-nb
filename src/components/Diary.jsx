import React, { useState, useEffect } from "react";
import { Divider, List } from "antd";

function Diary() {
  const [records, setRecords] = useState();

  // const navigate = useNavigate();
  useEffect(() => {
    fetch("https://cardeets-backend-nb.web.app/diary")
      .then((response) => response.json())
      .then((data) => {
        setRecords(data);
      })
      .catch(console.error);
  }, []);

  const mpgData = records?.map((record) => {
    return (
      <ul>
        {record.mpg.map((collection) => {
          return <li>{collection} mpg</li>;
        })}
      </ul>
    );
  });

  return (
    <>
      <div>
        <Divider orientation="center">Previous MPG's</Divider>
        <List
          size="large"
          bordered
          dataSource={mpgData}
          renderItem={(item) => <List.Item>{item}</List.Item>}
        />
      </div>
    </>
  );
}

export default Diary;
