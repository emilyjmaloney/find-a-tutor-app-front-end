import React, { useState, useEffect, useContext } from "react";
import "../../styles/homepage.scss";
import { Context } from "../store/appContext";

export const Homepage = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	return (
		<div className="container-fluid">
			<div className="login-box w-100 justify-content-center d-flex align-items-center">
				<div className="w-50">
					<h2 className="display-4 text-center" id="top-title">
						Welcome Back!
					</h2>{" "}
					{/* Welcome title */}
					<form>
						<div className="form-group row">
							<label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
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
									id="inputEmail3"
									placeholder="Email Address"
									required
									autoFocus
									onChange={e => setEmail(e.target.value)}
								/>
							</div>
						</div>
						<div className="form-group row">
							<label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
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
									id="inputPassword3"
									placeholder="Password"
									required
									onChange={e => setPassword(e.target.value)}
								/>
							</div>
						</div>
						{/* I am a tutor / student radios */}
						{/* <fieldset className="form-group" id="top-radios">
							<div className="row">
								<legend className="col-form-label col-sm-2 pt-0">I am a </legend>
								<div className="col-sm-10">
									<div className="form-check">
										<input
											className="form-check-input"
											type="radio"
											name="gridRadios"
											id="gridRadios1"
											value="option1"
											checked
										/>
										<label className="form-check-label" htmlFor="gridRadios1">
											Student
										</label>
									</div>
									<div className="form-check">
										<input
											className="form-check-input"
											type="radio"
											name="gridRadios"
											id="gridRadios2"
											value="option2"
										/>
										<label className="form-check-label" htmlFor="gridRadios3">
											Tutor
										</label>
									</div>
								</div>
							</div>
						</fieldset> */}
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
									onClick={() => actions.login(email, password)}
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
			<div className="signup-box w-100">
				<div className="container w-75">
					<h2 className="display-4 text-center" id="signup-title">
						Create a New Account
					</h2>
					<form>
						<div className="d-flex flex-row">
							{/* left form RADIOS begins here */}
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
												value="option1"
												checked
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
												value="option2"
											/>
											<label className="form-check-label" htmlFor="exampleRadios2">
												Tutor
											</label>
										</div>
									</div>
								</div>
								{/* left form drop downs */}
								<div className="col" id="dropdowns">
									<p>Pick Three Subjects Relevant to You</p>
									<select className="row custom-select custom-select-md mb-3">
										<option selected>1st Subject</option>
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
										<option selected>2nd Subject</option>
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
										<option selected>3rd Subject</option>
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
								</div>
							</div>
							{/* right form begins here */}
							<div className="col-sm-6" id="right-form">
								<div className="form-group">
									<div className="form-row">
										<div className="form-group col-md-6">
											<label htmlFor="inputEmail4">First Name</label>
											<input
												type="email"
												className="form-control"
												id="inputEmail4"
                                                placeholder="First Name"
                                                onChange={e => setFirstName(e.target.value)}
											/>
										</div>
										<div className="form-group col-md-6">
											<label htmlFor="inputPassword4">Last Name</label>
											<input
												type="password"
												className="form-control"
												id="inputPassword4"
                                                placeholder="Last Name"
                                                onChange={e => setLastName(e.target.value)}
											/>
										</div>
									</div>
									<div className="form-group">
										<label htmlFor="inputAddress">Username</label>
										<div className="input-group">
											<div className="input-group-prepend">
												<span className=" input-group-text">
													<i className="far fa-user" />
												</span>
											</div>
											<input
												type="text"
												className="form-control"
												id="inputAddress"
												// <i className="far fa-user"></i>
                                                placeholder="Username"
                                                onChange={e => setUsername(e.target.value)}
											/>
										</div>
									</div>
									<div className="form-group">
										<label htmlFor="inputAddress2">Email Address</label>
										<div className="input-group">
											<div className="input-group-prepend">
												<span className=" input-group-text">
													<i className="fas fa-envelope" />
												</span>
											</div>
											<input
												type="text"
												className="form-control"
												id="inputAddress2"
												// <i className="fas fa-envelope"></i>
                                                placeholder="Email Address"
                                                onChange={e => setSignupEmail(e.target.value)}
											/>
										</div>
									</div>
									<div className="form-group">
										<label htmlFor="inputAddress3">Password</label>
										<div className="input-group">
											<div className="input-group-prepend">
												<span className=" input-group-text">
													<i className="fas fa-lock" />
												</span>
											</div>
											<input
												type="text"
												className="form-control"
												id="inputAddress3"
												// <i className="fas fa-lock"></i>
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
									type="submit"
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
