import React, { useState } from "react";
import Heading from "./Heading";
import Footer from "./Footer";
import Note from "./Note";
import NewNote from "./NewNote";

export default function App() {
	const [ item, setItem ] = useState([]);

	function addItem(newInput) {
		setItem((prev) => [ ...prev, newInput ]);
	}

	function deleteItem(deleteIndex) {
		setItem((prev) => {
			return prev.filter((item, index) => {
				return index !== deleteIndex;
			});
		});
	}

	return (
		<div>
			<Heading />
			<NewNote addItem={addItem} />
			<div className="noteSection">
				{item.map((note, index) => (
					<Note
						key={index}
						id={index}
						title={note.title}
						content={note.content}
						onDelete={deleteItem}
					/>
				))}
				{/* <Note
					title="This is a note"
					content="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga deleniti, vero ducimus provident excepturi obcaecati, facere sapiente eum iste maxime, error nesciunt itaque? Quaerat, distinctio. Libero voluptas inventore eius soluta?"
				/>
				<Note
					title="Wow i am a note"
					content="dolor siteum iste maxime, error nesciunt itaque? Quaerat, distinctio. Libero voluptas inventore eius soluta? Lorem, ipsum  amet consectetur adipisicing elit. Fuga deleniti, vero ducimus provident excepturi obcaecati, facere sapiente "
				/>
				<Note
					title="lorem IPSUM!!!1"
					content="excepturi obcaecati, facere sapiente eum iste maxime, error nesciunt itaque? Quaerat Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga deleniti, vero ducimus provident , distinctio. Libero voluptas inventore eius soluta?"
				/> */}
			</div>
			<Footer />
		</div>
	);
}
