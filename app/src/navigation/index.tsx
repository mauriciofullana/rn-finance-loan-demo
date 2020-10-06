import React, { FunctionComponent } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import RootStackNavigator from './RootStackNavigator';
import { PublicDrawerContent } from '../navigation/PublicDrawerContent';

const PublicDrawer = createDrawerNavigator();

const Navigator: FunctionComponent = () => {
	return (
		<NavigationContainer>
			<PublicDrawer.Navigator
				drawerContent={(props) => <PublicDrawerContent {...props} />}
			>
				<PublicDrawer.Screen name="Home" component={RootStackNavigator} />
			</PublicDrawer.Navigator>
		</NavigationContainer>
	);
};

export default Navigator;
