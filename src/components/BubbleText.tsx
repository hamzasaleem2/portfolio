import React from "react";

const BubbleText = ({ text }: { text: string }) => {
  return (
    <h2 className="text-xs font-mono text-muted-foreground">
      {text.toString().split("").map((child, idx) => (
        <span className="hoverText" key={idx}>
          {child}
        </span>
      ))}
    </h2>
  );
};

export default BubbleText;