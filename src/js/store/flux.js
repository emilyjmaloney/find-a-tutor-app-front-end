// const apiUrl = https://3000-b315a6d6-cff5-415f-9ec4-7e9985ecc531.ws-us02.gitpod.io/; Emily's
// const apiUrl =https://3000-c2e0b359-932e-4da0-8482-cc44165c0d9b.ws-us02.gitpod.io/; Sarah's
const apiUrlFindaTutor = "https://3000-b315a6d6-cff5-415f-9ec4-7e9985ecc531.ws-us02.gitpod.io/";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			subjects: [
				"Math",
				"Science",
				"Language Arts",
				"Reading",
				"Writing",
				"English",
				"Science",
				"Social Studies",
				"GED / SAT",
				"Spanish",
				"Other"
			],
			allUsers: [],
			grades: [
				"Primary (K-2nd)",
				"Intermediate (3rd-5th)",
				"Middle School (6th-8th)",
				"High School (9th-12th)",
				"College / Higher Ed"
			],
			weekday: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
			daily_timeslot: ["Morning", "Afternoon", "Evening"],
			currentUser: null,
			user: [
				{
					email_address: "test1@gmail.com",
					first_name: "test1",
					id: 1,
					is_active: true,
					last_name: "student",
					name: "test 1 student",
					student: true,
					username: "test1student",
					userprofile: [
						{
							profile_image: "",
							about_me: "",
							subjects: "",
							weekday: "",
							dailytime_slot: ""
						}
					],
					messages: [
						{
							id: 1,
							recipient_id: 2,
							text: "hello world",
							created_at: "08-27-2020"
						}
					]
				},
				{
					email_address: "test2@gmail.com",
					first_name: "test2",
					id: 2,
					is_active: true,
					last_name: "student",
					name: "test2 student",
					student: true,
					username: "test2student"
				},
				{
					email_address: "test3@gmail.com",
					first_name: "test3",
					id: 3,
					is_active: false,
					last_name: "tutor",
					name: "test3 tutor",
					student: true,
					username: "test3tutor"
				},
				{
					email_address: "test4@gmail.com",
					first_name: "test4",
					id: 4,
					is_active: false,
					last_name: "tutor",
					name: "test4 tutor",
					student: true,
					username: "test4tutor"
				}
			],
			userprofile: [
				{
					profile_image: "",
					about_me: "white",
					subjects: "white",
					weekday: "white",
					daily_timeslot: "test"
				}
			],
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			]
		},
		actions: {
			getASingleUser: () => {
				const store = getStore();
				fetch(`${apiUrlFindaTutor}get-single-user`, {
					// concatenates URL and the endpoint to link API
					method: "GET", // request method for database
					headers: {
						// database tab using token verification
						"Content-Type": "application/json", // ??
						Authorization: `Bearer ${store.token}` //type "authorization" and unique token into header for access
					}
				})
					.then(res => res.json())
					.then(data => setStore({ currentUser: data }));
			},
			updateUser: object => {
				console.log("OBJECT: ", object);
				const store = getStore();
				fetch(`${apiUrlFindaTutor}update-user/${store.currentUser.user.id}`, {
					method: "PATCH",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(object)
				});
			},
			updateProfile: object => {
				console.log("OBJECT: ", object);
				const store = getStore();
				fetch(`${apiUrlFindaTutor}update-userprofile/${store.currentUser.userprofile.id}`, {
					method: "PATCH",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(object)
				}).then(() => getActions().getASingleUser());
			},
			updateTutor: object => {
				console.log("OBJECT: ", object);
				const store = getStore();
				fetch(`${apiUrlFindaTutor}update-tutor/${store.currentUser.tutor_profile.id}`, {
					method: "PATCH",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(object)
				}).then(() => getActions().getASingleUser());
			},
			updateStudent: object => {
				console.log("OBJECT: ", object);
				const store = getStore();
				fetch(`${apiUrlFindaTutor}update-student/${store.currentUser.student_profile.id}`, {
					method: "PATCH",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(object)
				}).then(() => getActions().getASingleUser());
			},
			protectedEndpoint: () => {
				//calling, naming, connecting back to front
				const store = getStore(); // ???
				fetch(`${apiUrlFindaTutor}profile`, {
					// concatenates URL and the endpoint to link API
					method: "GET", // request method for database
					headers: {
						// database tab using token verification
						"Content-Type": "application/json", // ??
						Authorization: `Bearer ${store.token}` //type "authorization" and unique token into header for access
					}
				});
			},
			login: async (ham, cheese) => {
				// login endpoint receives 2 parameters - can name whatever - what is best naming practice?
				let response = await fetch(`${apiUrlFindaTutor}login`, {
					// concatenates URL and the endpoint to link API
					method: "POST", // request method for database
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						email: ham,
						password: cheese
					})
				});
				if (response.ok) {
					let body = await response.json();
					setStore({ token: body.jwt, currentUser: body.user });
					return true;
				}
				return false;
			},
			logout: () => {
				setStore({ token: null });
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			signup: (student, first_name, last_name, username, email_address, password) => {
				fetch(`${apiUrlFindaTutor}signup`, {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						student: student,
						first_name: first_name,
						last_name: last_name,
						username: username,
						email_address: email_address,
						password: password
					})
				});
			},
			//these are the query parameters needed for the API (back end is expecting themPostman
			search: async (subject, radio, grade, zipcode, isStudent) => {
				let queryString = `?subject=${subject.toLowerCase()}&radio=${radio}&student=${isStudent}`;
				console.log(queryString);
				if (grade != "") {
					queryString += `&grade=${grade.toLowerCase()}`;
				}
				if (zipcode != "") {
					queryString += `&zipcode=${zipcode}`;
				}
				let response = await fetch(`${apiUrlFindaTutor}search/${queryString}`);
				if (response.ok) {
					let searchresults = await response.json();
					setStore({ searchresults });
				}
			},

			// NOT COMPLETE - STILL WORKING 9.3.2020 6:30pm
			// search: (subject, radio) => {
			//     fetch(`${apiUrlFindaTutor}search`, {
			// 		method: "GET",
			// 		headers: {
			// 			"Content-Type": "application/json"
			//         },

			//         body: JSON.stringify({
			// 			subject: subject,
			// 			grade: zipcode,
			// 			zipcode: zipcode,
			// 			online: online,
			// 			email_address: email_address,
			// 			password: password
			// 		})
			// 	});
			// },

			loadAllUsers: () => {
				const store = getStore(); // ???
				fetch(`${apiUrlFindaTutor}getall`, {
					// concatenates URL and the endpoint to link API
					method: "GET", // request method for database
					headers: {
						// database tab using token verification
						"Content-Type": "application/json" // ??
					}
				})
					.then(res => res.json())
					.then(data => setStore({ allUsers: data }));
			},
			loadSomeData: () => {
				/**
                    fetch().then().then(data => setStore({ "foo": data.bar }))
                */
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();
				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});
				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};
export default getState;
