import React, { FunctionComponent, useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	ScrollView,
	TouchableOpacity,
} from 'react-native';
import { AntDesign, Feather, Ionicons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

import FloatingTitleTextInput from '../components/FloatingTitleTextInput';
import { Colors } from '../styles';

const SignInScreen: FunctionComponent = () => {
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');

	return (
		<ScrollView
			style={styles.container}
			contentContainerStyle={{ flexGrow: 1 }}
		>
			<View style={styles.logoImgContainer}>
				<Image
					style={styles.logoImg}
					source={require('../../assets/bklyLogo.png')}
				/>
			</View>
			<View style={styles.formContainer}>
				<Text style={styles.formTitle}>Sign In</Text>
				<FloatingTitleTextInput
					value={userName}
					onChangeValue={setUserName}
					placeHolderText="User Name"
					errorMessage={''}
				>
					{userName.length > 0 ? (
						<Animatable.View animation="bounceIn">
							<Feather
								style={styles.inputIcon}
								name="check-circle"
								color={Colors.green}
								size={19}
							/>
						</Animatable.View>
					) : null}
				</FloatingTitleTextInput>
				<FloatingTitleTextInput
					value={password}
					onChangeValue={setPassword}
					placeHolderText="Password"
					errorMessage={''}
					secureTextEntry={true}
				>
					<TouchableOpacity onPress={() => {}}>
						<Ionicons
							style={styles.inputIcon}
							name="md-eye"
							color={Colors.lightWarmGray}
							size={20}
						/>
					</TouchableOpacity>
				</FloatingTitleTextInput>
				<View style={styles.formActions}>
					<TouchableOpacity style={{ flex: 1 }} onPress={() => {}}>
						<Text style={styles.formActionsText}>Forgot Password?</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.formLoginIcon} onPress={() => {}}>
						<AntDesign name="arrowright" size={22} color="white" />
					</TouchableOpacity>
				</View>
				<View style={styles.footerContainer}>
					<Text style={styles.footerText}>Don't have an account?</Text>
					<Text style={styles.footerActionText}>SIGN UP</Text>
				</View>
			</View>
		</ScrollView>
	);
};

export default SignInScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 25,
	},
	logoImgContainer: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	logoImg: {
		width: '60%',
		height: undefined,
		aspectRatio: 459 / 110,
	},
	formContainer: {
		flex: 1,
	},
	formTitle: {
		fontSize: 28,
		color: Colors.lightWarmGray,
		marginBottom: 40,
	},
	formActions: {
		flexDirection: 'row',
		marginTop: 25,
		height: 50,
		alignItems: 'center',
	},
	formActionsText: {
		color: Colors.baseText,
	},
	formLoginIcon: {
		backgroundColor: Colors.main,
		padding: 15,
		borderRadius: 25,
	},
	footerContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	inputIcon: {
		padding: 5,
	},
	footerText: {
		color: Colors.baseText,
		marginRight: 5,
	},
	footerActionText: {
		color: Colors.main,
		fontWeight: 'bold',
	},
});
