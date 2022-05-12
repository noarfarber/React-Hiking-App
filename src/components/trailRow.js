import trails from '../FakeJson';

const TrailRow = () => {
	return (
		<ul data-testid="text-input">
			{trails.map((trail) => (
				<li key={trail.id}>{trail.name}</li>
			))}
		</ul>
	)
}

export default TrailRow;