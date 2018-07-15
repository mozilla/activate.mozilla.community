export default function reducer(state = {
  isFetching: false,
  userLocales: navigator.languages,
  currentLocales: navigator.languages,
  availableLocales: [],
  messages: null
}, action) {
  switch (action.type) {
    case 'CHANGE_LOCALES_REQUEST': {
      return {
        ...state,
        isFetching: true
      };
    }
    case 'CHANGE_LOCALES_RESPONSE': {
      const {
        userLocales,
        currentLocales,
        messages,
        availableLocales
      } = action;

      return {
        ...state,
        isFetching: false,
        userLocales,
        currentLocales,
        availableLocales,
        messages
      };
    }
    default:
      return state;
  }
}