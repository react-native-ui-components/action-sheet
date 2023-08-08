import {type ActionSheetParameters} from "./types";

export const ActionSheet = {
	open: (_: ActionSheetParameters) => {
		throw new Error("Platform not supported by action sheet yet.");
	},
	close: () => {
		throw new Error("Platform not supported by action sheet yet.");
	}
};
