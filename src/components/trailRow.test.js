import { render, screen } from '@testing-library/react';
import TrailRow from './trailRow';

describe("<TrailRow />", () => {
	it('renders trail name', () => {
		render(<TrailRow />);

		const trailsNames = screen.getByTestId("trail-name");
		expect(trailsNames).toBeInTheDocument();
	});
})