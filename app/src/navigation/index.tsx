import React, { FunctionComponent } from 'react';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import RootStackNavigator from './RootStackNavigator';
import { PublicDrawerContent } from '../navigation/PublicDrawerContent';
import { PrivateDrawerContent } from '../navigation/PrivateDrawerContent';
import { AuthContext } from '../context/AuthContext';
import HomeStackNavigator from './HomeStackNavigator';

const PublicDrawer = createDrawerNavigator();
const PrivateDrawer = createDrawerNavigator();

interface NavigatorProps {
	theme: Theme;
}

const Navigator: FunctionComponent<NavigatorProps> = ({ theme }) => {
	const { userToken } = React.useContext(AuthContext);

	return (
		<NavigationContainer theme={theme}>
			{userToken != null ? (
				<PrivateDrawer.Navigator
					drawerContent={(props) => <PrivateDrawerContent {...props} />}
				>
					<PrivateDrawer.Screen name="Home" component={HomeStackNavigator} />
				</PrivateDrawer.Navigator>
			) : (
				<PublicDrawer.Navigator
					drawerContent={(props) => <PublicDrawerContent {...props} />}
				>
					<PublicDrawer.Screen name="Login" component={RootStackNavigator} />
				</PublicDrawer.Navigator>
			)}
		</NavigationContainer>
	);
};

export default Navigator;
