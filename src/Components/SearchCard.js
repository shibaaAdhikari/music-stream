import React from "react";
const getRandomColor = () => {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const SearchCard = ({ title, image }) => {
  const backgroundColor = getRandomColor();
  return (
    <div>
      {
        <div
          style={{
            backgroundColor: backgroundColor,
            width: "12rem",
            height: "18vh",
            borderRadius: "15px",
          }}
          className="mt-5 "
        >
          <h4 className="mx-2 pt-3 ">{title}</h4>
          <div>
            <img src={image} alt="img" className="img-fluid" />
          </div>
        </div>
      }
    </div>
  );
};

export default SearchCard;
