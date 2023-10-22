import React from "react";
import marker from "./assets/marker.png";

export default function Destination(props) {
  return (
    <div className="destination">
      <div className="destination--image">
        <img src={props.src} alt="" />
      </div>
      <div className="destination--content">
        <div className="destination--info">
          <img src={marker} alt="" />
          <h5>{props.country}</h5>
          <p className="destination--location"><a href={props.googleMap}>View on Google Maps</a></p>
        </div>
        <h1>{props.place}</h1>
        <p className="destination--date">{props.date}</p>
        <p className="destination--description">
         {props.description}
        </p>
      </div>
    </div>
  );
}
