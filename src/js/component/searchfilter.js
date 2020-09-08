import React, { useState, useContext } from "react";
import "../../styles/profile.scss";
import { Context } from "../store/appContext";

export const Searchfilter = () => {
	const [subject, setSubject] = useState("");
	const [grade, setGrade] = useState("");
	const [radio, setRadio] = useState("");
	const { store, actions } = useContext(Context);

	return (
		<div className="default-cover-image">
			<div className="grid-container">
				<div>
					<h3>Search for Students Needing Your Help!</h3>
					<p>Use the filters below to find students searching for a tutor like you!</p>
				</div>
				<div id="search-forms">
					<div id="filters">
						<select
							className="row custom-select custom-select-md mb-3"
							onChange={event => setSubject(event.target.value)}
							value={subject}>
							<option selected>Subject</option>
							{store.subjects.map((subject, index) => {
								return (
									<option key={index} value={subject}>
										{subject}
									</option>
								);
							})}
						</select>
						<select
							className="row custom-select custom-select-md mb-3"
							onChange={event => setGrade(event.target.value)}
							value={grade}>
							<option selected>Grade</option>
							{store.grades.map((grade, index) => {
								return (
									<option key={index} value={grade}>
										{grade}
									</option>
								);
							})}
						</select>
						<div className>
							<input type="text" className="form-control" id="inputFirstName" placeholder="Zip Code" />
						</div>
					</div>
					{/* add onChange to radios */}
					<div id="radios">
						<div className="form-check form-check-inline">
							<input
								className="form-check-input"
								type="radio"
								name="inlineRadioOptions"
								id="inlineRadio1"
								value="option1"
								onChange={e => setRadio(e.target.value)}
								checked={radio === "option1"}
							/>
							<label className="form-check-label" htmlFor="inlineRadio1">
								In-Person or Online
							</label>
						</div>
						<div className="form-check form-check-inline">
							<input
								className="form-check-input"
								type="radio"
								name="inlineRadioOptions"
								id="inlineRadio2"
								value="option2"
								onChange={e => setRadio(e.target.value)}
								checked={radio === "option2"}
							/>
							<label className="form-check-label" htmlFor="inlineRadio2">
								In-Person Only
							</label>
						</div>
						<div className="form-check form-check-inline">
							<input
								className="form-check-input"
								type="radio"
								name="inlineRadioOptions"
								id="inlineRadio3"
								value="option3"
								onChange={e => setRadio(e.target.value)}
								checked={radio === "option3"}
							/>
							<label className="form-check-label" htmlFor="inlineRadio3">
								Online Only
							</label>
						</div>
					</div>
				</div>
				<div id="search-footer">
					<button disabled={subject === "" || radio === ""}>Search for Students</button>
				</div>
			</div>
		</div>
	);
};

<button
	onClick={async () => {
		let login = await actions.login(email, password);
		if (login) {
			history.push("/account");
		}
	}}
	type="button" //changed from submit
	className="btn btn-secondary btn-md btn-block text-center rounded-pill">
	Login
</button>;