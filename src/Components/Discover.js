import React from "react";
import "../App.css";
import Sivsagar from "../Images/sivsagar.png";
import Majuli from "../Images/maju.png";
import Kaziranga from "../Images/sukapha.png";
import Sukapha from "../Images/sukapha.png";
import uma from "../Images/uma.png";
import ghy from "../Images/ghy.jpg";


const Discover = () => {
  return (
    <div>
      <h1 className="Discoverheading">
        Discover The Most <br /> Attractive Places{" "}
      </h1>
      <br />
      <div className="container">
        <div className="row">
          <div className="col">
            <img src={Sivsagar} alt="" />
            <h2>Sivsagar</h2>
          </div>
          <div className="col">
            <img src={Majuli} alt="" />
            <h2>Majuli</h2>
          </div>
          <div className="col">
            <img src={Kaziranga} alt="" />
            <h2>Kaziranga</h2>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <img src={Sukapha} alt="" />
            <h2>Chaolung sukapha</h2>
          </div>
          <div className="col">
            <img src={uma} alt="" />
            <h2>Umananda</h2>
          </div>
          <div className="col">
            <img src={ghy} alt="" />
            <h2>Guwahati</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Discover;
