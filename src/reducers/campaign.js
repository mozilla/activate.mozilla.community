import { ADD_CURRENT_CAMPAIGN, ADD_UPCOMING_CAMPAIGNS } from './../actions/campaign';

// initial store.
const initial = {
  active: null,
  upcoming: null,
};

const campaignReducer = (state = initial, action) => {
  switch (action.type) {
    case ADD_CURRENT_CAMPAIGN: {
      const newState = {
        ...state,
        active: action.payload,
      };
      return newState;
    }
    case ADD_UPCOMING_CAMPAIGNS: {
      const newState = {
        ...state,
        upcoming: action.payload,
      };
      return newState;
    }
    default: return state;
  }
};

export default campaignReducer;
