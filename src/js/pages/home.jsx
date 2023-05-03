import React from "react";
import Navbar from "../component/Navbar.jsx";
import Jumbotron from "../component/Jumbotron.jsx";
import Card from "../component/Card.jsx"
import Footer from "../component/Footer.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<>
		<Navbar />
		<div className="container">
		<Jumbotron />
		<Card />
		</div>
		<Footer />
		</>
	);
};

export default Home;
