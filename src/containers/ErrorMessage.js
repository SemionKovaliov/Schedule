import React from 'react';
import { Modal, Button} from 'react-bootstrap';
import { hideErrorWindow } from '../actions';
import { connect } from 'react-redux';

let ErrorMessage = ( {state, dispatch} ) => {
	return (
		<Modal show={state.show} onHide={() => dispatch(hideErrorWindow(false))} >

			<Modal.Header closeButton>
				<Modal.Title>Error!</Modal.Title>
			</Modal.Header>

			<Modal.Body>
				{state.text}
			</Modal.Body>

			<Modal.Footer>
				<Button bsStyle='primary' onClick={() => dispatch(hideErrorWindow(false))}>Close</Button>
			</Modal.Footer>
		</Modal>
	);
}

const mapStateToProps = (state) => {
	return {
		state: state.errorWindow
	}
}

ErrorMessage = connect(mapStateToProps)(ErrorMessage);

export default ErrorMessage;