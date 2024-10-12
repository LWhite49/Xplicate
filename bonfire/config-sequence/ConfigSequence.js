// Import hooks from React
import { useState, useContext } from "react";
import { AppContext } from "../App";

// Import core components
import { Text } from "react-native";

// ConfigSequence will accept an index state and use a switch statement to render the corresponding configuration step
export const ConfigSequence = ({ index }) => {
	// Source from the AppContext
	const { saveStorage, dailyPrompts } = useContext(AppContext);

	switch (index) {
		// Unique - Welcome + Enter Name
		case 0:
			return <Text>Enter Name</Text>;
		// Reusable Component - Physical
		case 1:
			return <Text>Physical - {dailyPrompts.physical[0]}</Text>;
		// Reusable Component - Mental
		case 2:
			return <Text>Mental - {dailyPrompts.mental[0]}</Text>;
		// Reusable Component - Social
		case 3:
			return <Text>Social - {dailyPrompts.social[0]}</Text>;
		// Reusable Component - Recreational
		case 4:
			return <Text>Recreation - {dailyPrompts.recreation[0]}</Text>;
		// Reusable Component - Ideological
		case 5:
			return <Text>Ideology - {dailyPrompts.ideology[0]}</Text>;
		// Unique - Add Hobbies
		case 6:
			return <Text>Enter Hobbies</Text>;
		// Unique - Finish
		case 7:
			return <Text>All Done!</Text>;
	}
};
