import React from "react";
import "./index.css";

const fname = "harshal";
const lname = "jadhav";
const p_style = {
	color: "green",
	fontWeight: "bold",
	fontSize: "40px",
};
function Sample() {
	return (
		<>
			<div className="space">
				<h1 className="Hello">Hello World</h1>
				<h2 style={{ color: "red", textTransform: "uppercase" }}>Hii</h2>
				<p style={p_style}>this is example</p>
				<h1 className="Myname">{`My name is ${fname} ${lname}`}</h1>
				<h1>
					My name is {fname} {lname}
				</h1>
				<h1>My name is {fname + " " + lname}</h1>
			</div>
		</>
	);
}

export default Sample;
