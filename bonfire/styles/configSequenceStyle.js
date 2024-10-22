import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	initPage: {
		display: "flex",
		flexDirection: "column",
		backgroundColor: "#281C05",
		alignItems: "center",
	},
	initPageHeader: {
		backgroundColor: "#0E0906",
		width: "100vw",
		borderBottomColor: "#494134",
		borderBottomStyle: "ridge",
		borderBottomWidth: 1,
	},
	textHeader: {
		color: "#FFEFE1",
		fontSize: 28,
		textAlign: "center",
		fontWeight: "bold",
		fontFamily: "Roboto",
		marginTop: 16,
		marginBottom: 10,
		textShadowColor: "#0E0906",
		textShadowOffset: { width: 1, height: 1 },
		textShadowRadius: 1,
	},
	textSecondary: {
		fontSize: 20,
		marginTop: 28,
	},
	textThird: {
		fontSize: 22,
		marginTop: 20,
		marginBottom: 36,
		width: 280,
	},
	textEmph: {
		color: "#FF0000",
	},
	textInput: {
		height: 40,
		width: 240,

		borderColor: "#0E0906",
		borderWidth: 2,
		borderStyle: "solid",
		padding: "8px",
		margin: "16px",
		backgroundColor: "#f2f2f2",
		color: "#332200",
		borderRadius: "5px",
		focusColor: "#F4AC39",
		fontSize: 16,
		fontFamily: "Roboto",
	},
	textInputFocus: {
		borderColor: "#F4AC39",
	},
});
