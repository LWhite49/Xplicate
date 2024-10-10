import { StyleSheet, Text, View } from "react-native";
import * as SQLite from "expo-sqlite";

// Import methods for interacting with storage
import {
	saveStorage,
	loadStorage,
	clearStorage,
} from "./client-storage/mmkvstorage.js";

export default function App() {
	return (
		<View style={styles.container}>
			<Text>Bonfire! Reflective rest each night.</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
