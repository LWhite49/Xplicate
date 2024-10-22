// Import hooks from React
import { useState, useContext } from "react";
import { AppContext } from "../App";
import { styles } from "../styles/configSequenceStyle";
// Import core components
import { Text, View } from "react-native";

// ConfigSequence will accept an index state and use a switch statement to render the corresponding configuration step
export const ConfigSequence = ({ index }) => {
	// Source from the AppContext
	const { saveStorage, dailyPrompts } = useContext(AppContext);

	switch (index) {
		// Unique - Welcome + Enter Name
		case 0:
			return (
				<View style={styles.initPage}>
					<View style={styles.initPageHeader}>
						<Text style={styles.textHeader}>
							Let's get started!
						</Text>{" "}
					</View>
					<Text style={styles.textSecondary}>
						Enter your name below:
					</Text>
				</View>
			);
		// Reusable Component - Physical
		case 1:
			return (
				<Text style={styles.textHeader}>
					Physical - {dailyPrompts.physical[0]}
				</Text>
			);
		// Reusable Component - Mental
		case 2:
			return (
				<Text style={styles.textHeader}>
					Mental - {dailyPrompts.mental[0]}
				</Text>
			);
		// Reusable Component - Social
		case 3:
			return (
				<Text style={styles.textHeader}>
					Social - {dailyPrompts.social[0]}
				</Text>
			);
		// Reusable Component - Recreational
		case 4:
			return (
				<Text style={styles.textHeader}>
					Recreation - {dailyPrompts.recreation[0]}
				</Text>
			);
		// Reusable Component - Ideological
		case 5:
			return (
				<Text style={styles.textHeader}>
					Ideology - {dailyPrompts.ideology[0]}
				</Text>
			);
		// Unique - Add Hobbies
		case 6:
			return <Text style={styles.textHeader}>Enter Hobbies</Text>;
		// Unique - Finish
		case 7:
			return <Text style={styles.textHeader}>All Done!</Text>;
	}
};
