import React from "react";
import SearchCard from "../../Components/SearchCard";
import features from "../../Data/features.json";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { searchFunction } from "../../Components/Recoil/Store";

const Features = () => {
  const searchQuery = useRecoilValue(searchFunction);

  // Filter the features based on the search query
  const filteredFeatures = features.searchCards.filter((feature) =>
    feature.title
      .toLowerCase()
      .startsWith(searchQuery.toLowerCase().slice(0, 2))
  );
  return (
    <>
      <p className="text-light mt-2 mx-5 fs-3">Browse All</p>
      <div
        className="text-light d-flex flex-wrap gap-4 align-contents-center"
        style={{ marginLeft: "3%" }}
      >
        {/* {features.searchCards.map((feature) => ( */}
        {filteredFeatures.map((feature) => (
          <Link
            to={`/FeatureContainer/${feature.title}`}
            key={feature.title}
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
    </>
  );
};

export default Features;
