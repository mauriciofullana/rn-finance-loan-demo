import React, { FunctionComponent, useState } from 'react';
import {
	StyleSheet,
	Text,
	View,
	Image,
	ScrollView,
	TouchableOpacity,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { FloatingLabelInput } from 'react-native-floating-label-input';

import { Colors } from '../styles';
import { AuthContext, IAuthContext } from '../context/AuthContext';

const SignInScreen: FunctionComponent = () => {
	const { signIn } = React.useContext<IAuthContext>(AuthContext);
	const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');

	const handleLogin = () => {
		signIn({ userName, password });
	};

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
				<FloatingLabelInput
					currencyDivider="."
					label="Username"
					value={userName}
					blurOnSubmit={false}
					maxLength={20}
					onChangeText={(value) => setUserName(value)}
				/>
				<FloatingLabelInput
					currencyDivider="."
					label="Password"
					value={password}
					blurOnSubmit={false}
					maxLength={20}
					isPassword={true}
					showPasswordImageStyles={{ tintColor: Colors.lightWarmGray }}
					onChangeText={(value) => setPassword(value)}
				/>
				<View style={styles.formActions}>
					<TouchableOpacity style={{ flex: 1 }} onPress={() => {}}>
						<Text style={styles.formActionsText}>Forgot Password?</Text>
					</TouchableOpacity>
					<TouchableOpacity style={styles.formLoginIcon} onPress={handleLogin}>
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
		paddingHorizontal: 20,
		backgroundColor: '#fff',
	},
	logoImgContainer: {
		flex: 0.5,
		paddingBottom: 10,
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
		borderRadius: 80,
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
