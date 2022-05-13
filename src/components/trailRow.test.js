import { render, screen } from '@testing-library/react';
import TrailRow from './trailRow';

describe("<TrailRow />", () => {
	it('should render TrailRow component', () => {
		const TrailRowComponent = render(<TrailRow />);
		expect(TrailRowComponent).toBeTruthy();
	});
	it('renders trail name', () => {
		render(<TrailRow />);
		const trailsNames = screen.getByTestId("trail-names-list");
		expect(trailsNames).toBeInTheDocument();
	});

	it('renders data correctly', () => {
    const fakeData = [
			{
        item: 'Regents Canal- Broadway Market to Angel',
			},
			{
        item: 'Yosemite Falls',
			},
			{
        item: 'Yosemite- El Capitan',
    	},
			{
        item: 'Abel Tasman Coastal',
			},
			{
        item: 'Mount Cook National Park- Mueller Hut Route',
			}]

    const {getAllByTestId} = render(<TrailRow />)
    const trailNames = getAllByTestId('single-trail').map(li => li.textContent)
    const fakeItems = fakeData.map(c => c.item)
    expect(trailNames).toEqual(fakeItems)
  })

	it('the length of the list should be 5', () => {
		const {getByTestId} = render(<TrailRow />)
		const list = getByTestId('trail-names-list')
		expect(list.children.length).toBe(5);
	});
})