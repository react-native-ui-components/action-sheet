import * as React from "react";

import {StyleSheet, View, Text, TouchableOpacity} from "react-native";
import {ActionSheet} from "@react-native-ui-components/action-sheet";

export default function App() {
	return (
		<View style={styles.container}>
			<TouchableOpacity
				onPress={() =>
					ActionSheet.open({
						actions: [{title: "Hi"}]
					})
				}
			>
				<Text>Click me</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center"
	},
	box: {
		width: 60,
		height: 60,
		marginVertical: 20
	}
});
