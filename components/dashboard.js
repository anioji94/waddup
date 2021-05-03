import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Message from './message';

export default class Dashboard extends Component {
	render() {
		return(
			<View style={styles.container}>
				<View style={styles.main}>
					<View style={{
						padding: 20,
					}}>
						<Text style={styles.header}>
							Recent
						</Text>
						<Message />
					</View>
				</View>
			</View>
		)
	}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#fff",
		backgroundColor: "#009aff",
    padding: 20,
    margin: 10,
  },
  item: {
    flex: 0.2,
    backgroundColor: "#009aff",
		borderColor: 'white',
    borderWidth: 5,
    borderRadius: 20,
		padding: 20,
  },
  main: {
    flex: 1,
    backgroundColor: "#009aff",
		borderColor: 'white',
    borderWidth: 5,
		borderRadius: 20,
  },
  bottom: {
    flex: 0.3,
    backgroundColor: "pink",
    borderWidth: 5,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
	// Text styles
	header: {
		fontWeight: 'bold',
		fontSize: 30,
		color: 'white',
	},
	header2: {
		fontWeight: 'bold',
		fontSize: 20,
		color: 'white',
		padding: 20,
	},
});
