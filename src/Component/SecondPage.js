import React from "react";
import { getCar } from "./CarList";
export default function SecondPage() {
  const car = getCar("1");
  const car_range = "Range\n" + car.range + "/miles \n Real World"; 
  const max_charging_speed = "Charging \n " + car.max_charging_speed + "\n max. Speed";
  return(
    <div className="SPGrid">
      <div className="header">
        <div className="header_left">
          <div className="left_top">
            <img
              className="header__logo"
              alt="logo"
              src="https://media.istockphoto.com/vectors/electric-car-icon-electrical-cable-plug-charging-green-symbol-eco-vector-id1173385747?k=20&m=1173385747&s=612x612&w=0&h=UBowW4pmInKPEtC-mc4ZxQYXEgbkgyFEYUy8gQeyIU0="
            />
            <h4>e-Ride</h4>
          </div>
        </div>

        <div className="header_right">
          <div className="right_top">
            <label className="header_text">
              <h3>Electric Cars</h3>
            </label>
            <label className="header_text2">
              <h3>Suitability Tools</h3>
            </label>
            <label className="header_text2">
              <h3>My Bookings</h3>
            </label>
            <label className="header_text2" href="">
              <h3>Sign Out</h3>
            </label>
          </div>
        </div>
      </div>
      <div className="SPBody">
        <div className="SPLeft">
        {/* for left column */}
          <div className="SPLeftImg_Availability">
            <div><img src={car.img_url} alt= {car.name}></img></div>
            <div><label>Available from: {car.available_from}</label></div>
          </div>
          <div className="SPLeftPreFooter">
            <div><label>{{car_range}}</label></div>
            <div><label>{{max_charging_speed}}</label></div>
          </div>
          <div className="SPLeftFooter">
            <div><label>{car.seat_count}</label></div>
            <div><label>{car.door_count}</label></div>
            <div><label>{car.engine_location}</label></div>
            <div><label>{car.color}</label></div>
            <div><label>{car.max_speed}</label></div>
          </div>
        </div> 
        

        <div className="SPRight">
        {/* for right column */}
          <div>{}</div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>

        </div> 
        
      </div>
    </div>

  );
}
