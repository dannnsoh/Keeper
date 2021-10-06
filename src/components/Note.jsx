import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

export default function Note(props) {
	function handleDelete() {
		props.onDelete(props.id);
	}

	return (
		<div className="note">
			<h3>{props.title}</h3>
			<hr />
			<p>{props.content}</p>
			<button onClick={handleDelete} className="deleteBtn">
				<DeleteIcon />
			</button>
		</div>
	);
}
