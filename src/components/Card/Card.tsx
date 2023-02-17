import React from "react";
import "./Card.css";
export default function Card() {
  return (
    <div className="card">
      <div className="circle path"></div>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="flex-container">
        <div className="circle">1</div>
        <div className="circle">2</div>
        <div className="circle">3</div>
        <div className="circle">4</div>
        <div className="circle">5</div>
      </div>
      <button>Submit</button>
    </div>
  );
}
