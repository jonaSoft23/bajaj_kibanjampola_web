import React from 'react'
import Header from "Components/Header";
import SideBar from "Components/SideBar";
import Footer from "Components/Footer";
import {Link} from "react-router-dom"

const Home = () => (
    <div>
        <Header />
        <SideBar />
            <Link to="/Page2">Page2</Link>
        <Footer />
    </div>

);

export default Home;