import React from "react";
import Cardss from "../Cardss";
import { Link } from "react-router-dom";

const CardContainer = (props) => {
  return (
    <div className="cards-container mt-3 mb-4">
      <div className="d-flex justify-content-between align-items-center mx-4 p-2">
        <h4 className="text-white fw-bold">{props.containerTitle}</h4>
        <p>
          <Link to={"/all"} className="text-white link fw-bold">
            View all
          </Link>
        </p>
      </div>
      <div className="d-flex gap-3 md-4 sm-3">
        <Cardss />
        <Cardss />
        <Cardss />
        <Cardss />
        <Cardss />
        <Cardss />
        <Cardss />
        <Cardss />
      </div>
    </div>
  );
};

export default CardContainer;
