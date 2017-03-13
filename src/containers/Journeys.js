import React from 'react';
import Journey from '../components/Journey';
import { connect } from 'react-redux';
import  { journeyDescriptionId } from '../actions';

let getTime = (time) => {
	let ret = new Date(time);
	return ret.getHours() + ':' + ((ret.getMinutes() < 10) ? '0'+ret.getMinutes() : ret.getMinutes());
}

let getDuration = (time) => {
	if(time > 60)
		return ((Math.floor(time / 60))+':'+(((time % 60) < 10) ? '0'+(time % 60) : (time - (60*(Math.floor(time / 60)))))).toString();
	else
		return time.toString(); 
}

let Journeys = ( {journeys=[], id, onClick} ) => {
	return (
		<div>
			{journeys.map(item => 
				<Journey 
					key={journeys.indexOf(item)}
					deptTime={getTime(item.startDateTime)} 
					arrivalTime={getTime(item.arrivalDateTime)} 
					duration={getDuration(item.duration)}
					onClick={() => onClick(journeys.indexOf(item))}
					color={(journeys.indexOf(item) === id) ? true : false}
				/>)}
		</div>
	);
}

const mapStateToProps = (state, props) => {
	return {
		journeys: state.response.response ? state.response.journeys : [],
		id: state.journeyId
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onClick: (id) => dispatch(journeyDescriptionId(id))
	}
}

Journeys = connect(mapStateToProps, mapDispatchToProps)(Journeys);

export default Journeys;