import { render, screen } from '@testing-library/react';
import SearchBar from './searchBar';

describe("<SearchBar />", () => {
	it('renders text input', () => {
		render(<SearchBar />);

		const inputBox = screen.getByTestId("text-input");
		expect(inputBox).toBeInTheDocument();
	});
})