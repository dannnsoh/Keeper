import React, { useState } from "react";

export default function InputArea(props) {
	const [ input, setInput ] = useState("");

	function handleInput(event) {
		const inputValue = event.target.value;
		setInput(inputValue);
	}

	return (
		<div className="form">
			<input onChange={handleInput} type="text" value={input} />
			<button
				disabled={!input}
				onClick={() => {
					props.addItem(input);
					setInput("");
				}}
			>
				<span>Add</span>
			</button>
		</div>
	);
}
