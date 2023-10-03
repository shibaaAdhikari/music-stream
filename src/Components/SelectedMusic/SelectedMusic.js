import React, { useRef } from "react";
import cdImage from "../../Assests/cdcover.png";

const SelectedMusic = ({ music }) => {
  const cdImageRef = useRef(null);
  const rotationAnimation = `
    @keyframes rotate {
      from {
        transform: rotate(0deg);
      }
      to {
        transform: rotate(360deg);
      }
    }
  `;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "3rem",
      }}
      className="mx-5"
    >
      <style>{rotationAnimation}</style>
      {/* <div style={{ width: "20%", height: "50%" }} className="mt-5"> */}
      {/* <img
          src={music.image}
          alt="img"
          style={{ width: "100%", height: "100%", borderRadius: "5%" }}
          className="text-light"
        /> */}
      <div
        style={{
          width: "30%",
          height: "55%",
          position: "relative",
          animation: "rotate 15s infinite linear",
          transformOrigin: "center center",
        }}
      >
 <img
          ref={cdImageRef}
          src={cdImage}
          alt="CD"
          className="cd-img "
          style={{
            width: "100%",
            height: "100%",
          }}
        />
      </div>

      <div style={{ textAlign: "flex-start" }}>
        {/* <h3 className="text-light mt-5 mb-2" style={{ fontFamily: "serif" }}>
          {" "}
          Playlist
        </h3> */}
        <h5
          className="text-light  mt-5"
          style={{
            fontWeight: "bolder",
            fontSize: "70px",
            fontFamily: "cursive",
          }}
        >
          {music.title}
        </h5>
        <h6 className="text-light mt-1">{music.subTitle}</h6>
      </div>
    </div>
  );
};

export default SelectedMusic;
