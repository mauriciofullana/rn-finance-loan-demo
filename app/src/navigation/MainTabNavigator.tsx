import React from 'react';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeStack from '../navigation/HomeStackNavigator';
import { Colors } from '../styles';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => (
	<Tab.Navigator
		initialRouteName="Home"
		tabBarOptions={{
			activeTintColor: Colors.darkGray,
		}}
	>
		<Tab.Screen
			name="Home"
			component={HomeStack}
			options={{
				tabBarIcon: ({ color }) => (
					<MaterialCommunityIcons name="home-outline" size={25} color={color} />
				),
			}}
		/>
		<Tab.Screen
			name="Detail"
			component={HomeStack}
			options={{
				tabBarIcon: ({ color }) => (
					<MaterialCommunityIcons
						name="file-document-outline"
						size={25}
						color={color}
					/>
				),
			}}
		/>
		<Tab.Screen
			name="Installments"
			component={HomeStack}
			options={{
				tabBarIcon: ({ color }) => (
					<MaterialCommunityIcons
						name="format-list-bulleted"
						size={25}
						color={color}
					/>
				),
			}}
		/>
		<Tab.Screen
			name="Payments"
			component={HomeStack}
			options={{
				tabBarIcon: ({ color }) => (
					<FontAwesome name="money" size={25} color={color} />
				),
			}}
		/>
	</Tab.Navigator>
);

export default MainTabNavigator;
