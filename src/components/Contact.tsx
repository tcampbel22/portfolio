import React from "react";
import { HeaderCenter, HeaderMini } from "./HeaderText";
import { EnvelopeIcon } from "@phosphor-icons/react"
import type { DarkProps } from "../types/types";
import { NavigateButton } from "./Utils";

export const Contact:React.FC<DarkProps> = ({ isDark }) => {
	return (
		<div className="pt-5 md:py-8">
			<HeaderCenter text="Contact" />
			<div className="flex flex-col items-center pt-6 md:pt-0">
				<div className="flex flex-col items-center">
					<p className="text-md md:text-lg dark:text-gray-100 text-center px-4 mt-5 md:pt-0 md:text-left max-w-3xl">
						If you want to reach out regarding recruitment feel free to check out my resume below.
					</p>
					<div className="flex justify-center items-center md:my-15 my-10">
						<NavigateButton link="/resume" text="Read CV"/>
					</div>
				
					<p className="text-md md:text-lg dark:text-gray-100 text-center px-4 my-5 md:pt-0 md:text-left max-w-3xl">
						For anything else just drop me an email.
					</p>	
					<div className="flex flex-col md:flex-row justify-center items-center md:space-x-8 pt-2">
						<EnvelopeIcon size={64} color={isDark ? '#f6f5f4' : '#000000'}/>
						<HeaderMini text="mail@timcampbell.xyz"/>
					</div>
				</div>
			</div>
		</div>
	);
}