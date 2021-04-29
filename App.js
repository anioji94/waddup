import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Dashboard from './components/dashboard.js';
import Swiper from 'react-native-swiper'
import randomcolor from 'randomcolor'

// const {
// 	// View,
// 	Text,
// 	StyleSheet
// } = React


class TitleText extends React.Component {
  render() {
    return (
      <Text style={{ fontSize: 48, color: 'white' }}>
        {this.props.label}
      </Text>
    )
  }
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
			<Swiper
				loop={false}
				showsPagination={true}
				index={1}>
				{/* <View style={this.viewStyle()}>
					<TitleText label="Waddup" />
				</View> */}
				<Dashboard />
				{/* <Swiper
					horizontal={false}
					loop={false}
					showsPagination={false}
					index={1}>
					<View style={this.viewStyle()}>
						<TitleText label="Top" />
					</View>
					<View style={this.viewStyle()}>
						<TitleText label="Home" />
					</View>
					<View style={this.viewStyle()}>
						<TitleText label="Bottom" />
					</View>
				</Swiper> */}
				<View style={this.viewStyle()}>
					<TitleText label="Buds" /> 
				</View>
			</Swiper>

			
		)
	}
}



export default Home