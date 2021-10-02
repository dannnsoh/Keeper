import React from "react";

function Input(props) {
	return (
		<div className="formInput">
			<input type={props.type} placeholder={props.placeholder} />
		</div>
	);
}

export default Input;
