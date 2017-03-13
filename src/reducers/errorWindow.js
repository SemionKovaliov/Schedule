const errorWindow = (state={}, action) => {
	switch(action.type) {
		case 'SHOW_ERROR_WINDOW':
			return {
				show: action.state,
				text: action.text
			}
		case 'HIDE_ERROR_WINDOW':
			return {
				show: action.state,
				text: state.text
			}
		default:
			return state;
	}
}

export default errorWindow;