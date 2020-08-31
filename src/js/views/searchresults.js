import React from "react";
import "../../styles/profile.scss";
import "../../styles/search.scss";
import { Searchcard } from "../component/searchcard";

export const Searchresults = () => {
	return (
		<div>
			<h3 className="view-header">Search Results</h3>
			<div className="grid-col3">
				<Searchcard />
				<Searchcard />
				<Searchcard />
				<Searchcard />
				<Searchcard />
				<Searchcard />
				<Searchcard />
				<Searchcard />
				<Searchcard />
				<Searchcard />
				<Searchcard />
				<Searchcard />
				<Searchcard />
				<Searchcard />
			</div>
		</div>
	);
};
