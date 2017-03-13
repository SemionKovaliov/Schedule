import React from 'react';
import { Button } from 'react-bootstrap';
import { getResponse, showErrorWindow, showVariantsWindow } from '../actions';
import { connect } from 'react-redux';

let SubmitVariants = ( {from, to, fromId, toId, onClick} ) => {
	return (
		<Button bsStyle="primary" onClick={() => onClick(from, to, fromId, toId)} >Submit</Button>
	);
}

const mapStateToProps = (state) => {
	return {
		from: state.inputComponent.fromValue,
		to: state.inputComponent.toValue,
		fromId: state.inputComponent.fromId,
		toId: state.inputComponent.toId
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onClick: (from, to, fromId, toId) => {
			let requestUrl = 'https://api.tfl.gov.uk/Journey/JourneyResults/'+fromId+'/to/'+toId;
				if (from === to){
					dispatch(showErrorWindow(true, 'Places must differ from each other.'));
				}
				else {
					fetch(requestUrl).then((data) => {						
						if(data.status == '200')
						{
				 			dispatch(showVariantsWindow(false));
							return data.json();
						}
						else if(data.status == '300')
						{
							dispatch(showVariantsWindow(true));
							return data.json();
						}
						else
							return null;
					}).then((data) => {
						if(data)
						{
							dispatch(getResponse(data));
						}
						else
							dispatch(showErrorWindow(true, 'Ups! Something goes wrong. Try again later, please.'));
					})
				}

		} 
	}
}

SubmitVariants = connect(
	mapStateToProps,
	mapDispatchToProps
)(SubmitVariants);

export default SubmitVariants;