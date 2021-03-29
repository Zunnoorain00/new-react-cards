import React from "react";
import "./style.css"
function Cards(props) {
    return (
      <>
        <div className="cards">
          <div className="card">
            <img src={props.imgsrc} alt="myPic" className="card_img" width="230px" height="225px" />
            <div className="card_info">
              <span className="card_category">{props.title}</span>
              <h3 className="card_title">{props.sname}</h3>
              <a href={props.link} target="_blank">
                <button className="btn-watch">Watch Now</button>
              </a>
            </div>
          </div>
        </div>
      </>
    );
  }




export default Cards;