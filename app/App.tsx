import { StatusBar } from 'expo-status-bar';
import React, { useState, useReducer, useEffect } from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import {
	DefaultTheme as NavigationDefaultTheme,
	DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';

import {
	Provider as PaperProvider,
	DefaultTheme as PaperDefaultTheme,
	DarkTheme as PaperDarkTheme,
} from 'react-native-paper';

import Navigator from './src/navigation/index';
import { AuthContext } from './src/context/AuthContext';
import { Colors } from './src/styles';

declare global {
	namespace ReactNativePaper {
		interface ThemeColors {
			slideUpPanelBackground: string;
			slideUpPanelLeftTextColor: string;
		}
	}
}

const CustomDefaultTheme = {
	...NavigationDefaultTheme,
	...PaperDefaultTheme,
	colors: {
		...NavigationDefaultTheme.colors,
		...PaperDefaultTheme.colors,
		background: Colors.screenBackground,
		text: Colors.lightWarmGray,
		slideUpPanelBackground: Colors.slideUpPanelBackground,
		slideUpPanelLeftTextColor: Colors.slideUpPanelLeftTextColor,
	},
	customColors: {},
};

const CustomDarkTheme = {
	...NavigationDarkTheme,
	...PaperDarkTheme,
	colors: {
		...NavigationDarkTheme.colors,
		...PaperDarkTheme.colors,
		background: Colors.darkModeScreenBackground,
		text: Colors.darkModeBaseText,
		slideUpPanelBackground: Colors.darkModeSlideUpPanelBackground,
		slideUpPanelLeftTextColor: Colors.darkModeSlideUpPanelLeftTextColor,
	},
};

export default function App() {
	const [isDarkTheme, setIsDarkTheme] = useState(false);

	const initialLoginState = {
		isLoading: true,
		userName: null,
		userToken: null,
	};

	const theme = isDarkTheme ? CustomDarkTheme : CustomDefaultTheme;

	const loginReducer = (prevState: any, action: any) => {
		switch (action.type) {
			case 'RETRIEVE_TOKEN':
				return {
					...prevState,
					userToken: action.token,
					isLoading: false,
				};
			case 'LOGIN':
				return {
					...prevState,
					username: action.id,
					userToken: action.token,
					isLoading: false,
				};
			case 'LOGOUT':
				return {
					...prevState,
					username: null,
					userToken: null,
					isLoading: false,
				};
			case 'REGISTER':
				return {
					...prevState,
					email: action.id,
					userToken: action.token,
					isLoading: false,
				};
		}
	};

	const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

	const authContext = React.useMemo(
		() => ({
			signIn: async ({ userName, password }: any) => {
				try {
					await AsyncStorage.setItem('userToken', userName + password);
				} catch (error) {
					console.log(error);
				}
				dispatch({ type: 'LOGIN', id: userName, token: userName + password });
			},
			signOut: async () => {
				try {
					await AsyncStorage.removeItem('userToken');
				} catch (error) {
					console.log(error);
				}
				dispatch({ type: 'LOGOUT' });
			},
			signUp: () => {
				//setUserToken('asdf');
				//setIsLoading(false);
			},
			toggleTheme: () => {
				setIsDarkTheme((isDarkTheme) => !isDarkTheme);
			},
			userToken: loginState.userToken,
		}),
		[loginState.userToken]
	);

	useEffect(() => {
		// Workaround to clear token when refreshing the app through expo tool
		// TO DO: delete the following line, as the token must be romved when loggin out
		AsyncStorage.clear();
		async function retrieveToken() {
			let userToken = null;
			try {
				userToken = await AsyncStorage.getItem('userToken');
			} catch (error) {
				console.log(error);
			}
			dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
		}

		retrieveToken();
	}, []);

	return (
		<PaperProvider theme={theme}>
			<AuthContext.Provider value={authContext}>
				<Navigator theme={theme} />
			</AuthContext.Provider>
		</PaperProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});
