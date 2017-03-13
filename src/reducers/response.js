const locationDisambiguation = (state={}, action) => {
	switch(action.type) {
		case 'GET_RESPONSE_DATA':
			let resp = action.response;
			console.log(resp)
			return {
				response: resp,
				fromLocationDisambiguation: resp.fromLocationDisambiguation.disambiguationOptions ? resp.fromLocationDisambiguation.disambiguationOptions : [],
				toLocationDisambiguation: resp.toLocationDisambiguation.disambiguationOptions ? resp.toLocationDisambiguation.disambiguationOptions : []
			}
		default: 
			return state;
	}
}

const journeys = (state={}, action) => {
	switch(action.type) {
		case 'GET_RESPONSE_DATA':
			let resp = action.response;

			return {
				response: action.response,
				journeys: resp.journeys
			}
		default: 
			return state;
	}
}

const response = (state={}, action) => {
	switch(action.type) {
		case 'GET_RESPONSE_DATA':
			let resp = action.response;
			if (resp.journeys)
			{
				return journeys(undefined, action);
			}
			else {
				if ((resp.fromLocationDisambiguation.matchStatus === 'list') || (resp.toLocationDisambiguation.matchStatus === 'list'))
				{
						return locationDisambiguation(undefined, action);			
				}
				else
					return state;
			}
		default:
			return state; 
	}
}

export default response;