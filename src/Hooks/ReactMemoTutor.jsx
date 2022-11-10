import React, { useState, memo } from "react";

function Swatch({ color }) {
  console.log(`SwatchRender ${color}`);
  return (
    <div style={{ width: 75, height: 75, background: color, margin: 2 }}></div>
  );
}

const MemoedSwatch = memo(Swatch);

function ReactMemoTutor(props) {
  const [appRenderIndex, setAppRenderIndex] = useState(0);
  const [color, setColor] = useState("red");

  console.log(`App rerender ${appRenderIndex}`);

  return (
    <>
      <div>
        <button onClick={() => setAppRenderIndex(appRenderIndex + 1)}>
          Re-Render APP
        </button>
        <button onClick={() => setColor(color === "red" ? "blue" : "red")}>
          Change Color
        </button>
      </div>
      <div>
        <MemoedSwatch color={color} />
      </div>
    </>
  );
}

export default ReactMemoTutor;
