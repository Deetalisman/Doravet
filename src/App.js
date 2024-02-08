import Page1 from "./page1";
import Register from "./register";
import Login from "./login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./homepage";
import Pollform from "./pollform";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Page1 />} />
          <Route exact path="/page1" element={<Page1 />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/homepage" element={<Homepage />} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
