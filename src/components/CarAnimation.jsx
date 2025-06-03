import React from "react";
import "./styles/CarAnimation.css";

const CarAnimation = () => {
  return (
    <>
      <div className="car">
        <div className="body">
          <div className="mirror-wrap">
            <div className="mirror-inner">
              <div className="mirror">
                <div className="shine"></div>
              </div>
            </div>
          </div>

          <div className="middle">
            <div className="top">
              <div className="line"></div>
            </div>
            <div className="bottom">
              <div className="lights">
                <div className="line"></div>
              </div>
            </div>
          </div>

          <div className="bumper">
            <div className="top"></div>
            <div className="middle" data-numb="बा ⁕१ च ⁕१⁕१"></div>
            <div className="bottom"></div>
          </div>
        </div>

        <div className="tyres">
          <div className="tyre back"></div>
          <div className="tyre front"></div>
        </div>
      </div>

      <div className="road-wrap">
        <div className="road">
          <div className="lane-wrap">
            <div className="lane">
              {[...Array(11)].map((_, index) => (
                <div key={index}></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CarAnimation;
