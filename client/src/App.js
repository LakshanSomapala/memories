import React from "react";
import { Route, Routes, Switch } from "react-router-dom";

import Home from "./components/home/homeComponent";
import Navbar from "./components/navbar/navbarComponent";
import Auth from "./components/auth/authComponent";

import "./App.css";
import "./styles.css";

const App = () => {
	return (
		<>
			<Routes>
				<Route path="/" element={<Navbar />}>
					<Route index element={<Home />} />
					<Route path="auth" element={<Auth />}></Route>
				</Route>
			</Routes>
		</>
	);
};

export default App;
