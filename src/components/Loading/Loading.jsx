import React from "react";
const Loading = () => {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "5px",
      }}
    >
      <span
        style={{
          color: "blue",
          fontWeight: "bolder",
          fontSize: "large",
          letterSpacing: "2px",
        }}
      >
        Loading...
      </span>
    </div>
  );
};

export default Loading;
