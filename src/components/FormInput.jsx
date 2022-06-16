import { useContext, useState } from "react";
import { FormInputContext } from "./context/Context";
import { Button } from "antd";

function FormInput({ record }) {
  const {
    mileage,
    setMileage,
    gallons,
    setGallons,
    mpg,
    setMPG,
    setNotes,
    notes,
  } = useContext(FormInputContext);

  const [size, setSize] = useState("large");

  function displayMileage() {
    let testfn = setMPG(((mileage - record[0].mileage) / gallons).toFixed(2));
    return testfn;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMileage = { mileage, gallons, mpg, notes };
    const id = record[0]._id;
    fetch(`https://cardeets-backend-nb.web.app/diary/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newMileage),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch(console.error)
      .then(() => {
        window.location.reload(false);
      });
  };

  return (
    <div>
      {!mpg ? (
        <p>Enter your mileage! </p>
      ) : (
        <h2>You got {mpg} mpg from your last tank of gas!</h2>
      )}
      <form onSubmit={handleSubmit}>
        <br />
        <input
          placeholder="Current Mileage"
          in
          onChange={(e) => setMileage(Number(e.target.value))}
        ></input>
        <br />
        <input
          placeholder="Gallons Added"
          onChange={(e) => setGallons(Number(e.target.value))}
        ></input>
        <br />
        <textarea
          id="text-area"
          placeholder="Notes"
          onChange={(e) => setNotes(e.target.value)}
        ></textarea>
        <br />
        <button id="calculate-button" type="button" onClick={displayMileage}>
          Calculate
        </button>
        <br />
        <button type="button" onClick={handleSubmit}>
          Send
        </button>
      </form>
    </div>
  );
}

export default FormInput;
