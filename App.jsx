import react from "react";
import reactDOM from "react-dom";

import Head from "./Head";
import Foot from "./Foot";
import Box from "./Box";

function App() {
  return (
    <div>
      <Head />;
      <Box />
      <Box />
      <Box />
      <Foot />;
    </div>
  );
}
export default App;
