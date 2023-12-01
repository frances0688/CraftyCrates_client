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
		case "GET_INFO":
			return {
				...state,
				user: action.payload,
			};
		case "LOGOUT":
			return {
				...state,
				token: null,
				user: null,
			};

		default:
			return state;
	}
};

export default users;
