import React from 'react';
import { ListGroup, ListGroupItem, Panel } from 'react-bootstrap';
import { connect } from 'react-redux';

let Details = ( {journeys, id} ) => {

	let legs = (id !== '') ? journeys[id].legs : [];

	return (
		<div>
			{legs.map(l => 
				<Panel
				key={legs.indexOf(l)}
				header={l.instruction.detailed} 
				style={{marginBottom: '0px', cursor: 'default'}}
				collapsible>
					<ListGroup key={legs.indexOf(l)}>
						{(l.instruction.steps.length !== 0) ? 
							l.instruction.steps.map(step =>
								<ListGroupItem key={l.instruction.steps.indexOf(step)}>{step.description}</ListGroupItem>) : 
							l.path.stopPoints.map(stopPoint => 
								<ListGroupItem key={l.path.stopPoints.indexOf(stopPoint)}>{stopPoint.name}</ListGroupItem>)
						}
					</ListGroup>
				</Panel>
		)}
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		journeys: state.response.response ? state.response.journeys : [],
		id: state.journeyId
	}
}

Details = connect(mapStateToProps)(Details);

export default Details;

