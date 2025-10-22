import React from "react";
import { HeaderCenter, HeaderMini } from "./HeaderText";
import { PhoneIcon, EnvelopeIcon, PaperPlaneTiltIcon } from "@phosphor-icons/react"
import type { DarkProps } from "../types/types";
import { NavigateButton } from "./Utils";

export const Contact:React.FC<DarkProps> = ({ isDark }) => {
	return (
		<div className="pt-5 md:py-8">
			<HeaderCenter text="Contact" />
			<div className="flex flex-col md:flex-row items-center md:justify-between pt-6 md:pt-0">
				<div className="flex flex-col">
					<div className="flex justify-start items-center space-x-8 py-2">
						<PhoneIcon size={64} color={isDark ? '#f6f5f4' : '#000000'}/>
						<HeaderMini text="+358 45 78769676"/>
					</div>
					<div className="flex justify-start items-center space-x-8 py-2">
						<EnvelopeIcon size={64} color={isDark ? '#f6f5f4' : '#000000'}/>
						<HeaderMini text="mail@timcampbell.xyz"/>
					</div>
					<div className="flex justify-start items-center space-x-8 py-2">
						<PaperPlaneTiltIcon size={64} alt="Telegram" color={isDark ? '#f6f5f4' : '#000000'}/>
						<HeaderMini text="@tcampbel22"/>
					</div>
				</div>
				<div className="flex flex-col items-end">
					<p className="text-md md:text-lg dark:text-gray-100 text-center px-4 mt-5 md:pt-0 md:text-left max-w-3xl">If you want to reach out regarding recruitment I'm currently looking for full-stack,
						backend and frontend positions or anything web related. Feel free to check out my resume below.
						<br/>
						<br/>
						For anything else just drop me a text or send me an email.
					</p>
			
				</div>
			</div>
			<div className="flex justify-center items-center md:mt-6 mt-10">
				<NavigateButton link="/resume" text="Read CV"/>
			</div>
		</div>
	);
}