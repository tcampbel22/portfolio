import React from "react";
import type { DarkProps } from "../types/types";
import { HeaderCenterLarge } from "./HeaderText";
import { BackButton } from "./Utils";

export const NotFound:React.FC<DarkProps> = ({ isDark }) => {
	return (
		<div className="flex flex-col gap-y-10 items-center justify-center text-2xl">
			<BackButton link="/" isDark={isDark}/>
			<HeaderCenterLarge text="404"/>
			<p>Page not found...</p>
			<BackButton link="/" isDark={isDark}/>
		</div>
	)
}