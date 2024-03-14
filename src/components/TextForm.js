// rfc : react function based component
import React, { useState } from "react";
// useState allows you to create a state variable
export default function TextForm(props) {
  const uppercase = () => {
    // console.log("uppercase was called");
    let newtext = text.toUpperCase();
    setText(newtext);
  }

  const lowercase = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  }

  const clearall=()=>{
    let newtext="";
    setText(newtext);
  }
  const handleOnChange = (event) => {
    console.log("OnChange was clicked");
    setText(event.target.value);
  }



  // always keep this inside your function component

  const [text, setText] = useState('');
  // text="new text"; (wrong way to change the text variable)
  // setText("newtext"); (correct way to change the text variable)
  return (
    <>
      <div className="container">
        <div className="mb-3 my-3">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            <h4>{props.heading}</h4>
          </label>
          <textarea
            value={text}
            onChange={handleOnChange} // neccessary to update the state variable
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            style={{ fontSize: "20px", fontFamily: "Poppins,sans-serif" }}
          ></textarea>

          <button
            className="btn btn-primary my-3"
            onClick={uppercase}
          >UpperCase</button>


          <button
            className="btn btn-primary my-3 mx-2"
            onClick={lowercase}
          >LowerCase</button>



          <button
            className="btn btn-primary my-3 mx-2"
            onClick={clearall}
          >Clear</button>
        </div>
      </div>
      <div className="container">
        <p>Your Text Summary : </p>
        <p>{text.split(" ").length} words and {text.length} characters</p>
      </div>
    </>
  );
}
