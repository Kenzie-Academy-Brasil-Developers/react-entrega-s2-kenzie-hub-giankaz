import { Switch, Route, Redirect } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { useState, useEffect } from "react";

export default function Routes() {
	const [token, setToken] = useState("");
	const [state, setState] = useState(false);

	const tk = window.localStorage.getItem("@Khub:token");

	useEffect(() => {
		if (tk !== null) {
			setState(true);
		} else {
			setState(false);
		}
	}, [tk]);

	useEffect(() => {
		const interval = setInterval(() => {
			const tokenCheck = window.localStorage.getItem("@Khub:token");
			if (tokenCheck === null) {
				setState(false);
				window.localStorage.removeItem("@Khub:user");
			}
		}, 5000);

		return () => clearInterval(interval);
	}, []);

	return (
		<Switch>
			<Route exact path="/">
				{state ? <Redirect to="/home" /> : <Login setToken={setToken} />}
			</Route>
			<Route exact path="/register">
				<Register />
			</Route>
			<Route exact path="/home">
				{state ? <Home setState={setState} /> : <Redirect to="/" />}
			</Route>
		</Switch>
	);
}
