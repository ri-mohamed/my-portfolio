import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import SinglPost from "./components/SinglPost";
import Post from "./components/Post";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
        <NavBar/>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="/about" element={<About />}/>
          <Route path="/project" element={<Project />}/>
          <Route path="/post/:slug" element={<SinglPost />}/>
          <Route path="/post" element={<Post />}/>
        </Route> 
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
