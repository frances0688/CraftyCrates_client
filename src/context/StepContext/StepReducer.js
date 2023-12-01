const stepReducer = (state, action) => {
	console.log("step", state, action.type);
	switch (action.type) {
		case "NEXT_STEP":
			return {
				...state,
				currentStep: state.currentStep + 1,
			};
		case "PREVIOUS_STEP":
			return {
				...state,
				currentStep: state.currentStep - 1,
			};
		default:
			return state;
	}
};

export default stepReducer;
