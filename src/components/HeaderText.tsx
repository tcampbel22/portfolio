import React from "react";
import type { HeaderProps } from "../types/types";

export const HeaderTitle:React.FC<HeaderProps> = ({ text }) => {
	return (
		<h1 className="dark:text-gray-100 font-bold text-xl md:text-3xl text-center md:text-left pb-4 md:pb-0">{text}</h1>
	)
};

export const HeaderSmall:React.FC<HeaderProps> = ({ text }) => {
	return (
		<h1 className="dark:text-gray-100 font-bold text-xl md:text-2xl text-center md:text-left pb-4">{text}</h1>
	)
};

export const HeaderCenter:React.FC<HeaderProps> = ({ text }) => {
	return (
		<h1 className="dark:text-gray-100 font-bold text-xl md:text-3xl text-center pb-4">{text}</h1>
	)
};

export const HeaderSub:React.FC<HeaderProps> = ({ text }) => {
	return (
		<h2 className="dark:text-gray-100 text-center md:text-left text-lg md:text-2xl font-bold py-4 my-4">{text}</h2>
	)
};

export const HeaderMini:React.FC<HeaderProps> = ({ text }) => {
	return (
		<h3 className="text-gray-700 dark:text-gray-100 text-center md:text-left text-md md:text-xl font-bold">{text}</h3>
	)
};