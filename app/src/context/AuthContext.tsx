import React from 'react';

export interface IAuthContext {
	signIn: ({ userName, password }: any) => any;
	signOut: () => any;
	signUp: () => void;
	toggleTheme: () => void;
	userToken: any;
}

const initialVaule: IAuthContext = {
	signIn: () => {},
	signOut: () => {},
	signUp: () => {},
	toggleTheme: () => {},
	userToken: '',
};

export const AuthContext = React.createContext<IAuthContext>(initialVaule);
