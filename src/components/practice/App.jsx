function App() {
	const [ item, setItem ] = useState([]);

	function addItem(input) {
		setItem((prev) => [ ...prev, input ]);
	}

	function deleteItem(deleteIndex) {
		setItem((prev) => {
			return prev.filter((item, index) => {
				return index !== deleteIndex;
			});
		});
	}

	return (
		<div className="container">
			<div className="heading">
				<h1>To-Do List</h1>
			</div>
			<InputArea addItem={addItem} />
			<div>
				<ul>
					{item.map((todoItem, index) => (
						<Item key={index} id={index} onChecked={deleteItem} text={todoItem} />
					))}
				</ul>
			</div>
		</div>
	);
}
