import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from './pages'
import About from './pages/about'
import Contact from './pages/contact'
import Download from './pages/download'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/download" element={<Download />} />
        <Route path="https://www.google.com" href="https://www.google.com"/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
