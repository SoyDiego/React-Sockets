import React, { createContext, useCallback, useState } from "react";

export const AuthContext = createContext();

const initialState = {
	uid: null,
	checking: true,
	logged: false,
	name: null,
	email: null,
};

const AuthProvider = ({ children }) => {
	const [auth, setAuth] = useState(initialState);

	const login = (email, password) => {};

	const register = (nombre, email, password) => {};

	const verificaToken = useCallback(() => {}, []);

	const logout = () => {};

	return (
		<AuthContext.Provider
			value={{ login, register, verificaToken, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthProvider;
