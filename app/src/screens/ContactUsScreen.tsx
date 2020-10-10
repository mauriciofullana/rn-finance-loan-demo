import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ContactUsScreen() {
	return (
		<View style={styles.container}>
			<Text>ContactUsScreen</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
