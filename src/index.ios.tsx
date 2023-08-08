import {ActionSheetIOS} from "react-native";
import {type ActionSheetParameters} from "./types";

export const ActionSheet = {
	open: ({
		title,
		message,
		actions,
		tintColor,
		cancelButtonTintColor,
		anchor,
		userInterfaceStyle
	}: ActionSheetParameters) => {
		const options = actions.map(obj => obj.title);
		const cancelButtonIndex = actions.findIndex(obj => obj.cancel);
		const destructiveButtonIndex = actions.findIndex(
			obj => obj.destructive
		);
		const disabledButtonIndices = actions
			.map((_, i) => i)
			.filter(i => actions?.[i]?.disabled);
		const onPress = (index: number) => actions?.[index]?.onPress?.();

		ActionSheetIOS.showActionSheetWithOptions(
			{
				title,
				message,
				tintColor,
				cancelButtonTintColor,
				anchor,
				userInterfaceStyle,
				options,
				cancelButtonIndex,
				destructiveButtonIndex,
				disabledButtonIndices
			},
			onPress
		);
	},
	close: (ActionSheetIOS as unknown as any).dismissActionSheet as () => void
};
