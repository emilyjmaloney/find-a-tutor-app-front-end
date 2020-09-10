import React from "react";
import "../../styles/profile.scss";
import { Publicprofilestudent } from "../views/publicprofilestudent";
import { Publicprofiletutor } from "../views/publicprofiletutor";

export const Profile = () => {
	return (
		<div>
			<Publicprofilestudent />
			{/* <Publicprofiletutor /> */}
		</div>
	);
};
