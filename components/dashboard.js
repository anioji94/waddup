import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Dashboard extends Component {
	render() {
		return(
			<View style={styles.container}>
				<View style={styles.main}>
					<View style={{
						padding: 20,
					}}>
						<Text style={{
							fontWeight: 'bold',
							fontSize: 30,
						}}>
							Recent
						</Text>
						<View style={styles.item}></View>
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
    padding: 20,
    margin: 10,
  },
  item: {
    flex: 0.2,
    backgroundColor: "grey",
    borderWidth: 5,
    borderRadius: 20,
		padding: 20,
  },
  main: {
    flex: 1,
    backgroundColor: "beige",
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
});
