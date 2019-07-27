export default function reducer (state = {
  isFetching: false,
  userLocales: navigator.languages,
  currentLocales: navigator.languages,
  availableLocales: [],
  messages: null,
}, action) {
  switch (action.type) {
    case 'CHANGE_LOCALES_REQUEST': {
      return {
        ...state,
        isFetching: true,
      };
    }
    case 'CHANGE_LOCALES_RESPONSE': {
      const {
        userLocales,
        currentLocales,
        bundles,
        availableLocales,
        commonVoiceDiscourseLink,
      } = action;

      return {
        ...state,
        isFetching: false,
        userLocales,
        currentLocales,
        availableLocales,
        commonVoiceDiscourseLink,
        bundles,
      };
    }
    default:
      return state;
  }
}
