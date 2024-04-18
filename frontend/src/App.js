import React from "react";
import Navbar from "./components/navbar/Navbar";
import Homepage from "./components/Homepage/Hero";
import Watch from "./pages/watch.tsx";
import SignupPage from "./pages/Signup";
import LoginPage from "./pages/Login";
import Home from "./pages/Home";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useNavigate,
} from "react-router-dom";

const App = () => {
  return (
<<<<<<< HEAD
    <div className="scrollbar-hide">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Watch />} />
          <Route path="/SignUp" element={<SignupPage />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Test" element={<Test />} />
        </Routes>
      </Router>
    </div>
=======
    <Router> 
      <Navbar/>
      <Routes>
      <Route path="/" element={<Watch />} />
      <Route path="/SignUp" element={<SignupPage />} />
      <Route path="/Login" element={<LoginPage />} />
      <Route path="/Home" element={<Home />} />
      </Routes>
    </Router>
>>>>>>> 44ea344f747a0254f0cbb5dfb4cf6aa939fd7189
    // <section
    // //   className="h-screen bg-cover
    // // font-[Poppins] md:bg-top bg-center"
    // >
    //   <Navbar />
    //   <Watch />
    //   {/* <Homepage /> */}
    // </section>
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
