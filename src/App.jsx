import { Home,About,Service,Contact,Login  } from "./pages";
import {  Routes, Route } from "react-router-dom";
import ScrollTop from "./components/ScrollTop";

function App() {
  return (
    <div className="App">
        <ScrollTop />
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/about" element={<About />}  />
          <Route path="/service" element={<Service />}  />
          <Route path="/contact" element={<Contact />}  />
          <Route path="/signup" element={<Login />}  />
        </Routes>
    </div>
  );
}

export default App;
