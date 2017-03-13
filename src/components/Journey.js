import React, {PropTypes} from 'react';
import { Grid, Row, Col, Button, Panel } from 'react-bootstrap';

let Journey = ( {deptTime, arrivalTime, duration, onClick, color} ) => {
	return (
		<div>
			<Panel style={{width: '300px', height: '130px', margin: '10px', padding: '0px', backgroundColor: (color) ? 'lightGrey' : 'white' }} >
				<Grid style={{width: '298px'}} >
						<Row style={{ marginBottom: '10px' }} >
								<Col xs={4}>Departs</Col>
								<Col xs={4}>Arrives</Col>
								<Col xs={4}>Duration</Col>
						</Row>
						<Row style={{ marginBottom: '10px' }} >
								<Col xs={4}>{deptTime}</Col>
								<Col xs={4}>{arrivalTime}</Col>
								<Col xs={4}>{duration}</Col>
						</Row>
						<Row>
							<Col xs={4} xsOffset={3} >
								<Button onClick={() => onClick()} >View Details</Button>
							</Col>
						</Row>
				</Grid>
			</Panel>
		</div>
	);
}

Journey.propTypes = {
	deptTime: PropTypes.string,
	arrivalTime: PropTypes.string,
	duration: PropTypes.string,
	onClick: PropTypes.func
}

export default Journey;