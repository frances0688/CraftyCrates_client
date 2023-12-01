const orderReducer = (state, action) => {
	switch (action.type) {
		case "CREATE_ORDER":
			return {
				...state,
				order: action.payload,
			};
		case "GET_ORDERS":
			return {
				...state,
				orders: action.payload,
			};
		default:
			return state;
	}
};

export default orderReducer;
