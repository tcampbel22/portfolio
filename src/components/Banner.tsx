import React from "react";
import type { BannerProps, ImageProps } from "../types/types";
import { HeaderCenter, HeaderSub } from "./HeaderText";
import { techStack } from "../data/stackIcons";

const BannerImage:React.FC<ImageProps> = ({ src, title, alt }) => {
	return (
		<div>
			<img src={src} title={title} alt={alt} className="px-1 w-8 h-8 md:w-16 md:h-16 hover:scale-105"/>
		</div>
	);
}

const BannerRow:React.FC<BannerProps> = ({ stackArr, title }) => {
	return (
		<div className="flex flex-col md:flex-row justify-between items-center">
			<div className="flex flex-row justify-start items-start">
				<HeaderSub text={title}/>
			</div>
			<div className="flex flex-row justify-center md:justify-end space-x-5 overflow-x-auto md:overflow-hidden">
				{techStack[stackArr].map(s => {
						return (
							<BannerImage key={s.title} src={s.src} title={s.title} alt={s.alt}/>
						)
					})}
			</div>
		</div>
	);
};


export const Banner:React.FC = () => {
	return (
		<div className="mx-auto pt-10">
			<HeaderCenter text="Tech Stack"/>
			<div className="mt-6">
			<BannerRow title="Programming Languages" stackArr="languages"/>
			<BannerRow title="Frameworks/libraries" stackArr="frameworks"/>
			<BannerRow title="Testing" stackArr="testing"/>
			<BannerRow title="Database" stackArr="databases"/>
			<BannerRow title="CI/CD & Tools" stackArr="tools"/>

			</div>

		</div>
	);
};