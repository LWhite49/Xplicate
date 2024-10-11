// Import core components to build the app
import { StyleSheet, Text, View } from "react-native";

export const Home = () => {
	return (
		<View style={styles.container}>
			<Text>Bonfire! Reflective rest each night.</Text>
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
