const users = (state, action) => {
	switch (action.type) {
		case "LOGIN":
			return {
				...state,
				token: action.payload.token,
				user: action.payload.user,
				loginForm: {
					email: "",
					password: "",
				},
			};
		case "SET_LOGIN_FORM_VALUE":
			return {
				...state,
				loginForm: {
					...state.loginForm,
					[action.payload.name]: action.payload.value,
				},
			};
		default:
			return state;
	}
};

export default users;
