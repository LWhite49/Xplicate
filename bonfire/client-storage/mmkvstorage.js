import { MMKV } from "react-native-mmkv";
const storage = new MMKV();

/* Setting Format for MMKV:

*/

// Function to set a value in storage
const saveStorage = (key, value) => {
	try {
		storage.set(key, JSON.stringify(value));
	} catch (error) {
		console.error(`Trouble saving ${key} to storage: ${error}`);
	}
};

// Function to get a value from storage
const loadStorage = (key) => {
	try {
		if (!storage.contains(key)) {
			console.error($`No value found for ${key} in storage`);
			return null;
		}
		return JSON.parse(storage.getString(key));
	} catch (error) {
		console.error(`Trouble loading ${key} from storage: ${error}`);
	}
};

// Function to check if a key exists in storage
const storageHasKey = (key) => {
	try {
		const v = storage.contains(key);
		return v;
	} catch (error) {
		console.error(`Trouble checking for ${key} in storage:`, error);
	}
};

// Function to clear storage, used before reinitializing user settings
const clearStorage = (key) => {
	try {
		storage.delete(key);
	} catch (error) {
		console.error("Trouble clearing storage:", error);
	}
};

// Function to print all key-value pairs in storage
const printStorage = () => {
	try {
		console.log("Keys in storage:", storage.getAllKeys());
	} catch (error) {
		console.error("Trouble printing storage:", error);
	}
};

export { saveStorage, loadStorage, storageHasKey, clearStorage, printStorage };
