import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	initPage: {
		display: "flex",
		flexDirection: "column",
		backgroundColor: "#4C3507",
		alignItems: "center",
	},
	initPageHeader: {
		backgroundColor: "#281C05",
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
		fontFamily: "Arial",
		marginTop: 16,
		marginBottom: 10,
		textShadowColor: "#F4AC39",
		textShadowOffset: { width: 1, height: 1 },
		textShadowRadius: 1,
	},
	textSecondary: {
		color: "#FFEFE1",
		fontSize: 20,
		fontWeight: "bold",
		fontFamily: "Arial",
		marginTop: 20,
		marginBottom: 10,
		textShadowColor: "#F4AC39",
		textShadowOffset: { width: 1, height: 1 },
		textShadowRadius: 1,
	},
});
