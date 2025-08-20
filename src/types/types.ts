import type { ReactElement } from "react";

type HeaderButtonProps = {
	link: string;
	internal?: boolean;
	icon?: ReactElement;
}

type NavigateButtonProps = {
	link: string;
	text?: string;
	sizeX?: number;
	sizeY?: number;
	isDark?: boolean;
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
	isDark?: boolean;
}

type BannerProps = {
	title: string;
	stackArr: 'languages' | 'frameworks' | 'testing' | 'databases' | 'tools';
}

type MediumButtonProps = {
	url: string;
	text: string;
}

type ProjectProps = {
	projectName: string;
	link: string;
	image?: string;
	stack?: string;
	isHero?: boolean;
}

type ProjectCardProps = {
	image?: string;
	text?: string;
}

export type { ProjectProps, ProjectCardProps, MediumButtonProps, BannerProps, HeaderButtonProps, HeaderProps, ImageProps, NavigateButtonProps, DarkProps };