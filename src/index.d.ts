import {FunctionComponent} from "react";

export interface ActionSheetAction {
	title: string;
	cancel?: boolean;
	destructive?: boolean;
	disabled?: boolean;
	onPress?: () => void;
}

export interface ActionSheetProps {
	title?: string;
	message?: string;
	actions: ActionSheetAction[];
	tintColor?: string;
	cancelButtonTintColor?: string;
	anchor: number;
	userInterfaceStyle: string;
}

export declare const ActionSheet: (
	props: ActionSheetProps
) => FunctionComponent<ActionSheetProps>;
