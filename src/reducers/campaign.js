import {ADD_CURRENT_CAMPAIGN} from './../actions/campaign';

// initial store.
const initial = {
  activeCampaign: null
}


const campaignReducer = (state=initial, action) => {
  switch (action.type) {
    case ADD_CURRENT_CAMPAIGN:
    	let newState =  {
    		...state,
    		entries: action.payload,
    	}
    	return newState;

		default: return state;
  }
}

export default campaignReducer;
