import { render, screen } from '@testing-library/react';
import App from '../App';
import SearchBar from './searchBar';

describe("<SearchBar />", () => {
	test('render text input', () => {
		render(<SearchBar />);

		const inputEl = screen.getByTestId("text-input");
		expect(inputEl).toBeInTheDocument();
	});
})