import React from "react";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./components/Homepage/Hero";
import Watch from "./pages/watch.tsx";
import SignupPage from "./pages/Signup";
import LoginPage from "./pages/Login";
import Home from "./pages/Home";
import SingleWatch from "./pages/SingleWatch";

import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useNavigate,
} from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Watch />} />
        <Route path="/SignUp" element={<SignupPage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Watch" element={<SingleWatch />} />
      </Routes>
    </Router>
  );
};

export default App;

// import logo from "./logo.svg";
// import "./App.css";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
