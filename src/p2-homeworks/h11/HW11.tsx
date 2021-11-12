import React, { useState } from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";

function HW11() {
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(100);
  
  return (
    <div>
      <hr />
      homeworks 11
      {/*should work (должно работать)*/}
      <div>
        <span>{value1}</span>
        <SuperRange value1={value1} setValue1={setValue1} />
      </div>
      <div>
        <span>{value1}</span>
        {/*<SuperDoubleRange*/}
        {/*/>*/}

        <span>{value2}</span>
        
      </div>
      <hr />
      {/*для личного творчества, могу проверить*/}
      {/*<AlternativeSuperRange/>*/}
      {/*<AlternativeSuperDoubleRange/>*/}
      <hr />
    </div>
  );
}

export default HW11;