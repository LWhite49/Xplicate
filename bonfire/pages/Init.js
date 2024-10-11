// Import core components to build the app
import { StyleSheet, Text, View } from "react-native";

export const Init = () => {
	return (
		<View style={styles.container}>
			<Text>Initialize Bonfire!</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
