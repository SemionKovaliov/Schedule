import React from 'react';
import  { onChangeToInput } from '../actions';
import { connect } from 'react-redux';
import { FormControl, ControlLabel, Row } from 'react-bootstrap';

let ToPlace = ( {value, onChange, width} ) => {
	return (
		<Row style={{marginBottom: '15px'}}>
			<ControlLabel>To:</ControlLabel>
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
		value: state.inputComponent.toValue
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onChange: (value) => dispatch(onChangeToInput(value))
	}
}

ToPlace = connect(
	mapStateToProps,
	mapDispatchToProps
)(ToPlace);

export default ToPlace;