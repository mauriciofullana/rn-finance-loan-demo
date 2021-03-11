import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { VictoryPie } from 'victory-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Text } from 'react-native-paper';
import { useTheme } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const graphicColor = ['#BA2427', '#F7464A', '#46BFBD']; // Colors
const wantedGraphicData = [
	{ y: 10, label: ' ' },
	{ y: 10, label: ' ' },
	{ y: 10, label: ' ' },
]; // Data that we want to display
const defaultGraphicData = [
	{ y: 0, label: ' ' },
	{ y: 0, label: ' ' },
	{ y: 100, label: ' ' },
]; // Data used to make the animate prop work

export default function CarouselItem() {
	const { colors } = useTheme();
	const [graphicData, setGraphicData] = useState(defaultGraphicData);

	useEffect(() => {
		setGraphicData(wantedGraphicData); // Setting the data that we want to display
	}, []);

	return (
		<View style={styles.container}>
			<View style={styles.header}>
				<View
					style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
				>
					<Text style={styles.headerLoanName}>Personal loan XXXX-645</Text>
				</View>
				<TouchableOpacity>
					<MaterialCommunityIcons
						name="dots-vertical"
						size={25}
						color={colors.text}
					/>
				</TouchableOpacity>
			</View>
			<View style={{ flexDirection: 'row', justifyContent: 'center' }}>
				<View
					style={{
						alignItems: 'center',
						justifyContent: 'center',
						height: 150,
					}}
				>
					<VictoryPie
						animate={{ easing: 'exp' }}
						data={graphicData}
						width={235}
						height={235}
						colorScale={graphicColor}
						innerRadius={56}
					/>
					<View style={{ position: 'absolute', alignItems: 'center' }}>
						<Text style={{ fontSize: 14 }}>56.600 USD</Text>
						<Text style={{ fontSize: 14 }}>9 Installments</Text>
					</View>
				</View>
				<View
					style={{
						justifyContent: 'space-around',
						paddingVertical: 15,
						marginRight: 55,
					}}
				>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<View
							style={{
								height: 15,
								width: 15,
								backgroundColor: '#46BFBD',
								marginRight: 10,
							}}
						/>
						<View style={{ justifyContent: 'center', flexDirection: 'row' }}>
							<Text>3 </Text>
							<Text style={{ fontSize: 13, fontWeight: 'bold' }}>Paid</Text>
						</View>
					</View>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<View
							style={{
								height: 15,
								width: 15,
								backgroundColor: '#F7464A',
								marginRight: 10,
							}}
						/>
						<View style={{ justifyContent: 'center', flexDirection: 'row' }}>
							<Text>3 </Text>
							<Text style={{ fontSize: 13, fontWeight: 'bold' }}>Overdue</Text>
						</View>
					</View>
					<View style={{ flexDirection: 'row', alignItems: 'center' }}>
						<View
							style={{
								height: 15,
								width: 15,
								backgroundColor: '#BA2427',
								marginRight: 10,
							}}
						/>
						<View style={{ justifyContent: 'center', flexDirection: 'row' }}>
							<Text>3 </Text>
							<Text style={{ fontSize: 13, fontWeight: 'bold' }}>Expired</Text>
						</View>
					</View>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {},
	header: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		paddingHorizontal: 20,
		marginBottom: 12,
	},
	headerLoanName: {
		fontSize: 15,
	},
});
