function Form() {
	const [ contact, setContact ] = useState({
		fName: "",
		lName: "",
		email: ""
	});

	function handleInput(event) {
		const { value, name } = event.target;
		setContact((prev) => {
			return {
				...prev,
				[name]: value
			};
		});
	}

	return (
		<form className="container">
			<h1>Hello {`${contact.fName} ${contact.lName}`}</h1>
			<p>{contact.email}</p>
			<input
				onChange={handleInput}
				name="fName"
				type="text"
				placeholder="First Name"
				value={contact.fName}
			/>
			<input
				onChange={handleInput}
				name="lName"
				type="text"
				placeholder="Last Name"
				value={contact.lName}
			/>
			<input
				onChange={handleInput}
				name="email"
				type="email"
				placeholder="Email"
				value={contact.email}
			/>
			<button>Submit</button>
		</form>
	);
}
