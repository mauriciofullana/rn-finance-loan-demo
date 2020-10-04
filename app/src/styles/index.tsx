import * as Colors from './colors';
import * as Spacing from './spacing';
import * as Typography from './typography';
import * as Buttons from './buttons';

export { Typography, Spacing, Colors, Buttons };

// globalStyles.js
import { setGlobalStyles } from 'react-native-floating-label-input';

setGlobalStyles.containerStyles = {
	borderWidth: 0,
	borderBottomWidth: 0.5,
	borderRadius: 0,
	borderColor: Colors.mediumGray,
	marginBottom: 12,
};
setGlobalStyles.labelStyles = {
	color: Colors.mediumGray,
};
setGlobalStyles.inputStyles = {
	marginTop: 2,
	marginBottom: -2,
	color: Colors.loginText,
};
