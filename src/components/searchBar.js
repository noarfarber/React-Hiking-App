const SearchBar = () => {
	return (
		<form>
			<label htmlFor="header-search">
				<span className="visually-hidden">Search for trails</span>
			</label>
			<input 
				type="text"
				id="header-search"
				data-testid="text-input"
				placeholder="Search for trails"
				name="s"
			/>
			<button type="submit">Let's go!</button>
		</form>
	)	
};

export default SearchBar;