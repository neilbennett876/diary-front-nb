import React, { useState, useEffect } from "react";

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

  return (
    <>
      <div>
        <section id="diary">
          <ul id="diary-child">
            {records?.map((record) => {
              return (
                <li key={record._id}>
                  {record.mpg.map((mpg) => {
                    return (
                      <ul>
                        <li>{mpg}</li>
                      </ul>
                    );
                  })}
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </>
  );
}

export default Diary;
