import React from "react";

export const Homepage = () => {
	return (
		<div className="container-fluid bg-secondary">
			<div className="login-box w-100 justify-content-center d-flex align-items-center">
				<div className="w-50">
					<h2 className="display-4 text-center">Welcome Back!</h2> {/* Welcome title */}
					<form>
						<div className="form-group row">
							<label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
								Username
							</label>
							<div className="col-sm-10">
								<input type="email" className="form-control" id="inputEmail3" placeholder="Username" />
							</div>
						</div>
						<div className="form-group row">
							<label htmlFor="inputPassword3" className="col-sm-2 col-form-label">
								Password
							</label>
							<div className="col-sm-10">
								<input
									type="password"
									className="form-control"
									id="inputPassword3"
									placeholder="Password"
								/>
							</div>
						</div>
						{/* I am a tutor / student radios */}
						<fieldset className="form-group">
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
						</fieldset>
						<div className="form-group row justify-content-center">
							<div className="col-sm-4">
								<button
									type="submit"
									className="btn btn-secondary btn-md btn-block text-center rounded-pill text-black">
									Login
								</button>
							</div>
						</div>
					</form>
				</div>
			</div>
			<div className="signup-box w-100">
				<div className="container w-75">
					<h2 className="display-4 text-center" id="signup-title">
						Create a New Account
					</h2>
					<div id="left-form">
						<form>
							<div className="row col-5" id="forms">
								<div className="col-5" id="left-form">
									<div className="form-group" id="radio-n-" />
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
							<div className="col-4" id="dropdowns">
								<select className="row custom-select custom-select-md mb-3">
									<option selected>1st Subject</option>
									<option value="1">Math</option>
									<option value="2">Science</option>
									<option value="3">English</option>
								</select>
								<select className="row custom-select custom-select-md mb-3">
									<option selected>2nd Subject</option>
									<option value="1">Math</option>
									<option value="2">Science</option>
									<option value="3">English</option>
								</select>
								<select className="row custom-select custom-select-md mb-3">
									<option selected>3rd Subject</option>
									<option value="1">Math</option>
									<option value="2">Science</option>
									<option value="3">English</option>
								</select>
							</div>
						</form>
					</div>
					<div className="col-6" id="right-form">
						<div className="form-group">
							<form>
								<div className="form-row">
									<div className="form-group col-md-6">
										<label htmlFor="inputEmail4">First Name</label>
										<input
											type="email"
											className="form-control"
											id="inputEmail4"
											placeholder="First Name"
										/>
									</div>
									<div className="form-group col-md-6">
										<label htmlFor="inputPassword4">Last Name</label>
										<input
											type="password"
											className="form-control"
											id="inputPassword4"
											placeholder="Last Name"
										/>
									</div>
								</div>
								<div className="form-group">
									<label htmlFor="inputAddress">Username</label>
									<input
										type="text"
										className="form-control"
										id="inputAddress"
										// <i className="far fa-user"></i>
										placeholder="Username"
									/>
								</div>
								<div className="form-group">
									<label htmlFor="inputAddress2">Email Address</label>
									<input
										type="text"
										className="form-control"
										id="inputAddress2"
										// <i className="fas fa-envelope"></i>
										placeholder="Email Address"
									/>
								</div>
								<div className="form-group">
									<label htmlFor="inputAddress3">Password</label>
									<input
										type="text"
										className="form-control"
										id="inputAddress3"
										// <i className="fas fa-lock"></i>
										placeholder="Password"
									/>
								</div>
							</form>
						</div>
					</div>
					<div id="button">
						<button
							type="submit"
							className="btn btn-secondary btn-md btn-block text-center rounded-pill text-black">
							Sign Up
						</button>
					</div>
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
