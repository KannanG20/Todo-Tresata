import React from "react";
import { Tooltip } from "react-tooltip";

function CustomTooltip({ children, content, uniqueId }) {
  return (
    <>
      <a
        data-tooltip-id={uniqueId}
        data-tooltip-content={content}
        data-tooltip-place="top"
      >
        {children}
      </a>
      <Tooltip id={uniqueId} />
    </>
  );
}

export default CustomTooltip;
