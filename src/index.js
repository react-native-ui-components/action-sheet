import {Platform, ActionSheetIOS} from "react-native";

export const ActionSheet = Platform.select({
	ios: {
		open: ({
			title,
			message,
			actions,
			tintColor,
			cancelButtonTintColor,
			anchor,
			userInterfaceStyle
		}) => {
			const options = actions.map(obj => obj.title);
			const cancelButtonIndex = actions.findIndex(obj => obj.cancel);
			const destructiveButtonIndex = actions.findIndex(
				obj => obj.destructive
			);
			const disabledButtonIndices = actions
				.map((_, i) => i)
				.filter(i => actions[i].disabled);
			const onPress = index => actions[index].onPress?.();

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
		close: ActionSheetIOS.dismissActionSheet
	},
	default: () => {
		throw new Error("Platform not supported by action sheet yet.");
	}
});
