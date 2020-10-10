import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { VictoryPie } from 'victory-native';
import { Colors } from '../styles';

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
	const [graphicData, setGraphicData] = useState(defaultGraphicData);

	useEffect(() => {
		setGraphicData(wantedGraphicData); // Setting the data that we want to display
	}, []);

	return (
		<View
			style={{
				flexDirection: 'row',
				height: 200,
			}}
		>
			<View
				style={{
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<VictoryPie
					animate={{ duration: 15000, easing: 'exp' }}
					data={graphicData}
					width={250}
					height={250}
					colorScale={graphicColor}
					innerRadius={55}
				/>
				<View style={{ position: 'absolute', alignItems: 'center' }}>
					<Text style={{ color: Colors.baseText }}>56.600</Text>
					<Text style={{ color: Colors.baseText }}>En 10 cuotas</Text>
				</View>
			</View>
			<View
				style={{ flex: 1, justifyContent: 'space-around', paddingVertical: 30 }}
			>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<View
						style={{
							height: 17,
							width: 17,
							backgroundColor: '#46BFBD',
							marginRight: 10,
						}}
					/>
					<View style={{ justifyContent: 'center' }}>
						<Text style={{ color: Colors.baseText, fontSize: 13 }}>
							Pagadas
						</Text>
						<Text>3 cuotas</Text>
					</View>
				</View>

				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<View
						style={{
							height: 17,
							width: 17,
							backgroundColor: '#BA2427',
							marginRight: 10,
						}}
					/>
					<View style={{ justifyContent: 'center' }}>
						<Text style={{ color: Colors.baseText, fontSize: 13 }}>
							Vencidas
						</Text>
						<Text>3 cuotas</Text>
					</View>
				</View>

				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<View
						style={{
							height: 17,
							width: 17,
							backgroundColor: '#F7464A',
							marginRight: 10,
						}}
					/>
					<View style={{ justifyContent: 'center' }}>
						<Text style={{ color: Colors.baseText, fontSize: 13 }}>
							Pendientes
						</Text>
						<Text>3 cuotas</Text>
					</View>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({});
