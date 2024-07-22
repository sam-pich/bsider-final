import React from 'react';
import Navbar from './Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Home/home';
import Explore from "./explore/explore";
import Placeholder from "./Placeholder/placeholder";
import Review from "./reviewpage/review";
import Charts from "./Charts/charts";
import Signup from "./signup/signup";
import Login from "./login/login";

function App() {
    return (
        <>
            <Router>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/explore" element={<Explore />} />
                    <Route path="/placeholder" element={<Placeholder />} />
                    <Route path="/review" element={<Review />} />
                    <Route path="/charts" element={<Charts />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />

                </Routes>
            </Router>
        </>
    );
}

export default App;