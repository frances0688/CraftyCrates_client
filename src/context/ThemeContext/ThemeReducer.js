const themes = (state, action) => {
	switch (action.type) {
		case "GET_THEMES":
			return {
				...state,
				themes: action.payload,
			};
		default:
			return state;
	}
};
export default themes;
