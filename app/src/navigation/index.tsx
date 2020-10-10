import React, { FunctionComponent } from 'react';
import { NavigationContainer, Theme } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import RootStackNavigator from './RootStackNavigator';
import { PublicDrawerContent } from '../navigation/PublicDrawerContent';
import { PrivateDrawerContent } from '../navigation/PrivateDrawerContent';
import { AuthContext } from '../context/AuthContext';
import HomeStackNavigator from './HomeStackNavigator';
import NewsStackNavigator from './NewsStackNavigator';
import FindUsStackNavigator from './FindUsStackNavigator';
import BenefitsStackNavigator from './BenefitsStackNavigator';
import ContactUsStackNavigator from './ContactUsStackNavigator';
import LinksOfInterestStackNavigator from './LinksOfInterestStackNavigator';
import TermsAndConditionsStackNavigator from './TermsAndConditionsStackNavigator';
import FaqStackNavigator from './FaqStackNavigator';


const PublicDrawer = createDrawerNavigator();
const PrivateDrawer = createDrawerNavigator();

interface NavigatorProps {
	theme: Theme;
}

const Navigator: FunctionComponent<NavigatorProps> = ({ theme }) => {
	const { userToken } = React.useContext(AuthContext);

	return (
		<NavigationContainer theme={theme}>
			{userToken != null ? (
				<PrivateDrawer.Navigator
				drawerContentOptions={{ activeBackgroundColor: '#5cbbff', activeTintColor: '#ffffff' }} drawerContent={(props) => <PrivateDrawerContent {...props} />}
				>
					<PrivateDrawer.Screen name="Home" component={HomeStackNavigator} />
					<PrivateDrawer.Screen name="News" component={NewsStackNavigator} />
					<PrivateDrawer.Screen name="FindUs" component={FindUsStackNavigator} />
					<PrivateDrawer.Screen name="Benefits" component={BenefitsStackNavigator} />
					<PrivateDrawer.Screen name="ContactUs" component={ContactUsStackNavigator} />
					<PrivateDrawer.Screen name="LinksOfInterest" component={LinksOfInterestStackNavigator} />
					<PrivateDrawer.Screen name="TermsAndConditions" component={TermsAndConditionsStackNavigator} />
					<PrivateDrawer.Screen name="Faq" component={FaqStackNavigator} />
				</PrivateDrawer.Navigator>
			) : (
				<PublicDrawer.Navigator
				drawerContentOptions={{ activeBackgroundColor: '#5cbbff', activeTintColor: '#ffffff' }}	drawerContent={(props) => <PublicDrawerContent {...props} />}
				>
					<PublicDrawer.Screen name="Login" component={RootStackNavigator} />
					<PublicDrawer.Screen name="News" component={NewsStackNavigator} />
					<PublicDrawer.Screen name="FindUs" component={FindUsStackNavigator} />
					<PublicDrawer.Screen name="Benefits" component={BenefitsStackNavigator} />
					<PublicDrawer.Screen name="ContactUs" component={ContactUsStackNavigator} />
					<PublicDrawer.Screen name="LinksOfInterest" component={LinksOfInterestStackNavigator} />
					<PublicDrawer.Screen name="TermsAndConditions" component={TermsAndConditionsStackNavigator} />
					<PublicDrawer.Screen name="Faq" component={FaqStackNavigator} />
				</PublicDrawer.Navigator>
			)}
		</NavigationContainer>
	);
};

export default Navigator;
