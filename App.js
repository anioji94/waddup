import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Dashboard from './components/dashboard.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Swiper from 'react-native-swiper'
import randomcolor from 'randomcolor'

// const {
// 	// View,
// 	Text,
// 	StyleSheet
// } = React


const Stack = createStackNavigator();

const HomeScreen = () => {
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Home</Text>
		</View>
	);
}

class Home extends React.Component {

	viewStyle() {
		return {
			flex: 1,
			backgroundColor: randomcolor(),
			justifyContent: 'center',
			alignItems: 'center',
		}
	}

	render() {
		return (
			<NavigationContainer>
				<Stack.Navigator initialRouteName="DetailsScreen">
					<Stack.Screen name="Home" component={Dashboard} />
					{/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
				</Stack.Navigator>
			</NavigationContainer>

			
		)
	}
}



export default Home