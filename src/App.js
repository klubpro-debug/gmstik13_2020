import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import CardStatistik from "./CardStatistik";
import CardTotalKasus from "./CardTotalKasus";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "./style.css";

function App() {
	return (
		<div className="App">
			<Router>
				<Header />
				<Switch>
					<Route path="/">
						<CardStatistik />
					</Route>
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
