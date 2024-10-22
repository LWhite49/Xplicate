// Import core components to build the app
import { StyleSheet, Text, View } from "react-native";
import { AppContext } from "../App";
import { useContext } from "react";

import { styles } from "../styles/homeStyle";
export const Home = () => {
	const { loadStorage, username } = useContext(AppContext);

	return (
		<View style={styles.container}>
			<Text>Nice to see you {username}!</Text>
		</View>
	);
};
