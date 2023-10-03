import React from "react";
import { Button } from "reactstrap";

const LoginButton = ({ icon, title, onClick }) => {
  return (
    <div className="">
      <Button
        className="button p-3 rounded-pill mb-2"
        onClick={onClick}
        style={{ backgroundColor: "black", width: "100%" }}
      >
        <span className="button-icon mx-3">{icon}</span>
        <span className="button-title text-light">{title}</span>
      </Button>
    </div>
  );
};

export default LoginButton;
