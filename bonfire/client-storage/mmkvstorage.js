import { MMKV } from "react-native-mmkv";
const storage = new MMKV();

/* Setting Format for MMKV:

*/

// Function to set a value in storage
const saveStorage = async (key, value) => {
	try {
		storage.set(key, JSON.stringify(value));
	} catch (error) {
		console.error($`Trouble saving ${key} to storage: ${error}`);
	}
};

// Function to get a value from storage
const loadStorage = async (key) => {
	try {
		if (!storage.hasKey(key)) {
			console.error($`No value found for ${key} in storage`);
			return null;
		}
		return JSON.parse(storage.getString(key));
	} catch (error) {
		console.error($`Trouble loading ${key} from storage: ${error}`);
	}
};

// Function to clear storage, used before reinitializing user settings
const clearStorage = async () => {
	try {
		storage.clear();
	} catch (error) {
		console.error($`Trouble clearing storage: ${error}`);
	}
};

export { saveStorage, loadStorage, clearStorage };
