import React from "react";
import { HeaderCenterLarge } from "./HeaderText";
import { BackButton, LineBreak } from "./Utils";
import type { DarkProps } from "../types/types";
import { Footer } from "./Footer";
import { MediumButton } from "./Utils";

export const MinishellPage: React.FC<DarkProps> = ({ isDark }) => {
    return (
        <div className="md:max-w-screen-xl mx-auto pt-6 px-10 dark:text-gray-100 h-full md:text-xl text-center md:text-left">
			<div className='relative flex flex-col md:flex-row items-center justify-center'>
                <HeaderCenterLarge text="Custom Shell interpreter"/>
                <div className='flex md:absolute left-0 mt-5 md:mt-0'>
                    <BackButton link="/" text="Go to home page" isDark={isDark}/>
                </div>
            </div>
            <LineBreak />
           	<div className="flex flex-col items-center justify-center">
				<span className="text-center text-lg md:text-2xl">***LIVE DEMO*** <br/><br/>
					Try it out, just type something or try one of the below commands and hit enter
				</span>
				<div className=" my-6 text-gray-100 bg-black md:w-2xl rounded-sm border p-2">
					echo "Hello World!"
					<br/>
					echo "Hello $USER"
					<br/>
					cat | echo "Hello from inside a file" &gt; file.txt
				</div>
					<span className="text-center">*** This program has a cold start so may take a bit to warm up ***</span>
				<div className="mt-4 mb-3 flex md:flex-col justify-center items-center">
					<iframe
							src="/files/shell.html"
							className="rounded-sm w-full md:w-4xl min-h-80 md:min-h-130 bg-black border-4 border-gray-100 text-gray-100"
							title="minishell"
						></iframe>
				</div>
				<span>*** Refresh the page if it gets stuck or seg faults :D ***</span>
			
				<p className=" my-6">
					In the above terminal you wil find a live demo of my minishell project built together 
					with <a className="hover:underline" href="https://github.com/xrierac/" target="_blank" rel="noopener noreferrer">xriera</a>,
					feel free to try it out!
					<br/>
					<br/>
					This project aims to replicate Bash on a smaller scale, if you're familiar with Bash 
					then you can try most of the standard commands and features. In the demo version unfortunately 
					exit and the ctrl+d (will hang out of Heredoc) are not available due to the constraints of xterm.
					<br/>
									
					If you want to read a more detailed explanation of how it works then you can check the readme and codebase
					with the button below.
				</p>
				
				<div className="my-10">
					<MediumButton text="See codebase" url="https://github.com/tcampbel22/custom_shell_interpreter"/>
				</div>
				<BackButton link="/" text="Go to home page" isDark={isDark}/>
			</div>
            <Footer />
        </div>
    );
};