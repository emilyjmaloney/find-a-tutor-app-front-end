import React, { useState, useContext } from "react";
import "../../styles/searchfilter.scss";
import { Context } from "../store/appContext";

export const Searchfilter = () => {
	const [subject, setSubject] = useState("");
	const [grade, setGrade] = useState("");
	const [radio, setRadio] = useState("");
	const [zipcode, setZipcode] = useState("");
	const [isStudent, setIsStudent] = useState(false);
	const { store, actions } = useContext(Context);

	return (
		<div className="default-cover-image">
			<div className="grid-container">
				<div>
					<h3>
						{" "}
						{!isStudent
							? "Connecting Tutors with Students: Start Helping Today"
							: "Struggling with School? Connect with a Tutor Today"}{" "}
					</h3>
					<p>
						Use the filters below to find{" "}
						{!isStudent ? "students searching for a tutor like you!" : "a tutor!!"}{" "}
					</p>
					<button className="btn btn-outline-secondary btn-sm" onClick={e => setIsStudent(!isStudent)}>
						{isStudent ? "Tutors Click Here!" : "Not a Tutor? Click here!"}
					</button>
				</div>
				<div id="search-forms">
					<div id="filters">
						<select
							className="row custom-select custom-select-md mb-3"
							onChange={event => setSubject(event.target.value)}
							value={subject}
							required>
							<option selected>Subject (Mandatory)</option>
							{store.subjects.map((subject, index) => {
								return (
									<option key={index} value={subject}>
										{subject}
									</option>
								);
							})}
						</select>
						{!isStudent && (
							<select
								className="row custom-select custom-select-md mb-3"
								onChange={event => setGrade(event.target.value)}
								value={grade}>
								<option selected>Grade (Optional)</option>
								{store.grades.map((grade, index) => {
									return (
										<option key={index} value={grade}>
											{grade}
										</option>
									);
								})}
							</select>
						)}
						<div id="zipcode">
							<input
								type="text"
								className="form-control"
								id="inputFirstName"
								placeholder="Zip Code (Optional)"
								onChange={e => setZipcode(e.target.value)}
								value={zipcode}
							/>
						</div>
					</div>
					<div id="radios">
						<h5>Location Preference (Mandatory)</h5>
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
					<button
						onClick={async () => {
							let search = await actions.search(subject, radio, grade, zipcode, isStudent);
							if (search) {
								history.push("/search");
							}
						}}
						disabled={subject === "" || radio === ""}>
						{isStudent
							? "Click Here to Search for a Qualified Tutor"
							: "Click Here to Begin Your Search for Students!"}
					</button>
					{/* onClick flux action fetch to API
                     main.py build query endpoint to recieve  */}
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
