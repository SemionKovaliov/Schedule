const journeyId = (state='', action) => {
	switch(action.type) {
		case 'CHANGE_JOURNEY_ID':
			return action.id;
		default:
			return state;
	}
}

export default journeyId;