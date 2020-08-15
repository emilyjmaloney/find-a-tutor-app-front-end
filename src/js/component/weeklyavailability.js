import React from "react";
import "../../styles/profile.scss";

export function Weeklyavailability() {
	return (
		<div className="grid-col1">
			<div className="weekday monday">
				<div className="headline">
					<h5>Monday</h5>
				</div>
				<div className="grid-col3">
					<div className="slot">Morning Session</div>
					<div className="slot">Afternoon Session</div>
					<div className="slot">Evening Session</div>
				</div>
			</div>
			<div className="weekday tuesday">
				<div className="headline">
					<h5>Tuesday</h5>
				</div>
				<div className="grid-col3">
					<div className="slot">Morning Session</div>
					<div className="slot">Afternoon Session</div>
					<div className="slot">Evening Session</div>
				</div>
			</div>
			<div className="weekday wednesday">
				<div className="headline">
					<h5>Wednesday</h5>
				</div>
				<div className="grid-col3">
					<div className="slot">Morning Session</div>
					<div className="slot">Afternoon Session</div>
					<div className="slot">Evening Session</div>
				</div>
			</div>
			<div className="weekday thursday">
				<div className="headline">
					<h5>Thursday</h5>
				</div>
				<div className="grid-col3">
					<div className="slot">Morning Session</div>
					<div className="slot">Afternoon Session</div>
					<div className="slot">Evening Session</div>
				</div>
			</div>
			<div className="weekday friday">
				<div className="headline">
					<h5>Friday</h5>
				</div>
				<div className="grid-col3">
					<div className="slot">Morning Session</div>
					<div className="slot">Afternoon Session</div>
					<div className="slot">Evening Session</div>
				</div>
			</div>
			<div className="weekday saturday">
				<div className="headline">
					<h5>Saturday</h5>
				</div>
				<div className="grid-col3">
					<div className="slot">Morning Session</div>
					<div className="slot">Afternoon Session</div>
					<div className="slot">Evening Session</div>
				</div>
			</div>
			<div className="weekday sunday">
				<div className="headline">
					<h5>Sunday</h5>
				</div>
				<div className="grid-col3">
					<div className="slot">Morning Session</div>
					<div className="slot">Afternoon Session</div>
					<div className="slot">Evening Session</div>
				</div>
			</div>
		</div>
	);
}
