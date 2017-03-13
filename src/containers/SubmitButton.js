import React from 'react';
import { Button, Row } from 'react-bootstrap';
import { getResponse, showErrorWindow, showVariantsWindow, journeyDescriptionId } from '../actions';
import { connect } from 'react-redux';

let Submit = ( {from, to, onClick} ) => {
	return (
		<Row>
			<Button 
				bsStyle="primary" 
				onClick={() => onClick(from, to)}
				disabled={(!from || !to) ? true : false }>
				Submit
			</Button>
		</Row>
	);
}

const mapStateToProps = (state) => {
	return {
		from: state.inputComponent.fromValue,
		to: state.inputComponent.toValue
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onClick: (from ,to) => {
			if((from !== '') && (to !== ''))
			{
				let requestUrl =  'https://api.tfl.gov.uk/Journey/JourneyResults/'+from.replace(' /', ',')+'/to/'+to.replace(' /', ',');
				if (from === to){
					dispatch(showErrorWindow(true, 'Places must differ from each other.'));
				}
				else {
					fetch(requestUrl).then((data) => {
						if(data.status == '200')
						{
				 			dispatch(showVariantsWindow(false));
				 			dispatch(journeyDescriptionId(''));
							return data.json();
						}
						else if(data.status == '300')
						{
							dispatch(showVariantsWindow(true));
				 			dispatch(journeyDescriptionId(''));
							return data.json();
						}
						else
							return null;
					}).then((data) => {
						if(data)
						{
							dispatch(getResponse(data));
							if(!data.journeys)
				 				dispatch(showVariantsWindow(true));
						}
						else
							dispatch(showErrorWindow(true, 'Ups! Something goes wrong. Try again later, please.'));
					})
				}
				
				// if(from === to)
				// 	dispatch(showErrorWindow(true, 'Places must differ from each other.'));
				// else {
				// 	xhr.send();
				// 	if((xhr.status != '200') && (xhr.status != '300'))
				// 		dispatch(showErrorWindow(true, 'Ups! Something goes wrong. Try again later, please.'));
				// 	else {
				// 		dispatch(getResponse(xhr));
				// 		dispatch(showVariantsWindow(true));
				// 	}
				// }
			}
		} 
	}
}

Submit = connect(
	mapStateToProps,
	mapDispatchToProps
)(Submit);

export default Submit;