import React, { useState } from "react";
import SuperRange from "./common/c7-SuperRange/SuperRange";
import SuperDoubleRange from "./common/c8-SuperDoubleRange/SuperDoubleRange";
import { MinimumDistanceSlider } from "./common/slider";

function HW11() {
  const [value1, setValue1] = useState(0);
  const [value22, setValue22] = useState(100);
  const [value2, setValue2] = React.useState<number[]>([value1, value22]);
  
  return (
    <div>
      <hr />
      homeworks 11
      {/*should work (должно работать)*/}
      <div>
        <div>{value1}</div>
        <SuperRange value1={value1} setValue1={setValue1} />
      </div>
      <div>
        {/*<span>{value1}</span>*/}

        <MinimumDistanceSlider value2={value2} setValue2={setValue2} />
        {value2.map(m=> <div key={m}>{m}</div>)}
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
