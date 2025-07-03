import type { ReactElement } from "react";

type HeaderButtonProps = {
	link: string;
	internal?: boolean;
	icon: ReactElement;
}

type NavigateButtonProps = {
	link: string;
	text: string;
	sizeX?: number;
	sizeY?: number;
}

type ImageProps = {
	src: string;
	title: string;
	alt: string;
}

type HeaderProps = {
	text: string;
}

type DarkProps = {
	isDark: boolean;
}

type BannerProps = {
	title: string;
	stackArr: 'languages' | 'frameworks' | 'testing' | 'databases' | 'tools';
}
export type { BannerProps, HeaderButtonProps, HeaderProps, ImageProps, NavigateButtonProps, DarkProps };