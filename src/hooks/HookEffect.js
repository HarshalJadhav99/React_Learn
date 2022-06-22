import React, { useEffect, useState } from "react";

const HookEffect = () => {
	const initialState = 0;
	const [num, setNum] = useState(initialState);
	const [nums, setNums] = useState(initialState);
	const [name, setName] = useState("");

	// useEffect(() => {
	// 	alert("i am clicked");
	// }, [num]);

	useEffect(() => {
        console.log('useffect updating document title.');
		document.title = `you clicked ${nums} times.`;
	},[nums]);
	return (
		<div>
			<input
				type="text"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>
			{/* <button onClick={() => setNum(num + 1)}>Clicked {num} times</button>
			<br /> */}
			<button onClick={() => setNums(nums + 1)}>Clicked {nums} times</button>
		</div>
	);
};

export default HookEffect;
