import React from "react"

//include your index.scss file into the bundle
import "../styles/index.scss";

//include bootstrap npm library into the bundle
import "bootstrap/dist/css/bootstrap.css";

//import your own components
import Layout from "./layout";


export const Profile = () => (
    <div>
        <h1>
            Profile
        </h1>
    </div>
);





//render your react application
ReactDOM.render(<Layout />, document.querySelector("#app"));

