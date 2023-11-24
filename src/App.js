import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BlogList from "./components/BlogList";
import Blog from "./components/Blog";
import About from "./components/About";
import Landingpage from "./components/Landingpage";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'flowbite/dist/flowbite.css';
import Footer from "./components/Footer";
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
        <Footer />
    </div>
  </BrowserRouter>
  );
}

export default App;
