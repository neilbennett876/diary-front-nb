import { useContext } from "react";
import { FormInputContext } from "./context/Context";
import { Button } from "antd";

function FormInput({ records }) {
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

  // const [size, setSize] = useState("large");

  function displayMileage() {
    let testfn = setMPG(((mileage - records[0].mileage) / gallons).toFixed(2));
    return testfn;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMileage = { mileage, gallons, mpg, notes };
    const id = records[0]._id;
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
      <br />
      <input
        placeholder="Current Mileage"
        in
        onChange={(e) => setMileage(Number(e.target.value))}
      ></input>
      <br />
      <br />
      <input
        placeholder="Gallons Added"
        onChange={(e) => setGallons(Number(e.target.value))}
      ></input>
      <br />
      <br />
      <textarea
        id="text-area"
        placeholder="Notes"
        onChange={(e) => setNotes(e.target.value)}
      ></textarea>
      <br />
      <br />
      <Button id="calculate-button" onClick={displayMileage}>
        Calculate
      </Button>
      <br />
      <Button onClick={handleSubmit}>Send</Button>
    </div>
  );
}

export default FormInput;
