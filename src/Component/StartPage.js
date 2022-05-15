import React from "react";
import { getCars } from "./CarList";
export default function StartPage() {
  const allCars = getCars();

  return (
    <div className="Container">
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

      <div>
        <label>
          <b>Sort By</b>
        </label>
        <select style={{ color: "pink" }}>
          <option>Lowest Price</option>
          <option value="red">Highest Price</option>
        </select>
        <form id="form" role="search" style={{ float: "right" }}>
          <input
            type="search"
            placeholder="Search by name"
            style={{ borderColor: "pink", float: "right" }}
            aria-label="Search through site content"
          />
        </form>
      </div>
      <div className="grid-container">
        {allCars.map((car) => {
          return (
            <div className="box">
              <h6 style={{ textAlign: "right", fontSize: "20px" }}>
              </h6>
              <img
                className="divImg"
                alt="logo"
                src={car.img_url}
              />
              <h6 style={{fontSize: "30px"}}>{car.name}</h6>
              <h6 style={{fontSize: "30px", textAlign: "left"}}>{car.efficiency}-kWh/miles<br></br>Efficiency</h6>
              <button type="button">Explore!</button>
            </div>
          );
        })}
      </div>
      {/* End of Grid Container */}

      <div class="Footer">
        <h2 class="FooterText"> Contact Us</h2>
      </div>
    </div>
  );
}

