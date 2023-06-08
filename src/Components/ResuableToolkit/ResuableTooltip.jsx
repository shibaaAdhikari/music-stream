import React from "react";
import { Button, UncontrolledTooltip } from "reactstrap";

const ReusableTooltip = ({ id, content, placement, trigger, style }) => {
  return (
    <>
      <div className="text-center">
        <Button id={id}>Click me</Button>
        <UncontrolledTooltip
          placement={placement}
          target={id}
          trigger={trigger}
          style={style}
        >
          {content}
        </UncontrolledTooltip>
      </div>
    </>
  );
};

export default ReusableTooltip;
