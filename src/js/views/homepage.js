import React, { useState, useEffect, useContext } from "react";
import "../../styles/homepage.scss";
import { Context } from "../store/appContext";
import { useHistory } from "react-router-dom";

export const Homepage = () => {
	const { store, actions } = useContext(Context);
	const history = useHistory();
	//login
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	// signup
	const [isStudent, setIsStudent] = useState(true);
	const [firstSubject, setFirstSubject] = useState("");
	const [secondSubject, setSecondSubject] = useState("");
	const [thirdSubject, setThirdSubject] = useState("");
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [username, setUsername] = useState("");
	const [signupEmail, setSignupEmail] = useState("");
	const [signupPassword, setSignupPassword] = useState("");

	return (
		<div className="container-fluid">
			<div className="login-box w-100 justify-content-center d-flex align-items-center" id="login-box">
				<div className="w-50">
					<h2 className="display-4 text-center" id="top-title">
						Welcome Back!
					</h2>{" "}
					<form>
						<div className="form-group row">
							<label htmlFor="loginEmail" className="col-sm-2 col-form-label">
								Email Address
							</label>
							<div className="input-group">
								<div className="input-group-prepend">
									<span className=" input-group-text">
										<i className="far fa-user" />
									</span>
								</div>
								<input
									type="email"
									className="form-control"
									id="loginEmail"
									placeholder="Email Address"
									required
									autoFocus
									onChange={e => setEmail(e.target.value)}
								/>
							</div>
						</div>
						<div className="form-group row">
							<label htmlFor="loginPassword" className="col-sm-2 col-form-label">
								Password
							</label>
							<div className="input-group">
								<div className="input-group-prepend">
									<span className=" input-group-text">
										<i className="fas fa-envelope" />
									</span>
								</div>
								<input
									type="password"
									className="form-control"
									id="loginPassword"
									placeholder="Password"
									required
									onChange={e => setPassword(e.target.value)}
								/>
							</div>
						</div>
						<div className="checkbox mb-3">
							<label>
								<input type="checkbox" value="remember-me" /> Remember me
							</label>
						</div>
						<div className="form-group row justify-content-center" id="login-button">
							<div className="col-sm-4">
								<button
									// onClick={e => {
									// 	e.preventDefault();
									// 	e.stopPropagation();
									// 	actions.login(email, password);
									// }}
									onClick={async () => {
										let login = await actions.login(email, password);
										if (login) {
											history.push("/account");
										}
									}}
									type="button" //changed from submit
									className="btn btn-secondary btn-md btn-block text-center rounded-pill">
									Login
								</button>
							</div>
						</div>
						<div className="col-12 justify-content-center" id="scroll">
							<p className="text-center">Scroll down to register for your free account!</p>
						</div>
					</form>
				</div>
			</div>
			<div className="signup-box w-100" id="signup-box">
				<div className="container w-75">
					<h2 className="display-4 text-center" id="signup-title">
						Create a New Account
					</h2>
					<form>
						<div className="d-flex flex-row">
							<div className="col-sm-6" id="left-forms">
								<div className="row col" id="radios">
									<p>
										Are you a Student or a Tutor? <br />
									</p>
									<div className="col" id="left-form">
										<div className="form-group" />
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												name="exampleRadios"
												id="exampleRadios1"
												checked={isStudent}
												onChange={e => setIsStudent(!isStudent)}
											/>
											<label className="form-check-label" htmlFor="exampleRadios1">
												Student
											</label>
										</div>
										<div className="form-check">
											<input
												className="form-check-input"
												type="radio"
												name="exampleRadios"
												id="exampleRadios2"
												checked={!isStudent}
												onChange={e => setIsStudent(!isStudent)}
											/>
											<label className="form-check-label" htmlFor="exampleRadios2">
												Tutor
											</label>
										</div>
									</div>
								</div>
								<div className="col" id="dropdowns">
									<p>Pick Three Subjects Relevant to You</p>
									<select
										id="first-subject"
										value={firstSubject}
										onChange={e => setFirstSubject(event.target.value)}
										className="row custom-select custom-select-md mb-3">
										<option selected>1st Subject</option>
										<option value="Math">Math</option>
										<option value="science">Science</option>
										<option value="Language Arts">Language Arts</option>
										<option value="Reading">Reading</option>
										<option value="Writing">Writing</option>
										<option value="English">English</option>
										<option value="Science">Science</option>
										<option value="Social Studies">Social Studies</option>
										<option value="GED / SAT">GED / SAT</option>
										<option value="Spanish">Spanish</option>
										<option value="Other">Other</option>
									</select>
									<select
										id="second-subject"
										value={secondSubject}
										onChange={e => setSecondSubject(event.target.value)}
										className="row custom-select custom-select-md mb-3">
										<option selected>2nd Subject</option>
										<option value="Math">Math</option>
										<option value="science">Science</option>
										<option value="Language Arts">Language Arts</option>
										<option value="Reading">Reading</option>
										<option value="Writing">Writing</option>
										<option value="English">English</option>
										<option value="Science">Science</option>
										<option value="Social Studies">Social Studies</option>
										<option value="GED / SAT">GED / SAT</option>
										<option value="Spanish">Spanish</option>
										<option value="Other">Other</option>
									</select>
									<select
										id="third-subject"
										value={thirdSubject}
										onChange={e => setThirdSubject(event.target.value)}
										className="row custom-select custom-select-md mb-3">
										<option selected>3rd Subject</option>
										<option value="Math">Math</option>
										<option value="science">Science</option>
										<option value="Language Arts">Language Arts</option>
										<option value="Reading">Reading</option>
										<option value="Writing">Writing</option>
										<option value="English">English</option>
										<option value="Science">Science</option>
										<option value="Social Studies">Social Studies</option>
										<option value="GED / SAT">GED / SAT</option>
										<option value="Spanish">Spanish</option>
										<option value="Other">Other</option>
									</select>
								</div>
							</div>
							<div className="col-sm-6" id="right-form">
								<div className="form-group">
									<div className="form-row">
										<div className="form-group col-md-6">
											<label htmlFor="inputFirstName">First Name</label>
											<input
												type="text"
												className="form-control"
												id="inputFirstName"
												placeholder="First Name"
												onChange={e => setFirstName(e.target.value)}
											/>
										</div>
										<div className="form-group col-md-6">
											<label htmlFor="inputLastName">Last Name</label>
											<input
												type="text"
												className="form-control"
												id="inputLastName"
												placeholder="Last Name"
												onChange={e => setLastName(e.target.value)}
											/>
										</div>
									</div>
									<div className="form-group">
										<label htmlFor="inputUsername">Username</label>
										<div className="input-group">
											<div className="input-group-prepend">
												<span className=" input-group-text">
													<i className="far fa-user" />
												</span>
											</div>
											<input
												type="text"
												className="form-control"
												id="inputUsername"
												placeholder="Username"
												onChange={e => setUsername(e.target.value)}
											/>
										</div>
									</div>
									<div className="form-group">
										<label htmlFor="inputEmail">Email Address</label>
										<div className="input-group">
											<div className="input-group-prepend">
												<span className=" input-group-text">
													<i className="fas fa-envelope" />
												</span>
											</div>
											<input
												type="email"
												className="form-control"
												id="inputEmail"
												placeholder="Email Address"
												onChange={e => setSignupEmail(e.target.value)}
											/>
										</div>
									</div>
									<div className="form-group">
										<label htmlFor="inputPassword">Password</label>
										<div className="input-group">
											<div className="input-group-prepend">
												<span className=" input-group-text">
													<i className="fas fa-lock" />
												</span>
											</div>
											<input
												type="password"
												className="form-control"
												id="inputPassword"
												placeholder="Password"
												onChange={e => setSignupPassword(e.target.value)}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>

						<div className="form-group row justify-content-center" id="signup-button">
							<div className="col-sm-4">
								<button
									onClick={async () => {
										await actions.signup(
											isStudent,
											firstName,
											lastName,
											username,
											signupEmail,
											signupPassword
										);
										history.push("/homepage#login-box");
									}}
									type="button"
									className="btn btn-secondary btn-md btn-block text-center rounded-pill">
									Sign Up
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};
// To use Bootstrap in JavaScript – 2 Steps
// 1. Write in terminal: npm install jquery popper.js
// 2. In index.js file: import bootstrap
// With the input of the Find A Tutor! App:
// Create a state and then control the value of the input with the state
// In the to do list: Examples of input
// The contact list: Bootstrap Modal with the clickable trash can to delete input.
// *Can go to fontawesome to find other clickable icons to do different things.

// # All Users
// # UN: emilyjean.maloney@gmail.com PW: emsmSecret
// # UN: emily@gmail.com PW: password123
// # UN: emilym@gmail.com PW: password123

// changing input types: https://www.w3schools.com/html/html_form_input_types.asp
