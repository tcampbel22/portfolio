import React from "react"
import { HeaderCenterLarge } from "./HeaderText"
import { LineBreak, BackButton } from "./Utils"
import { pongInfo } from "../data/pongInfo"
import { Footer } from "./Footer"
import type { DarkProps } from "../types/types"

type pongButtonProps = {
	url: string;
	text: string;
}

export const PongButton:React.FC<pongButtonProps> = ({url, text}) => {
	return (
		<button className="border border-2 dark:text-gray-100 px-8 py-5 my-10 hover:scale-110 transition-all duration-200 ease-in-out">
			<a href={url} target="_blank" rel="noopener noreferrer">
			{text}
			</a>
		</button>
	)
}


export const PongPage:React.FC<DarkProps> = ({ isDark }) => {
	return (
		<div className="md:max-w-screen-xl mx-auto pt-6 px-10 dark:text-gray-100">
			<div className='relative flex flex-col md:flex-row items-center justify-center'>
					<HeaderCenterLarge text="Classic pong web app"/>
					<div className='flex md:absolute left-0 mt-5 md:mt-0'>
						<BackButton link="/" text="Go to home page" isDark={isDark}/>
					</div>
			</div>
			<LineBreak />
			<div className="flex flex-col justify-center items-center text-xl md:text-left text-center">
				<img className="m-10" src="pong.gif"></img>
				If you want to check the project straight away just click the button below.
				In this version you can create a profile, add/delete friends, play in a tournament or 1v1.
				The game is designed to be played between 2 people on the same keyboard. Scroll down to read more about the 
				project and check out screenshots and the codebase.
				
				<PongButton	url="https://transendence.fly.dev/" text="Launch Pong" />
				<span className="text-center">***Note*** This app has a cold start, so will take a few mins to boot up</span>
			
			<span className="whitespace-pre-line my-6 px-4 md:px-0 py-8 text-center md:text-left">
			The last project in the 42 curriculum, this project is to build a online web application with the classic Pong game.
				This was group project with <a className="hover:underline" href="https://github.com/eleekku/eleekku" target="_blank" rel="noopener noreferrer">eleeku</a>, <a className="hover:underline" href="https://github.com/xrierac" target="_blank" rel="noopener noreferrer">xrierac</a>,  <a className="hover:underline" href="https://github.com/codinggolfer" target="_blank" rel="noopener noreferrer">codinggolfer</a> and <a className="hover:underline" href="https://github.com/Deivylex" target="_blank" rel="noopener noreferrer">Deivylex</a>. 
				The scope was vaguely defined, basically build a web application with Pong. We could choose from a selection of modules based on 
				what we found both interesting and challenging.
				The modules we implemented were 
				{pongInfo.moduleList.text.map((module, idx) => {
					return <ul key={idx} className="my-5 md:pl-5 font-bold">- {module}</ul>})}

				My main focus was building the backend, I built user, file and game services using a Docker network to achieve a 
				microservices architecture which was then served to frontend via a NGINX reverse proxy. I also implemented the SQLite database using Prisma, built all the api's for user management and 
				game, and worked on the frontend building the parts of the tournament feature as well as the base Pong game.
				This project was challenging but extremely rewarding, it gave me a really solid foundation in web development 
				principles.
				<br/>
				<br/>
				Outside of the project scope Elias (eleeku) and I also built the automated testing using Github actions, the tests use Supertest, Jest,
				Playwright and fastify's built in tester.
				<br/>
				<br/>
				
				I have worked further on the project after it's completion, as I wanted to get a better understanding
				of the frontend so I have rebuilt it with a more retro style.
				<br/>
				<br/>
				The new version is deployed on fly and stills run a small microservice network, 
				I also added storage buckets instead of local strage for user images with Tigris,
				and removed the ELK stack (sorry Xavi) as fly has in built logging and monitoring.
				<br/>
				<br/>
				Below you can check out the original project code, my new version or launch the app


				</span>
				<div className="flex flex-col md:flex-row gap-x-10">
				<PongButton	url="https://github.com/eleekku/ft_transcendence" text="Original Codebase" />
				<PongButton	url="https://github.com/tcampbel22/transcendence" text="New Codebase" />
				<PongButton	url="https://transendence.fly.dev/" text="Launch Pong" />
				</div>
				<span className="text-center">***Note*** This app has a cold start, so will take a few mins to boot up</span>
			</div>
				
				
			<Footer/>
		</div>
	)
}