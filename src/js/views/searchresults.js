import React, { useContext } from "react";
import "../../styles/profile.scss";
import "../../styles/search.scss";
import { Searchcard } from "../component/searchcard";
import { Context } from "../store/appContext";

export const Searchresults = () => {
	const { store, actions } = useContext(Context);
	return (
		<div>
			<h3 className="view-header">Search Results</h3>
			<div className="grid-col3">
				{store.searchresults &&
					store.searchresults.map(result => {
						return <Searchcard key={result.id} user={result} />;
					})}
			</div>
		</div>
	);
};
