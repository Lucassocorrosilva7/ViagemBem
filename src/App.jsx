import { Home,About,Service,Contact  } from "./routes";
import {  Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/about" element={<About />}  />
          <Route path="/service" element={<Service />}  />
          <Route path="/contact" element={<Contact />}  />
        </Routes>
    </div>
  );
}

export default App;
