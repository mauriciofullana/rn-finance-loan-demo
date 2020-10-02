import React, { FunctionComponent } from 'react';
import { NavigationContainer } from '@react-navigation/native';

import RootStackNavigator from './RootStackNavigator';

const Navigator: FunctionComponent = () => {
	return (
		<NavigationContainer>
			<RootStackNavigator />
		</NavigationContainer>
	);
};

export default Navigator;
