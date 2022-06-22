import React from "react";

// function Greet() {
// 	return <h1>Hello HJ</h1>;
// }
// const Greet = () =>
//     <h1>Hello HJ</h1>
const Greet = (props) => {
    // const {name,heroName}=props;

    return (
        <div>
            <h1>Hello {props.name} a.k.a {props.heroName}.</h1>
            {props.children}
        </div>
    )
}
export default Greet;
