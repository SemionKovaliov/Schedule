import { combineReducers } from 'redux';
import inputComponent from './inputComponent';
import response from './response';
import journeyId from './journeyDescription';
import errorWindow from './errorWindow';
import showVariantsWindow from './variantsWindow';

const globalActions = combineReducers({
	showVariantsWindow,
	errorWindow,
	journeyId,
	response,
	inputComponent
})

export default globalActions;