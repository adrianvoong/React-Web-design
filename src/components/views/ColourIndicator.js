import React from "react";
import "../UI/Card"; // Import the CSS file for Card styles

const ColourIndicator = ({ affinityID, children }) => {
  let borderColorClass;

  switch (affinityID) {
    case 1:
      borderColorClass = "red-border";
      break;
    case 2:
      borderColorClass = "green-border";
      break;
    default:
      borderColorClass = "grey-border";
      break;
  }

  return <div className={`card ${borderColorClass}`}>{children}</div>;
};

export default ColourIndicator;
