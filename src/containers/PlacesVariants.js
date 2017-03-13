import React from 'react';
import { connect } from 'react-redux';
import { Col, Row, Nav, NavItem, Modal, Panel } from 'react-bootstrap';
import  { onChangeFromInput, onChangeToInput, changeFromNaptanId, changeToNaptanId, showVariantsWindow } from '../actions';
import SubmitVariants from './SubmitVariantButton';

let PlacesVariants = ( {fromDisambiguations=[], toDisambiguations=[], status, newFrom, newTo, dispatch} ) => {
	let navItemFromOnClick = (item) => {
		dispatch(onChangeFromInput(item.place.commonName));
		dispatch(changeFromNaptanId(item.parameterValue));

	} 

	let navItemToOnClick = (item) => {
		dispatch(onChangeToInput(item.place.commonName));
		dispatch(changeToNaptanId(item.parameterValue));

	} 

	let from = fromDisambiguations.length ? (
		<Col md={6}>
			<Panel>From:
			<Nav bsStyle="pills" style={{width: '100%'}} >
				{fromDisambiguations.map(item => 
					<Row key={fromDisambiguations.indexOf(item)} >
						<NavItem 
							style={{width: '100%', textAlign: 'center'}} 
							onClick={() => navItemFromOnClick(item)}>
							{item.place.commonName}
						</NavItem>
						<legend></legend>
					</Row>
				)}
			</Nav>
			</Panel>
		</Col>
	) : null;

	let to = toDisambiguations.length ? (
		<Col md={6}>
			<Panel>To:
			<Nav bsStyle="pills" style={{width: '100%'}} >
				{toDisambiguations.map(item => 
					<Row key={toDisambiguations.indexOf(item)} >
						<NavItem 
							style={{width: '100%', textAlign: 'center'}} 
							onClick={() => navItemToOnClick(item)}>
							{item.place.commonName}
						</NavItem>
						<legend></legend>
					</Row>
				)}
			</Nav>
			</Panel>
		</Col>
	) : null;

	return (
		<Row  >
			<Modal  dialogClassName="custom-modal" show={status} onHide={() => dispatch(showVariantsWindow(false))} >
				<Modal.Header closeButton>
					<Modal.Title style={{textAlign: 'center', width: '100%'}}>Disambiguations</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<Row>
						{from}
						{to}
					</Row>
					<Row>
						<Col md={12} mdOffset={10}>
							<SubmitVariants disabled={(newFrom === newTo) ? true : false} from={newFrom} to={newTo} >Submit</SubmitVariants>
						</Col>
					</Row>
				</Modal.Body>

			</Modal>
		</Row>
	)

}

const mapStateToProps = (state) => {
	return {
		status: state.showVariantsWindow,
		fromDisambiguations: state.response.response ? state.response.fromLocationDisambiguation : [],
		toDisambiguations: state.response.response ? state.response.toLocationDisambiguation : [],
		newFrom: state.inputComponent.fromId,
		newTo: state.inputComponent.toId
	}
}

PlacesVariants = connect(mapStateToProps)(PlacesVariants)

export default PlacesVariants