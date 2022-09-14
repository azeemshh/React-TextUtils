import React, { useState } from "react";

const TextForm = (props) => {
  const [text, setText] = useState("");

  function handleTextChange(event) {
    setText(event.target.value);
  }

  function handleUpperCase() {
    setText(text.toUpperCase());
  }

  function handleLowerCase() {
    setText(text.toLowerCase());
  }

  function handleCopyText(event) {
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }

  function handleTrimText() {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
  }

  function handleClearText() {
    setText("");
  }

  return (
    <div className="container my-2">
      {/* textarea */}
      <h1>{props.heading}</h1>
      <div class="mb-3">
        <textarea
          class="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleTextChange}
        ></textarea>
      </div>

      {/* buttons */}
      <div className="container my-3">
        <button className="btn btn-primary mx-2" onClick={handleUpperCase}>
          UpperCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowerCase}>
          LowerCase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopyText}>
          Copy
        </button>
        <button className="btn btn-primary mx-2" onClick={handleTrimText}>
          Trim
        </button>
        <button className="btn btn-primary my-2 mx-2" onClick={handleClearText}>
          Clear
        </button>
      </div>

      {/* Text Summary */}
      <div className="container my-5">
        <h1>Text Summary</h1>
        <p>
          <li>
            There are <strong>{text.split(" ").length} words</strong> and{" "}
            <strong>{text.length} characters</strong> in your test.
          </li>
        </p>
        <p>
          <li>
            Its takes <strong>{0.008 * text.split("").length} minutes</strong>{" "}
            to read your text.
          </li>
        </p>
      </div>
    </div>
  );
};

export default TextForm;
