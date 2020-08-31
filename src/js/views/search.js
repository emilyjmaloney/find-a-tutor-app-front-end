import React from "react";
import "../../styles/profile.scss";
import { Searchfilter } from "../component/searchfilter";
import { Searchresults } from "../views/searchresults";

export const Search = () => {
	return (
		<div>
			<Searchfilter />
			<div className="grid-container fix-footer">
				<Searchresults />
			</div>
		</div>
	);
};
