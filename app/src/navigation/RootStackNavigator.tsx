import React from 'react';
import { StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { createStackNavigator } from '@react-navigation/stack';

import SignInScreen from '../screens/SignInScreen';
import { Colors } from '../styles';
import { transparent } from '../styles/colors';

const RootStack = createStackNavigator();

const RootStackScreen = ({ navigation }: any) => (
	<RootStack.Navigator>
		<RootStack.Screen
			name="SignInScreen"
			component={SignInScreen}
			options={{
				headerStyle: {
					elevation: Platform.OS === 'ios' ? 0 : 0,
					shadowOpacity: Platform.OS === 'ios' ? 0 : 0,
					borderBottomWidth: 0,
					backgroundColor: transparent,
				},
				headerTitle: () => null,
				headerLeft: () => {
					return (
						<TouchableOpacity
							style={styles.headerIconContainer}
							onPress={() => navigation.openDrawer()}
						>
							<Ionicons style={styles.hederMenuIcon} name="md-menu" size={28} />
						</TouchableOpacity>
					);
				},
			}}
		/>
	</RootStack.Navigator>
);

const styles = StyleSheet.create({
	hederMenuIcon: {
		color: Colors.mediumGray,
	},
	headerIconContainer: {
		marginHorizontal: 15,
	},
});

export default RootStackScreen;
