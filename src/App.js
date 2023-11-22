import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BlogList from "./components/BlogList";
import Blog from "./components/Blog";
import About from "./components/About";
import Landingpage from "./components/Landingpage";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:postId" element={<Blog />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </div>
  </BrowserRouter>
  );
}

export default App;
