import React from "react";
import SearchCard from "../../Components/SearchCard";
import features from "../../Data/features.json";
import { Link } from "react-router-dom";

const Features = () => {
  return (
    <div className="text-light d-flex flex-wrap gap-4 align-contents-center">
      {features.searchCards.map((feature) => (
        <Link
          to={`/FeatureContainer`}
          key={feature.id}
          className="text-decoration-none text-light"
        >
          <SearchCard
            key={feature.id}
            title={feature.title}
            image={feature.image}
          />
        </Link>
      ))}
    </div>
  );
};

export default Features;
