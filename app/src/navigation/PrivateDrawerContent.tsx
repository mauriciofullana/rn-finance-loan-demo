import React, { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import SegmentedControlTab from 'react-native-segmented-control-tab';
import {
	Avatar,
	Title,
	Caption,
	Paragraph,
	Drawer,
	Text,
	TouchableRipple,
	Switch,
	useTheme,
} from 'react-native-paper';
import { Colors } from '../styles';

import { AuthContext } from '../context/AuthContext';

export function PrivateDrawerContent(props: any) {
	const { signOut, toggleTheme } = React.useContext(AuthContext);
	const paperTheme = useTheme();

	return (
		<View style={{ flex: 1 }}>
			<DrawerContentScrollView {...props}>
				<View style={styles.drawerContent}>
					<View style={styles.userInfoSection}>
						<View
							style={{ flexDirection: 'row', marginTop: 15, marginBottom: 10 }}
						>
							<Avatar.Image
								source={{
									uri:
										'https://media-exp1.licdn.com/dms/image/C5603AQHOBuS3zOEosw/profile-displayphoto-shrink_400_400/0?e=1606348800&v=beta&t=4PQsz0de3-sSHSx2wHrxxAWfUv3RRkuiVa_SkkpK_wU',
								}}
								size={50}
							/>
							<View style={{ marginLeft: 15, justifyContent: 'center' }}>
								<Title style={styles.title}>Mauricio Fullana</Title>
							</View>
						</View>
						<View style={styles.row}>
							<View style={styles.section}>
								<Caption style={styles.caption}>Last login date:</Caption>
								<Caption style={styles.caption}>Oct 8 14:30</Caption>
							</View>
						</View>
						<View style={styles.row}>
							<View style={styles.section}>
								<Caption style={styles.caption}>Last pass change:</Caption>
								<Caption style={styles.caption}>Dec 5 22:15</Caption>
							</View>
						</View>
					</View>
				</View>
				<Drawer.Section style={styles.drawerSection}>
					<DrawerItem
						label="Home"
						onPress={() => {
							props.navigation.navigate('Home');
						}}
						icon={({ color, size }) => (
							<MaterialCommunityIcons
								name="home-outline"
								color={color}
								size={size}
								onPress={() => {}}
							/>
						)}
					/>
					<DrawerItem
						label="News"
						onPress={() => {
							props.navigation.navigate('Profile');
						}}
						icon={({ color, size }) => (
							<MaterialCommunityIcons
								name="message-text-outline"
								color={color}
								size={size}
							/>
						)}
					/>
					<DrawerItem
						label="Find us"
						onPress={() => {
							props.navigation.navigate('Bookmarks');
						}}
						icon={({ color, size }) => (
							<MaterialCommunityIcons
								name="map-marker-outline"
								color={color}
								size={size}
							/>
						)}
					/>
					<DrawerItem
						label="Benefits"
						onPress={() => {
							props.navigation.navigate('Settings');
						}}
						icon={({ color, size }) => (
							<MaterialCommunityIcons
								name="bag-personal-outline"
								color={color}
								size={size}
							/>
						)}
					/>
					<DrawerItem
						label="Contact us"
						onPress={() => {
							props.navigation.navigate('Support');
						}}
						icon={({ color, size }) => (
							<MaterialCommunityIcons
								name="phone-outline"
								color={color}
								size={size}
							/>
						)}
					/>
					<DrawerItem
						label="Links of interest"
						onPress={() => {
							props.navigation.navigate('Support');
						}}
						icon={({ color, size }) => (
							<MaterialCommunityIcons name="link" color={color} size={size} />
						)}
					/>
					<DrawerItem
						label="Terms and conditions"
						onPress={() => {
							props.navigation.navigate('Support');
						}}
						icon={({ color, size }) => (
							<MaterialCommunityIcons
								name="file-document-outline"
								color={color}
								size={size}
							/>
						)}
					/>
					<DrawerItem
						label="FAQ"
						onPress={() => {
							props.navigation.navigate('Support');
						}}
						icon={({ color, size }) => (
							<AntDesign name="question" color={color} size={size} />
						)}
					/>
				</Drawer.Section>
				<Drawer.Section title="Preferences">
					<TouchableRipple
						onPress={() => {
							// toggleTheme();
						}}
					>
						<View style={styles.preference}>
							<Text>Dark Theme</Text>
							<View pointerEvents="none">
								<Switch value={paperTheme.dark} />
							</View>
						</View>
					</TouchableRipple>
					<TouchableRipple
						onPress={() => {
							// toggleTheme();
						}}
					>
						<View style={styles.preference}>
							<Text>Language</Text>
							<View pointerEvents="none" style={{ flex: 0.5 }}>
								<SegmentedControlTab
									values={['ES', 'EN']}
									selectedIndex={0}
									onTabPress={(index) => {}}
									activeTabStyle={{
										backgroundColor: Colors.main,
									}}
									tabTextStyle={{
										color: Colors.main,
									}}
									tabStyle={{
										borderColor: Colors.main,
									}}
								/>
							</View>
						</View>
					</TouchableRipple>
				</Drawer.Section>
			</DrawerContentScrollView>
			<Drawer.Section style={styles.bottomDrawerSection}>
				<DrawerItem
					label="Sign Out"
					onPress={signOut}
					icon={({ color, size }) => (
						<MaterialCommunityIcons
							name="exit-to-app"
							color={color}
							size={size}
						/>
					)}
				/>
			</Drawer.Section>
		</View>
	);
}

const styles = StyleSheet.create({
	drawerContent: {
		flex: 1,
	},
	userInfoSection: {
		paddingLeft: 20,
	},
	title: {
		fontSize: 16,
		marginTop: 3,
		fontWeight: 'bold',
	},
	caption: {
		fontSize: 13,
		lineHeight: 14,
		marginRight: 10,
	},
	row: {
		marginTop: 5,
		flexDirection: 'row',
		alignItems: 'center',
	},
	section: {
		flexDirection: 'row',
		alignItems: 'center',
		marginRight: 15,
	},
	paragraph: {
		fontWeight: 'bold',
		marginRight: 3,
	},
	drawerSection: {
		marginTop: 15,
	},
	bottomDrawerSection: {
		marginBottom: 15,
		borderTopColor: '#f4f4f4',
		borderTopWidth: 1,
	},
	preference: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingVertical: 12,
		paddingHorizontal: 16,
	},
});
