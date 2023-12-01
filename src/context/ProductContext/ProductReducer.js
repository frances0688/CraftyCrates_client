const productReducer = (state, action) => {
	console.log(action);
	switch (action.type) {
		case "GET_COMBINATION_ID":
			return {
				...state,
				combinationId: action.payload,
			};
		case "GET_PRODUCTS_IN_BOX":
			return {
				...state,
				products: action.payload,
			};
		default:
			return state;
	}
};

export default productReducer;
