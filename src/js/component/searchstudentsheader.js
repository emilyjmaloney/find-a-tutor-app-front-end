import React from "react";
import "../../styles/searchheaders.scss";

export function Searchstudentsheader() {
	return (
		<div className="container-fluid">
			<div id="search-header">
				<h2>Search for Students Needing Your Help!</h2>
				<p>Use the filters below to find students searching for a tutor like you!</p>
			</div>{" "}
			{/* end of search header */}
			<div id="search-forms">
				<div id="filters">
					<select className="row custom-select custom-select-md mb-3">
						<option selected>Subject</option>
						<option value="1">Math</option>
						<option value="2">Science</option>
						<option value="3">Language Arts</option>
						<option value="3">Reading</option>
						<option value="3">Writing</option>
						<option value="3">English</option>
						<option value="3">Science</option>
						<option value="3">Social Studies</option>
						<option value="3">GED / SAT</option>
						<option value="3">Spanish</option>
						<option value="3">Other</option>
					</select>
					<select className="row custom-select custom-select-md mb-3">
						<option selected>Grade</option>
						<option value="1">Primary (K-2nd)</option>
						<option value="2">Intermediate (3rd-5th)</option>
						<option value="3">Middle School (6th-8th)</option>
						<option value="3">High School (9th-12th)</option>
						<option value="3">College / Higher Ed</option>
						<option value="3">Other</option>
					</select>
				</div>
				<div id="radios">
					<div className="form-check form-check-inline">
						<input
							className="form-check-input"
							type="radio"
							name="inlineRadioOptions"
							id="inlineRadio1"
							value="option1"
						/>
						<label className="form-check-label" htmlFor="inlineRadio1">
							In-person Only
						</label>
					</div>
					<div className="form-check form-check-inline">
						<input
							className="form-check-input"
							type="radio"
							name="inlineRadioOptions"
							id="inlineRadio2"
							value="option2"
						/>
						<label className="form-check-label" htmlFor="inlineRadio2">
							Online Only
						</label>
					</div>
					<div className="form-check form-check-inline">
						<input
							className="form-check-input"
							type="radio"
							name="inlineRadioOptions"
							id="inlineRadio3"
							value="option3"
						/>
						<label className="form-check-label" htmlFor="inlineRadio3">
							In-person or Online
						</label>
					</div>
				</div>
			</div>
			<div id="search-footer">
				<button>Search</button>
			</div>
		</div> // end of container-fluid
	);
}
