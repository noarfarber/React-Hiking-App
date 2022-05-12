import trails from '../FakeJson';

const TrailRow = () => {
	return (
		<ul data-testid="trail-name">
			{trails.map((trail) => (
				<li key={trail.id}>{trail.name}</li>
			))}
		</ul>
	)
}

export default TrailRow;