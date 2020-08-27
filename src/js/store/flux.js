// const apiUrl = https://3000-fcd93d66-2c70-4b31-be4c-487bfd6e9a80.ws-us02.gitpod.io/;
const apiUrlFindaTutor = "https://3000-fcd93d66-2c70-4b31-be4c-487bfd6e9a80.ws-us02.gitpod.io/";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
			user: {
				student: "Student",
				name: "sarah machicado"
			},

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
					setStore({ token: body.jwt, user: body.user });
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
