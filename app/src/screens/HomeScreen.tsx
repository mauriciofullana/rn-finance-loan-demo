import React from 'react';
import { StyleSheet, View } from 'react-native';
import CarouselItem from '../components/CarouselItem';
import * as Animatable from 'react-native-animatable';
import { Text, useTheme } from 'react-native-paper';
import { Colors } from '../styles';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MainCarousel from '../components/MainCarousel';
import { ILoan, loans } from '../models/loans';

export default function HomeScreen() {
	const { dark, colors } = useTheme();
	return (
		<View style={styles.container}>
			{/* <CarouselItem /> */}
			<MainCarousel items={loans} selectedItemChange={() => {}} />
			<Animatable.View
				style={[
					styles.detail,
					{ backgroundColor: colors.slideUpPanelBackground },
				]}
				animation="fadeInUpBig"
				useNativeDriver={false}
			>
				<View style={{ flex: 1 }}>
					<View style={styles.topRow}>
						<Text
							style={[
								styles.rowLeftText,
								{ color: colors.slideUpPanelLeftTextColor },
							]}
						>
							Expiration 19/12/2020
						</Text>
						<TouchableOpacity
							style={{
								borderColor: Colors.main,
								borderWidth: 1,
								padding: 8,
								borderRadius: 10,
								width: 100,
								alignItems: 'center',
							}}
						>
							<Text style={{ color: Colors.main }}>PAY LOAN</Text>
						</TouchableOpacity>
					</View>
					<View style={styles.rowDivider} />
					<View style={styles.row}>
						<Text
							style={[
								styles.rowLeftText,
								{ color: colors.slideUpPanelLeftTextColor },
							]}
						>
							Original amount
						</Text>
						<Text style={styles.rowRigthText}>8,090.70</Text>
					</View>
					<View style={styles.rowDivider} />
					<View style={styles.row}>
						<Text
							style={[
								styles.rowLeftText,
								{ color: colors.slideUpPanelLeftTextColor },
							]}
						>
							Current rate
						</Text>
						<Text style={styles.rowRigthText}>52.20%</Text>
					</View>
					<View style={styles.rowDivider} />
					<View style={styles.row}>
						<Text
							style={[
								styles.rowLeftText,
								{ color: colors.slideUpPanelLeftTextColor },
							]}
						>
							Pay off balance
						</Text>
						<Text style={styles.rowRigthText}>9,980.50</Text>
					</View>
					<View style={styles.rowDivider} />
					<View style={styles.row}>
						<Text
							style={[
								styles.rowLeftText,
								{ color: colors.slideUpPanelLeftTextColor },
							]}
						>
							Interest amount
						</Text>
						<Text style={styles.rowRigthText}>950.20</Text>
					</View>
					<View style={styles.rowDivider} />
					<View style={styles.row}>
						<Text
							style={[
								styles.rowLeftText,
								{ color: colors.slideUpPanelLeftTextColor },
							]}
						>
							Current payment
						</Text>
						<Text style={styles.rowRigthText}>12/9</Text>
					</View>
					<View style={styles.rowDivider} />
				</View>
			</Animatable.View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	detail: {
		flex: 1,
		backgroundColor: '#EBEFF2',
		marginTop: 30,
		borderTopRightRadius: 20,
		borderTopLeftRadius: 20,
	},
	topRow: {
		flexDirection: 'row',
		height: 70,
		alignItems: 'center',
		paddingHorizontal: 20,
	},
	row: {
		flexDirection: 'row',
		height: 60,
		alignItems: 'center',
		paddingHorizontal: 20,
	},
	rowLeftText: {
		flex: 1,
		color: Colors.lightWarmGray,
	},
	rowRigthText: {
		alignSelf: 'flex-end',
		paddingBottom: 7,
		fontSize: 16,
	},
	rowDivider: {
		borderWidth: 0.5,
		borderColor: Colors.mediumGray,
		opacity: 0.3,
	},
});
