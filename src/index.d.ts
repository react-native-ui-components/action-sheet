import {FunctionComponent} from "react";

export interface ActionSheetAction {
	title: string;
	cancel?: boolean;
	destructive?: boolean;
	disabled?: boolean;
	onPress?: () => void;
}

export interface ActionSheetParameters {
	title?: string;
	message?: string;
	actions: ActionSheetAction[];
	tintColor?: string;
	cancelButtonTintColor?: string;
	anchor?: number;
	userInterfaceStyle?: string;
}

export declare const ActionSheet: (
	params: ActionSheetParameters
) => void;
