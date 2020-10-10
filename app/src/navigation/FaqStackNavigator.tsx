import React from 'react';
import { StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { createStackNavigator } from '@react-navigation/stack';

import FaqScreen from '../screens/TermsAndConditionsScreen';
import { Colors } from '../styles';

const FaqStack = createStackNavigator();

const FaqStackNavigator = ({ navigation }: any) => (
	<FaqStack.Navigator>
		<FaqStack.Screen
			name="FaqScreen"
			component={FaqScreen}
			options={{
				headerStyle: {
					elevation: Platform.OS === 'ios' ? 0 : 0,
					shadowOpacity: Platform.OS === 'ios' ? 0 : 0,
					borderBottomWidth: 0,
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
	</FaqStack.Navigator>
);

const styles = StyleSheet.create({
	hederMenuIcon: {
		color: Colors.mediumGray,
	},
	headerIconContainer: {
		marginHorizontal: 15,
	},
});

export default FaqStackNavigator;
