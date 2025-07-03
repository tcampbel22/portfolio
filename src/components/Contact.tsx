import React from "react";
import { HeaderCenter, HeaderMini } from "./HeaderText";
import { Link } from "react-router-dom";
import { Phone, Envelope, PaperPlaneTilt } from "@phosphor-icons/react"
import type { DarkProps } from "../types/types";

export const Contact:React.FC<DarkProps> = ({ isDark }) => {
	return (
		<div className="py-8">
			<HeaderCenter text="Contact" />
			<div className="flex flex-col md:flex-row items-center md:justify-between">
				<div className="flex flex-col">
					<div className="flex justify-start items-center space-x-8 py-2">
						<Phone size={64} color={isDark ? '#f6f5f4' : '#000000'}/>
						<HeaderMini text="+358 45 78769676"/>
					</div>
					<div className="flex justify-start items-center space-x-8 py-2">
						<Envelope size={64} color={isDark ? '#f6f5f4' : '#000000'}/>
						<HeaderMini text="tcampbel22@gmail.com"/>
					</div>
					<div className="flex justify-start items-center space-x-8 py-2">
						<PaperPlaneTilt size={64} alt="Telegram" color={isDark ? '#f6f5f4' : '#000000'}/>
						<HeaderMini text="@tcampbel22"/>
					</div>
				</div>
				<div className="flex flex-col items-end">
					<p className="text-md md:text-lg dark:text-gray-100 text-center px-4 mt-5 md:pt-0 md:text-left max-w-3xl">If you want to reach out regarding recruitment I'm currently looking for full-stack,
						 backend and frontend positions or anything web related. Feel free to check out my resume below.
						<p className="text-md md:text-lg dark:text-gray-100  max-w-3xl py-10"> For anything else just drop me a text or send me an email.</p>
					</p>
				</div>
			</div>
			<div className="flex justify-center items-center pt-8">
				<Link 
					to={'/resume'}
					className={`px-10 dark:text-white mt-5 border-2 dark:bg-gray-900 dark:hover:bg-gray-600 flex justify-center items-center space-x-8 transform transition-all duration-300 hover:scale-105 relative hover-shadow-sm ease-in-out`}>
					<p className="p-6 text-center">Read CV</p>
				</Link>
			</div>
		</div>
	);
}