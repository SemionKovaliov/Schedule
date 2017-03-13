import React from 'react';
import  { onChangeFromInput } from '../actions';
import { connect } from 'react-redux';
import { FormControl, ControlLabel, Row } from 'react-bootstrap';

let FromPlace = ( {value, onChange, width} ) => {
	return (
		<Row style={{marginBottom: '15px'}}>
			<ControlLabel>From:</ControlLabel>
			<FormControl 
				type='text' 
				style={{width: width}} 
				value={value || ''} 
				onChange={(e) => onChange(e.target.value)} />
		</Row>
	);
}

const mapStateToProps = (state) => {
	return {
		value: state.inputComponent.fromValue
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onChange: (value) => dispatch(onChangeFromInput(value))
	}
}

FromPlace = connect(
	mapStateToProps,
	mapDispatchToProps
)(FromPlace);

export default FromPlace;