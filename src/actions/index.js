export const onChangeFromInput = (value) => {
	return {
		type: 'ONCHANGE_FROM_INPUT',
		value
	}
}

export const onChangeToInput = (value) => {
	return {
		type: 'ONCHANGE_TO_INPUT',
		value
	}
}

export const getResponse = (response) => {
	return {
		type: 'GET_RESPONSE_DATA',
		response
	}
}

export const changeFromNaptanId = (id) => {
	return {
		type: 'CHANGE_FROM_ID',
		id
	}
}

export const changeToNaptanId = (id) => {
	return {
		type: 'CHANGE_TO_ID',
		id
	}
}

export const journeyDescriptionId = (id) => {
	return {
		type: 'CHANGE_JOURNEY_ID',
		id
	}
}

export const showErrorWindow = (state, text) => {
	return {
		type: 'SHOW_ERROR_WINDOW',
		state,
		text
	}
}

export const hideErrorWindow = (state) => {
	return {
		type: 'HIDE_ERROR_WINDOW',
		state
	}
}

export const showVariantsWindow = (state) => {
	return {
		type: 'SHOW_VARIANTS_WINDOW',
		state
	}
}