import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Dashboard from './components/dashboard.js';

export default function App() {
  return (
    <View style={styles.container}>
			<Dashboard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
