import React from "react";
import Cardss from "../Cardss";
import { Link } from "react-router-dom";
import axios from "axios";
import { useRecoilValue, selector } from "recoil";

const musics = selector({
  key: "Musics",
  get: async () => {
    try {
      const res = await axios("https://fakestoreapi.com/products");
      return res.data || [];
    } catch (error) {
      console.log(`ERROR:/${error}`);
    }
  },
});

const CardContainer = (props) => {
  const dummyMusics = useRecoilValue(musics);
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
      <div className="d-flex gap-3 md-4 sm-3 flex-wrap ">
        {dummyMusics.map((music) => (
          <Cardss
            key={music.id}
            image={music.image}
            title={music.title}
            // description={music.description}
          />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
