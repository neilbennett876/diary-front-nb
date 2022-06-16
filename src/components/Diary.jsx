import React, { useContext } from "react";
import { FormItemInputContext } from "antd/lib/form/context";

function Diary() {
  const { record, mpg } = useContext(FormItemInputContext);

  return (
    <>
      <div>
        <section id="diary">
          <h1 id="diary-child">
            Previous mpg readings: Lorem ipsum dolor sit, amet consectetur
            adipisicing elit. Inventore repellendus quaerat repellat quasi.
            Magni quos reiciendis similique corporis amet veniam molestiae
            tenetur? Ab ducimus numquam alias eos itaque molestiae doloribus.
          </h1>
          <h1 id="diary-child">
            Previous notes: Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Dolor, quam aliquam atque dolore tenetur aspernatur esse
            libero sequi cum voluptatibus debitis ducimus natus dolorum sunt
            earum necessitatibus quod, odit quidem?
          </h1>
        </section>
      </div>
    </>
  );
}

export default Diary;
