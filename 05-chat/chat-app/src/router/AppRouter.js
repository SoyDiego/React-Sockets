import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";
import ChatPage from "../pages/ChatPage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

const AppRouter = () => {
	return (
		<Router>
			<div>
				{/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
				<Switch>
					<Route path="/login" component={LoginPage} />
					<Route path="/register" component={RegisterPage} />
					<Route path="/" component={ChatPage} />

                    <Redirect to="/"/>
				</Switch>
			</div>
		</Router>
	);
};

export default AppRouter;
