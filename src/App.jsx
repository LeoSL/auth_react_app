import React from "react";

import Local from "./Local.jsx";

function App() {
  const title = "Beautiful App";

  return (
    <div>
      <h1>This is a {title}</h1>
      <h2>Life is good -- {40 + 2}</h2>
      <Local />
    </div>
  );
}

export default App;
