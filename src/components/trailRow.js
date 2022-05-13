import dummyTrails from '../FakeJson';

const TrailRow = () => {
	return (
		<div>
			<ul data-testid="trail-names-list">
				{dummyTrails.map((trail, index) => (
					<li key={index} className="list-item" data-testid="single-trail">
						{trail.name}
					</li>
				))}
			</ul>
		</div>
	)
}

export default TrailRow;