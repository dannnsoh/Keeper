import React, { useState } from "react";
import Heading from "./Heading";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes";
import Form from "./Form";
import Input from "./Input";

// let isRegistered = false;

function App() {
	const [ mouseOver, setMouseOver ] = useState(false);

	function handleMouseOver() {
		setMouseOver(true);
	}

	function handleMouseOut() {
		setMouseOver(false);
	}

	const [ headingText, setHeadingText ] = useState("");

	function handleHeadingText(event) {
		setHeadingText(event.target.value);
	}

	return (
		<div className="container">
			<h1>Hello {headingText}</h1>
			<input
				onChange={handleHeadingText}
				type="text"
				placeholder="What's your name?"
				value={headingText}
			/>
			<button
				style={{ backgroundColor: mouseOver ? "lightblue" : "white" }}
				onMouseOver={handleMouseOver}
				onMouseOut={handleMouseOut}
				onSubmit={handleHeadingText}
			>
				Submit
			</button>
		</div>
	);
}

export default App;

// <div>
// 	<Heading />
// 	<Form isRegistered={isRegistered} />
// 	<Footer />
// </div>

// <div className="notes">
// 	{notes.map((note) => (
// 		<Note key={note.key} title={note.title} content={note.content} />
// 	))}
// </div>
