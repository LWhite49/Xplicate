// Import hooks from React
import { createContext } from "react";

// Import pages for individual screens
import { Home } from "./pages/Home";
import { Init } from "./pages/Init";

// Import SQLite for local databasing to store jounral entries
import * as SQLite from "expo-sqlite";

// Import navigation components to move between screens
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();
// Import custom storage methods utilizing MMKV to manage user configuration
import {
	saveStorage,
	loadStorage,
	clearStorage,
	storageHasKey,
	printStorage,
} from "./client-storage/mmkvstorage.js";

// Create and export context for App
export const AppContext = createContext();
export default function App() {
	// Flag used to choose the first screen to display, based on stored initialization data
	const startScreenFlag = storageHasKey("ideology");
	return (
		<AppContext.Provider
			value={{
				saveStorage,
				loadStorage,
			}}>
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName={startScreenFlag ? "Home" : "Init"}
					screenOptions={{ headerShown: false }}>
					<Stack.Screen name="Init" component={Init} />
					<Stack.Screen name="Home" component={Home} />
				</Stack.Navigator>
			</NavigationContainer>
		</AppContext.Provider>
	);
}
