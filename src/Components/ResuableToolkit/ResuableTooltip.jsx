import React from "react";
import { Button, UncontrolledTooltip } from "reactstrap";

const ReusableTooltip = ({ id, content, placement, trigger, style }) => {
  return (
    <>
      <div className="text-center">
        <Button id="hello"}>Click me</Button>
        <UncontrolledTooltip
          placement="right"
          target="hello"
          trigger={trigger}
          style={style}
        >
          helllooo
        </UncontrolledTooltip>
      </div>
    </>
  );
};

export default ReusableTooltip;
