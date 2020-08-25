// const apiUrl = https://3000-fcd93d66-2c70-4b31-be4c-487bfd6e9a80.ws-us02.gitpod.io/;
const apiUrlFindaTutor = "https://3000-fcd93d66-2c70-4b31-be4c-487bfd6e9a80.ws-us02.gitpod.io/";
const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: null,
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
			login: (ham, cheese) => {
				// login endpoint receives 2 parameters - can name whatever - what is best naming practice?
				fetch(`${apiUrlFindaTutor}login`, {
					// concatenates URL and the endpoint to link API
					method: "POST", // request method for database
					headers: {
						"Content-Type": "application/json"
					},

					body: JSON.stringify({
						email: ham,
						password: cheese
					})
				})
					.then(response => response.json())
					.then(token => {
						if (typeof token.msg != "undefined") {
							// Notify.error(token.msg);
						} else {
							setStore({ token: token.jwt });
						}
					});
			},
			logout: () => {
				setStore({ token: null });
			},
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
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
