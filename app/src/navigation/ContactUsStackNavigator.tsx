import React from 'react';
import { StyleSheet, TouchableOpacity, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { createStackNavigator } from '@react-navigation/stack';

import ContactUsScreen from '../screens/ContactUsScreen';
import { Colors } from '../styles';

const ContactUsStack = createStackNavigator();

const ContactUsStackNavigator = ({ navigation }: any) => (
	<ContactUsStack.Navigator>
		<ContactUsStack.Screen
			name="ContactUsScreen"
			component={ContactUsScreen}
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
	</ContactUsStack.Navigator>
);

const styles = StyleSheet.create({
	hederMenuIcon: {
		color: Colors.mediumGray,
	},
	headerIconContainer: {
		marginHorizontal: 15,
	},
});

export default ContactUsStackNavigator;
