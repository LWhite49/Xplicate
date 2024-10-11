// Import hooks from React
import { useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { AppContext } from "../App";
// Import core components to build the app
import { Text, View, TouchableOpacity } from "react-native";

// Import styles for the Init page
import { styles } from "../styles/initStyle";

// Init page will have a series of components that establish the user's configuration
// There will be an increment button, who, on the final increment, will navigate to the Home page
export const Init = () => {
	// Source from the AppContext
	const { saveStorage } = useContext(AppContext);

	// Create navigator with useNavigation hook
	const navigation = useNavigation();

	// Store total number of components needed to initialize the app
	const initComponentCount = 6;

	// Create state to index the current component being displayed
	const [initComponentIndex, setInitComponentIndex] = useState(0);

	// Create onPress function to increment the index, navigating to Home when == initComponentCount
	const incrementInitComponentIndex = () => {
		setInitComponentIndex((prev) => {
			const next = prev + 1;
			if (next === initComponentCount) {
				navigation.navigate("Home");
			}
			return next;
		});
	};

	return (
		<View style={styles.init}>
			<TouchableOpacity
				style={styles.initNext}
				onPress={incrementInitComponentIndex}>
				<Text style={styles.initNextText}>Next</Text>
			</TouchableOpacity>
		</View>
	);
};
