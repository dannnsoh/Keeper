import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";

export default function NewNote(props) {
	const [ newInput, setNewInput ] = useState({
		title: "",
		content: ""
	});

	function handleInput(event) {
		const { value, name } = event.target;
		setNewInput((prev) => {
			return {
				...prev,
				[name]: value
			};
		});
	}

	function handleAddNote() {
		props.addItem(newInput);
		setNewInput({
			title: "",
			content: ""
		});
	}

	const [ inputFocus, setInputFocus ] = useState(false);

	function expandInput(event) {
		const target = event.target.name;
		setInputFocus(() => {
			return target === "content" && true;
		});
	}

	return (
		<form className="noteInput">
			{inputFocus && (
				<div>
					<input
						onChange={handleInput}
						name="title"
						value={newInput.title}
						type="text"
						placeholder="Title"
					/>
					<hr />
				</div>
			)}
			<textarea
				onClick={expandInput}
				onChange={handleInput}
				name="content"
				value={newInput.content}
				type="text"
				placeholder="Make a new note..."
				rows={inputFocus ? 3 : 1}
			/>
			<Zoom in={inputFocus}>
				<Fab onClick={handleAddNote} size="small" id="addBtn">
					<AddIcon />
				</Fab>
			</Zoom>
		</form>
	);
}
