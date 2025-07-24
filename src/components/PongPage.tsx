import React from "react"
import { HeaderCenterLarge } from "./HeaderText"
import { LineBreak, NavigateButton, Paragraph } from "./Utils"
import { pongInfo } from "../data/pongInfo"
import { Footer } from "./Footer"

export const PongPage:React.FC = () => {
	return (
		<div className="md:max-w-screen-xl mx-auto py-8">
			<div className="flex flex-col md:flex-row justify-between items-center px-4 md:items-start w-full font-bold">
				<HeaderCenterLarge text="Classic Pong Web App"/>
				<NavigateButton text="Back to homepage" link="/"/>

			</div>
			<Paragraph text={}/>
			<LineBreak />
			<p className="flex flex-col my-10 px-4 md:px-0 py-10 text-center md:text-left dark:text-gray-100">
				{pongInfo.mainParagraph.text} 
				{pongInfo.moduleList.text.map(module => {
					return <ul className="mt-5 md:pl-5">- {module}</ul>})}
				</p>
			<Footer/>
		</div>
	)
}