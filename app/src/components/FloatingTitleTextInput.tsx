import React, { FunctionComponent, useState, ReactNode } from 'react';
import {
	View,
	Animated,
	StyleSheet,
	TextInput,
	TouchableOpacity,
} from 'react-native';
import { FontAwesome, Feather } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

import { Colors } from '../styles';
import {
	inputText,
	baseFontSize,
	smallestFontSize,
	inputErrorText,
} from '../styles/typography';

interface IFloatingTitleTextInputProps {
	value?: string;
	onChangeValue(text: string): void;
	placeHolderText: string;
	iconName?: string;
	children?: ReactNode;
	secureTextEntry?: boolean;
	errorMessage?: string;
	onEndEditingFunction?: () => void;
}

const FloatingTitleTextInput: FunctionComponent<IFloatingTitleTextInputProps> = ({
	value,
	onChangeValue,
	placeHolderText,
	iconName,
	secureTextEntry = false,
	children,
	errorMessage,
	onEndEditingFunction,
}) => {
	const position = new Animated.Value(value ? 1 : 0);
	const [isFieldActive, setIsFieldActive] = useState(false);

	const handleFocus = () => {
		if (!isFieldActive) {
			setIsFieldActive(true);
			Animated.timing(position, {
				toValue: 1,
				duration: 350,
				useNativeDriver: false,
			}).start();
		}
	};

	const handleBlur = () => {
		if (isFieldActive && !value) {
			setIsFieldActive(true);
			Animated.timing(position, {
				toValue: 0,
				duration: 350,
				useNativeDriver: false,
			}).start();
		}
	};

	const animatedStyles = () => {
		const topPosition = position.interpolate({
			inputRange: [0, 1],
			outputRange: [18, -3],
		});

		const size = position.interpolate({
			inputRange: [0, 1],
			outputRange: [baseFontSize, smallestFontSize],
		});

		return {
			top: topPosition,
			fontSize: size,
		};
	};

	const hasError = () => errorMessage !== '';

	return (
		<View style={styles.container}>
			<View
				style={[
					styles.inputContainer,
					hasError() ? styles.inputContainerError : null,
				]}
			>
				{iconName && (
					<FontAwesome
						style={styles.inputIcon}
						name={iconName}
						color={Colors.lightGray}
						size={20}
					/>
				)}
				<Animated.Text style={[styles.titleStyles, animatedStyles()]}>
					{placeHolderText}
				</Animated.Text>
				<TextInput
					style={styles.inputBox}
					value={value}
					onChangeText={onChangeValue}
					onFocus={handleFocus}
					onBlur={handleBlur}
					placeholderTextColor={Colors.darkGray}
					autoCapitalize="none"
					secureTextEntry={secureTextEntry}
					onEndEditing={onEndEditingFunction}
				/>
				{children}
			</View>
			{hasError() && (
				<Animatable.Text
					style={styles.errorMessageText}
					animation="fadeInLeft"
					duration={500}
				>
					{errorMessage}
				</Animatable.Text>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginBottom: 12,
	},
	inputContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		borderBottomColor: Colors.mediumGray,
		borderBottomWidth: 0.4,
		marginBottom: 7,
		height: 50,
	},
	inputContainerError: {
		borderBottomColor: Colors.lightRed,
	},
	inputBox: {
		...inputText,
		flex: 1,
		paddingTop: 10,
		paddingRight: 10,
		paddingBottom: 5,
		paddingLeft: 5,
	},
	inputIcon: {
		padding: 5,
	},
	titleStyles: {
		color: Colors.mediumGray,
		fontSize: baseFontSize,
		position: 'absolute',
		left: 5,
	},
	clearIcon: {
		color: Colors.mediumGray,
		padding: 5,
	},
	errorMessageText: {
		...inputErrorText,
	},
});

export default FloatingTitleTextInput;
