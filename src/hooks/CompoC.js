import React from "react";
import { FirstName,LastName } from "../App";

const CompoC = () => {
	return (
		<>
			<FirstName.Consumer>
				{(fname) => {
					return(
                        <LastName.Consumer>
                            {(lname)=>{
                                return  <div>My name is {fname} {lname}</div>;
                            }}
                        </LastName.Consumer>
                    )
                    
                    
				}}
			</FirstName.Consumer>
		</>
	);
};

export default CompoC;
