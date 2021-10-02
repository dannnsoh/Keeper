import React from "react";
import Heading from "./Heading";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes";
import Login from "./Login";

function App() {
	return (
		<div>
			<Heading />
			<Login />
			<div className="notes">
				{notes.map((note) => (
					<Note key={note.key} title={note.title} content={note.content} />
				))}
			</div>
			<Footer />
		</div>
	);
}

export default App;
