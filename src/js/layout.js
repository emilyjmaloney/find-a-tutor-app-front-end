import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home";
import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";
import { Homepage } from "./views/homepage";
import { Newnavbar } from "./component/newnavbar";
import { Footer } from "./component/footer";
import { Profileheader } from "./component/profileheader";
import { Profilenav } from "./component/profilenav";
import { Useraccount } from "./views/useraccount";
import { Adminstudent } from "./views/adminstudent";
import { Account } from "./views/account";
import { Newfooter } from "./component/newfooter";
import { Admintutor } from "./views/admintutor";
import { Publicprofilestudent } from "./views/publicprofilestudent";
import { Messages } from "./views/messages";

//create your first component
export const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";
	return (
		<div className="d-flex flex-column h-100">
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Newnavbar />
					<Switch>
						<Route exact path="/">
							<Publicprofilestudent />
						</Route>
						<Route exact path="/demo">
							<Demo />
						</Route>
						<Route exact path="/single/:theid">
							<Single />
						</Route>
						<Route exact path="/account">
							<Account />
						</Route>
						<Route exact path="/messages">
							<Messages />
						</Route>
						<Route exact path="/homepage">
							<Homepage name={"Hello World"} />
						</Route>
						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Newfooter />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};
export default injectContext(Layout);
// exact path="/adminstudent"
