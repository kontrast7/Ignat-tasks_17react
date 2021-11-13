import React, { useState } from "react";
import axios from "axios";

export const Request = () => {
  let [success, setSuccess] = useState<boolean>(true);
  let [res, setRes] = useState<any>("");
  axios
    .post("https://neko-cafe-back.herokuapp.com/auth/test", {
      success: success,
    })
    .then((response) => setRes(JSON.stringify(response.data.errorText)))
    .catch((error) => {
      setRes(
        JSON.stringify(
          error.response ? error.response.data.errorText : error.message
        )
      );
    });

  return (
    <div>
      <div>{res}</div>
      <button>+</button>
      <input type="checkbox" onChange={() => setSuccess(!success)} />
    </div>
  );
};
