const boxes = (state, action) => {
	switch (action.type) {
		case "GET_BOXES":
			return {
				...state,
				boxes: action.payload,
			};
		default:
			return state;
	}
};
export default boxes;
