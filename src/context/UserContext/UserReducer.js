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
		case "CREATE":
			return {
				...state,
				token: action.payload.token,
				user: action.payload.user,
				registerForm: {
					user_name: "",
					address: "",
					email: "",
					password: "",
				},
			};
		case "SET_REGISTER_FORM_VALUE":
			return {
				...state,
				registerForm: {
					...state.registerForm,
					[action.payload.name]: action.payload.value,
				},
			};
		default:
			return state;
	}
};

export default users;
