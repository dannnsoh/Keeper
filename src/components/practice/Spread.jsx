function Spread() {
	const [ input, setInput ] = useState("");

	function handleInput(event) {
		const inputValue = event.target.value;
		setInput(inputValue);
	}

	const [ item, setItem ] = useState([]);

	function handleItem() {
		setItem(item.concat(input));
		// setItem((prev) => [ ...prev, input ]);
		setInput("");
	}

	return (
		<div className="container">
			<div className="heading">
				<h1>To-Do List</h1>
			</div>
			<div className="form">
				<input onChange={handleInput} type="text" value={input} />
				<button disabled={!input} onClick={handleItem}>
					<span>Add</span>
				</button>
			</div>
			<div>
				<ul>{item.map((todoItem) => <Item key={todoItem} item={todoItem} />)}</ul>
			</div>
		</div>
	);
}
