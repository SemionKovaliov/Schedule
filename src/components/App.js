import React from 'react';
import FromPlace from '../containers/FromPlace';
import ToPlace from '../containers/ToPlace';
import Submit from '../containers/SubmitButton';
import PlacesVariants from '../containers/PlacesVariants';
import Journeys from '../containers/Journeys';
import Details from '../containers/Details';
import ErrorMessage from '../containers/ErrorMessage';
import { Row, Col } from 'react-bootstrap';

const MainPanel = () => {
	return (
		<div>
			<Row>
				<Col md={4} style={{marginLeft: '45px', marginTop: '30px', marginBottom: '20px'}} >
					<Row style={{maxWidth: '450px'}}>
					<legend>Plan a journey</legend>	
						<FromPlace width={'400px'} />
						<ToPlace width={'400px'} />
						<Submit />
					</Row>
				</Col>
			</Row>
			<Row  style={{minWidth: '1300px'}}>
				<Col md={3}>
					<Journeys />
				</Col>
				<Col md={8}>
					<Details />
				</Col>
			</Row>
		</div>
	);
}

const App = () => {
	return (
		<div>
			<MainPanel />
			<PlacesVariants />
			<ErrorMessage />
		</div>
	);
}

export default App;