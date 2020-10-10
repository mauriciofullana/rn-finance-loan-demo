import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CarouselItem from '../components/CarouselItem';

export default function HomeScreen() {
	return (
		<View style={styles.container}>
			<CarouselItem />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		//alignItems: 'center',
		//justifyContent: 'center',
	},
});
