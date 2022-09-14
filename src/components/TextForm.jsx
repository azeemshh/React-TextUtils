import React from "react";

const TextForm = (props) => {
  return (
    <div className="container my-2">
      <h1>{props.heading}</h1>
      <div class="mb-3">
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="8"
        ></textarea>
      </div>
    </div>
  );
};

export default TextForm;
