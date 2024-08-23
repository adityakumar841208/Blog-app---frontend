import React from 'react';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import CreateBlog from './Components/CreateBlog';
import Home from './Components/Home';
import Signin from './Components/Signin';
import Login from './Components/Login';
import YourBlogs from './Components/YourBlogs';
import ViewBlog from './Components/ViewBlog';


function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateBlog />} />
            <Route path="/signin" element={<Sign UP/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/yourblogs" element={<YourBlogs />} />
            <Route path="/viewBlog" element={<ViewBlog />} />

          </Routes>
        </main>
        <Footer />
      </div>
    </Router >
  );
}

export default App;
