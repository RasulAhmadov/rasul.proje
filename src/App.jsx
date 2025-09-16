import React from "react";
import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";

export default function App() {
  return (
    <div style={{
      display: "flex",
      minHeight: "100vh",
      gap: "24px",
      padding: "24px",
      backgroundColor: "#eaeaea"
    }}>
      {/* Sol sütun */}
      <LeftColumn />

      {/* Sağ sütun */}
      <RightColumn />
    </div>
  );
}
