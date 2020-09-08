import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import "../../styles/profilemodal.scss";
import "../../styles/profile.scss";
import { Context } from "../store/appContext";

export const ProfileModal = props => {
	const [subject, setSubject] = useState("");
	const [grade, setGrade] = useState("");
	const [weekday, setWeekday] = useState("");
	const [daily_timeslot, setDaily_timeslot] = useState("");
	const { store, actions } = useContext(Context);
	const [obj, setObj] = useState();
	return (
		<div className="modal fade" id={props.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
			<div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
				<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title" id="exampleModalLabel">
							{props.title}
						</h5>
						<button type="button" className="close" data-dismiss="modal" aria-label="Close">
							<span aria-hidden="true">&times;</span>
						</button>
					</div>
					<div className="modal-body">
						<form>
							{/* ABOUT ME MODAL */}
							{props.id === "about-me-modal" && (
								<div className="form-group">
									<label htmlFor="exampleFormControlTextarea1">Enter your about me</label>
									<textarea
										onChange={e => setObj({ about_me: e.target.value })}
										className="form-control"
										id="exampleFormControlTextarea1"
										rows="4"
									/>
								</div>
							)}
							{/* EXPERIENCE MODAL */}
							{props.id === "experience-modal" && (
								<>
									<div className="form-group">
										<label htmlFor="exampleFormControlTextarea1">Enter your experience</label>
										<textarea
											onChange={e => setObj({ experience: e.target.value })}
											className="form-control"
											id="exampleFormControlTextarea1"
											rows="4"
										/>
									</div>
									<div className="form-group">
										<label htmlFor="exampleFormControlSelect1">
											Are you available for online or local sessions?
										</label>
										<div className="custom-control custom-radio">
											<input
												type="radio"
												id="customRadio1"
												name="customRadio"
												className="custom-control-input"
											/>
											<label className="custom-control-label" htmlFor="customRadio1">
												Online only
											</label>
										</div>
										<div className="custom-control custom-radio">
											<input
												type="radio"
												id="customRadio2"
												name="customRadio"
												className="custom-control-input"
											/>
											<label className="custom-control-label" htmlFor="customRadio2">
												Local only
											</label>
										</div>
										<div className="custom-control custom-radio">
											<input
												type="radio"
												id="customRadio3"
												name="customRadio"
												className="custom-control-input"
											/>
											<label className="custom-control-label" htmlFor="customRadio3">
												Both online and local
											</label>
										</div>
									</div>
								</>
							)}
							{/* SUBJECTS MODAL */}
							{props.id === "subjects-modal" && (
								<div className="form-group">
									<label htmlFor="exampleFormControlSelect1">
										<div>{"What subjects are you interested in learning?"}</div>
										<div>{"Please select three subjects below."}</div>
									</label>
									<select
										className="custom-select subjects"
										onChange={e => e => setObj({ subjects: e.target.value })}
										value={obj}>
										<option selected>Choose First Subject</option>
										{store.subjects.map((subject, index) => {
											return (
												<option key={index} value={subject}>
													{subject}
												</option>
											);
										})}
									</select>
									<select
										className="custom-select subjects"
										onChange={event => setSubject(event.target.value)}
										value={subject}>
										<option selected>Choose Second Subject</option>
										{store.subjects.map((subject, index) => {
											return (
												<option key={index} value={subject}>
													{subject}
												</option>
											);
										})}
									</select>
									<select
										className="custom-select subjects"
										onChange={event => setSubject(event.target.value)}
										value={subject}>
										<option selected>Choose Third Subject</option>
										{store.subjects.map((subject, index) => {
											return (
												<option key={index} value={subject}>
													{subject}
												</option>
											);
										})}
									</select>
								</div>
							)}
							{/* AVAILABLITY MODAL */}
							{props.id === "availability-modal" && (
								<div className="form-group">
									<label htmlFor="exampleFormControlSelect1">
										<div>{"What is your weekly availability?"}</div>
										<div>{"Please select the times you're available each day below."}</div>
									</label>
									<div className="grid-modal-col1">
										{/* MONDAY */}
										<div className="modal-day">
											<div className="modal-day-label">Monday</div>
											<div className="grid-modal-col1">
												<div className="modal-databox">
													<div className="form-check">
														<input
															className="form-check-input"
															type="checkbox"
															value=""
															id="defaultCheck1"
														/>
														<label className="form-check-label" htmlFor="defaultCheck1">
															Morning Availability
														</label>
													</div>
												</div>
												<div className="modal-databox">
													<div className="form-check">
														<input
															className="form-check-input"
															type="checkbox"
															value=""
															id="defaultCheck1"
														/>
														<label className="form-check-label" htmlFor="defaultCheck1">
															Afternoon Availability
														</label>
													</div>
												</div>
												<div className="modal-databox">
													<div className="form-check">
														<input
															className="form-check-input"
															type="checkbox"
															value=""
															id="defaultCheck1"
														/>
														<label className="form-check-label" htmlFor="defaultCheck1">
															Evening Availability
														</label>
													</div>
												</div>
											</div>
										</div>
										{/* TUESDAY */}
										<div className="modal-day">
											<div className="modal-day-label">Tuesday</div>
											<div className="grid-modal-col1">
												<div className="modal-databox">
													<div className="form-check">
														<input
															className="form-check-input"
															type="checkbox"
															value=""
															id="defaultCheck1"
														/>
														<label className="form-check-label" htmlFor="defaultCheck1">
															Morning Availability
														</label>
													</div>
												</div>
												<div className="modal-databox">
													<div className="form-check">
														<input
															className="form-check-input"
															type="checkbox"
															value=""
															id="defaultCheck1"
														/>
														<label className="form-check-label" htmlFor="defaultCheck1">
															Afternoon Availability
														</label>
													</div>
												</div>
												<div className="modal-databox">
													<div className="form-check">
														<input
															className="form-check-input"
															type="checkbox"
															value=""
															id="defaultCheck1"
														/>
														<label className="form-check-label" htmlFor="defaultCheck1">
															Evening Availability
														</label>
													</div>
												</div>
											</div>
										</div>
										{/* WEDNESDAY */}
										<div className="modal-day">
											<div className="modal-day-label">Wednesday</div>
											<div className="grid-modal-col1">
												<div className="modal-databox">
													<div className="form-check">
														<input
															className="form-check-input"
															type="checkbox"
															value=""
															id="defaultCheck1"
														/>
														<label className="form-check-label" htmlFor="defaultCheck1">
															Morning Availability
														</label>
													</div>
												</div>
												<div className="modal-databox">
													<div className="form-check">
														<input
															className="form-check-input"
															type="checkbox"
															value=""
															id="defaultCheck1"
														/>
														<label className="form-check-label" htmlFor="defaultCheck1">
															Afternoon Availability
														</label>
													</div>
												</div>
												<div className="modal-databox">
													<div className="form-check">
														<input
															className="form-check-input"
															type="checkbox"
															value=""
															id="defaultCheck1"
														/>
														<label className="form-check-label" htmlFor="defaultCheck1">
															Evening Availability
														</label>
													</div>
												</div>
											</div>
										</div>
										{/* THURSDAY */}
										<div className="modal-day">
											<div className="modal-day-label">Thursday</div>
											<div className="grid-modal-col1">
												<div className="modal-databox">
													<div className="form-check">
														<input
															className="form-check-input"
															type="checkbox"
															value=""
															id="defaultCheck1"
														/>
														<label className="form-check-label" htmlFor="defaultCheck1">
															Morning Availability
														</label>
													</div>
												</div>
												<div className="modal-databox">
													<div className="form-check">
														<input
															className="form-check-input"
															type="checkbox"
															value=""
															id="defaultCheck1"
														/>
														<label className="form-check-label" htmlFor="defaultCheck1">
															Afternoon Availability
														</label>
													</div>
												</div>
												<div className="modal-databox">
													<div className="form-check">
														<input
															className="form-check-input"
															type="checkbox"
															value=""
															id="defaultCheck1"
														/>
														<label className="form-check-label" htmlFor="defaultCheck1">
															Evening Availability
														</label>
													</div>
												</div>
											</div>
										</div>
										{/* FRIDAY */}
										<div className="modal-day">
											<div className="modal-day-label">Friday</div>
											<div className="grid-modal-col1">
												<div className="modal-databox">
													<div className="form-check">
														<input
															className="form-check-input"
															type="checkbox"
															value=""
															id="defaultCheck1"
														/>
														<label className="form-check-label" htmlFor="defaultCheck1">
															Morning Availability
														</label>
													</div>
												</div>
												<div className="modal-databox">
													<div className="form-check">
														<input
															className="form-check-input"
															type="checkbox"
															value=""
															id="defaultCheck1"
														/>
														<label className="form-check-label" htmlFor="defaultCheck1">
															Afternoon Availability
														</label>
													</div>
												</div>
												<div className="modal-databox">
													<div className="form-check">
														<input
															className="form-check-input"
															type="checkbox"
															value=""
															id="defaultCheck1"
														/>
														<label className="form-check-label" htmlFor="defaultCheck1">
															Evening Availability
														</label>
													</div>
												</div>
											</div>
										</div>
										{/* SATURDAY */}
										<div className="modal-day">
											<div className="modal-day-label">Saturday</div>
											<div className="grid-modal-col1">
												<div className="modal-databox">
													<div className="form-check">
														<input
															className="form-check-input"
															type="checkbox"
															value=""
															id="defaultCheck1"
														/>
														<label className="form-check-label" htmlFor="defaultCheck1">
															Morning Availability
														</label>
													</div>
												</div>
												<div className="modal-databox">
													<div className="form-check">
														<input
															className="form-check-input"
															type="checkbox"
															value=""
															id="defaultCheck1"
														/>
														<label className="form-check-label" htmlFor="defaultCheck1">
															Afternoon Availability
														</label>
													</div>
												</div>
												<div className="modal-databox">
													<div className="form-check">
														<input
															className="form-check-input"
															type="checkbox"
															value=""
															id="defaultCheck1"
														/>
														<label className="form-check-label" htmlFor="defaultCheck1">
															Evening Availability
														</label>
													</div>
												</div>
											</div>
										</div>
										{/* SUNDAY */}
										<div className="modal-day">
											<div className="modal-day-label">Sunday</div>
											<div className="grid-modal-col1">
												<div className="modal-databox">
													<div className="form-check">
														<input
															className="form-check-input"
															type="checkbox"
															value=""
															id="defaultCheck1"
														/>
														<label className="form-check-label" htmlFor="defaultCheck1">
															Morning Availability
														</label>
													</div>
												</div>
												<div className="modal-databox">
													<div className="form-check">
														<input
															className="form-check-input"
															type="checkbox"
															value=""
															id="defaultCheck1"
														/>
														<label className="form-check-label" htmlFor="defaultCheck1">
															Afternoon Availability
														</label>
													</div>
												</div>
												<div className="modal-databox">
													<div className="form-check">
														<input
															className="form-check-input"
															type="checkbox"
															value=""
															id="defaultCheck1"
														/>
														<label className="form-check-label" htmlFor="defaultCheck1">
															Evening Availability
														</label>
													</div>
												</div>
											</div>
										</div>
									</div>
									{/* END OF GRID */}
								</div>
							)}
							{/* ACADEMIC MODAL */}
							{props.id === "academic-modal" && (
								<>
									<div className="form-group">
										<label htmlFor="exampleFormControlSelect1">
											<div>{"What is your current academic grade?"}</div>
										</label>
										<select
											className="custom-select subjects"
											onChange={event => setGrade(event.target.value)}
											value={grade}>
											<option selected>Select Current Grade</option>
											{store.grades.map((grade, index) => {
												return (
													<option key={index} value={grade}>
														{grade}
													</option>
												);
											})}
										</select>
									</div>
									<div className="form-group">
										<label htmlFor="exampleFormControlSelect1">
											Are you available for online or local sessions?
										</label>
										<div className="custom-control custom-radio">
											<input
												type="radio"
												id="customRadio1"
												name="customRadio"
												className="custom-control-input"
											/>
											<label className="custom-control-label" htmlFor="customRadio1">
												Online only
											</label>
										</div>
										<div className="custom-control custom-radio">
											<input
												type="radio"
												id="customRadio2"
												name="customRadio"
												className="custom-control-input"
											/>
											<label className="custom-control-label" htmlFor="customRadio2">
												Local only
											</label>
										</div>
										<div className="custom-control custom-radio">
											<input
												type="radio"
												id="customRadio3"
												name="customRadio"
												className="custom-control-input"
											/>
											<label className="custom-control-label" htmlFor="customRadio1">
												Both online and local
											</label>
										</div>
									</div>
								</>
							)}
							{/* PERSONAL SETTINGS MODAL */}
							{props.id === "personal-modal" && (
								<>
									<div className="form-group">
										<label htmlFor="formGroupExampleInput">First Name</label>
										<input
											type="text"
											className="form-control"
											id="formGroupExampleInput"
											placeholder="User First Name"
										/>
									</div>
									<div className="form-group">
										<label htmlFor="formGroupExampleInput2">Last Name</label>
										<input
											type="text"
											className="form-control"
											id="formGroupExampleInput2"
											placeholder="User Last Name"
										/>
									</div>
									<div className="form-group">
										<label htmlFor="formGroupExampleInput3">Email</label>
										<input
											type="text"
											className="form-control"
											id="formGroupExampleInput3"
											placeholder="User Email"
										/>
									</div>
									<div className="form-group">
										<label htmlFor="formGroupExampleInput4">Zipcode</label>
										<input
											type="text"
											className="form-control"
											id="formGroupExampleInput4"
											placeholder="User Zipcode"
										/>
									</div>
								</>
							)}

							{/* ACCOUNT SETTINGS MODAL */}
							{props.id === "account-modal" && (
								<>
									<div className="form-group">
										<label htmlFor="formGroupExampleInput">Username</label>
										<input
											type="text"
											className="form-control"
											id="formGroupExampleInput"
											placeholder="User Username"
										/>
									</div>
									<div className="form-group">
										<label htmlFor="formGroupExampleInput2">Password</label>
										<input
											type="text"
											className="form-control"
											id="formGroupExampleInput2"
											placeholder="********"
										/>
									</div>
								</>
							)}

							{/* SEND MESSAGE MODAL */}
							{props.id === "send-message-modal" && (
								<div className="form-group">
									<label htmlFor="exampleFormControlTextarea1">{"I'd like to hear from you."}</label>
									<textarea className="form-control" id="exampleFormControlTextarea1" rows="4" />
								</div>
							)}
							{/* UPDATE PHOTO MODAL */}
							{props.id === "update-photo-modal" && (
								<div className="form-group">
									<div className="grid-modal-col1-alt">
										<div className="profile-pic" />
										<div className="input-group mb-3">
											<div className="custom-file">
												<input
													type="file"
													className="custom-file-input"
													id="inputGroupFile02"
												/>
												<label
													className="custom-file-label"
													htmlFor="inputGroupFile02"
													aria-describedby="inputGroupFileAddon02">
													Choose file
												</label>
											</div>
										</div>
										<div className="button">Update Photo</div>
									</div>
								</div>
							)}
						</form>
					</div>
					<div className="modal-footer">
						<button type="button" className="btn btn-secondary" data-dismiss="modal">
							Close
						</button>
						<button
							onClick={() => {
								props.id === "experience-modal" ? actions.updateTutor(obj) : actions.updateProfile(obj);
							}}
							type="button"
							className="btn btn-primary">
							Save
						</button>
						{/* conditional rendering exactly on navbar */}
						{/* {store.token != null ? (
						
					) : null} */}
					</div>
				</div>
			</div>
		</div>
	);
};
ProfileModal.propTypes = {
	title: PropTypes.string,
	id: PropTypes.string
};
