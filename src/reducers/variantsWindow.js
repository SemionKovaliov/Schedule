const showVariantsWindow = (state=false, action) => {
	switch(action.type) {
		case 'SHOW_VARIANTS_WINDOW':
			return action.state;
		default:
			return state;
	}
}

export default showVariantsWindow;