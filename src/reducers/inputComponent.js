const inputComponent = (state={}, action) => {
	switch(action.type) {
		case 'ONCHANGE_FROM_INPUT':
			return Object.assign({}, state , { fromValue: action.value })
		case 'ONCHANGE_TO_INPUT':
			return Object.assign({}, state , { toValue: action.value })
		case 'CHANGE_FROM_ID':
			return Object.assign({}, state , { fromId: action.id })
		case 'CHANGE_TO_ID':
			return Object.assign({}, state , { toId: action.id })
		default:
		return state;
	}
}

export default inputComponent;