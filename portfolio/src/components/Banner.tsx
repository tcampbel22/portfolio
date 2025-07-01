import React from "react";

type ImageProps = {
	src: string;
	title: string;
}

const BannerImage = ({ src, title }: ImageProps) => {
	return (
		<img src={src} title={title} className="w-16 h-16 md:w-30 md:h-30"/>
	);
}

export const Banner:React.FC = () => {
	return (
		<div className="mx-5">
			<h1 className="dark:text-white text-center text-2xl md:text-4xl font-bold m-8 p-4">Languages</h1>
			<div className="grid grid-cols-3 md:grid-cols-6 gap-8 mt-8">
	{/* //Languages */}
				<BannerImage src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" title="typescript"/>
				<BannerImage src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" title="javascript"/>
				<BannerImage src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" title="python"/>
				<BannerImage src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" title="C++"/>
				<BannerImage src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" title="C"/>
				<BannerImage src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bash/bash-original.svg" title="bash"/>
			</div>
			<div className='w-full h-[2px] my-10 bg-black dark:bg-white'></div>
			<h1 className="dark:text-white text-center text-2xl md:text-4xl font-bold m-6 p-4">Frameworks/Libraries</h1>
			<div className="grid grid-cols-3 md:grid-cols-6 gap-8 mt-8">
	{/* //Frameworks/libraries */}
	
				<BannerImage src="https://img.icons8.com/?size=256&id=ewGOClUtmFX4&format=png" title="Flask"/>
				<BannerImage src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastify/fastify-original.svg" title="fastify"/>
				<BannerImage src="https://img.icons8.com/?size=256&id=2ZOaTclOqD4q&format=png" title="express"/>
				<BannerImage src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" title="react"/>
			</div>
			<div className='w-full h-[2px] my-10 bg-black dark:bg-white'></div>
			<h1 className="dark:text-white text-center text-2xl md:text-4xl font-bold m-8 p-4">Testing</h1>
			<div className="grid grid-cols-3 md:grid-cols-6 gap-8 mt-8">
	{/* //Testing */}
				<BannerImage src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pytest/pytest-original.svg" title="pytest"/>
				<BannerImage src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg" title="jest"/>
				<BannerImage src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg" title="playwright"/>
				<BannerImage src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" title="postman"/>			
			</div>
			<div className='w-full h-[2px] my-10 bg-black dark:bg-white'></div>
			<h1 className="dark:text-white text-center text-2xl md:text-4xl font-bold m-8 p-4">Database</h1>
			<div className="grid grid-cols-3 md:grid-cols-6 gap-8 mt-8">
	{/* //Database */}
				<BannerImage src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg" title="SQLite"/>
				<BannerImage src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" title="prisma"/>
				<BannerImage src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg" title="mongoDB"/>
				<BannerImage src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-plain-wordmark.svg" title="mySQL"/>
			</div>
			<div className='w-full h-[2px] my-10 bg-black dark:bg-white'></div>
			<h1 className="dark:text-white text-center text-2xl md:text-4xl font-bold m-8 p-4">CI/CD & Tools</h1>
			<div className="grid grid-cols-3 md:grid-cols-6 gap-8 mt-8">
	{/* //Tools/Cloud/CI/CD */}
				<BannerImage src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/googlecloud/googlecloud-original.svg" title="Google Cloud Platform"/>
				<BannerImage src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/json/json-original.svg" title="json"/>
				<BannerImage src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nginx/nginx-original.svg" title="NGINX"/>
				<BannerImage src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain-wordmark.svg" title="docker"/>
				<BannerImage src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" title="linux"/>
				<BannerImage src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" title="git"/>
				<BannerImage src="https://img.icons8.com/?size=240&id=30470&format=png" title="travisCI"/>
				<BannerImage src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vim/vim-original.svg" title="vim"/>
				<BannerImage src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg" title="Github Actions"/>
				<BannerImage src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" title="tailwindCSS"/>
			</div>
		</div>
	);
};