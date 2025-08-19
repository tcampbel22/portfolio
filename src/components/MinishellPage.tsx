import React from "react";
import { HeaderCenterLarge } from "./HeaderText";
import { BackButton, LineBreak, NavigateButton } from "./Utils";
import type { DarkProps } from "../types/types";
import { Footer } from "./Footer";
import { shellInfo } from "../data/shellInfo";
import { PongButton } from "./PongPage";

export const MinishellPage: React.FC<DarkProps> = ({ isDark }) => {
    return (
        <div className="md:max-w-screen-xl mx-auto pt-6 px-10 dark:text-gray-100 h-full">
			<div className='relative flex flex-col md:flex-row items-center justify-center'>
                <HeaderCenterLarge text="Custom Shell interpreter"/>
                <div className='flex md:absolute left-0 mt-5 md:mt-0'>
                    <BackButton link="/" text="Go to home page" isDark={isDark}/>
                </div>
            </div>
            <LineBreak />
           <div className="flex flex-col items-center">

		    <span>
				Below you'll find a terminal in which you can input commands, if you're familiar 
				with shell scripting then go nuts and see if you can segfault it! Read further down to see what it is capable of. 
				If you are less experienced try the following commands (Just type them in and hit enter)
				<br/>
				<br/>
				echo "Hello World!"
				<br/>
				echo "Hello $USER"
				<br/>
				cat | echo "Hello from inside a file" &gt; file.txt
			</span>
            <div className="my-10 flex md:flex-col max-h-150 justify-center items-center">
				<iframe
						src="/shell.html"
						className="w-full md:w-4xl min-h-130 bg-black border-4 border-gray-100"
						title="minishell"
					></iframe>
		
            </div>
					<span className="py-10">This is the first large project in the 42 curriculum, built as a team with one other student, it tasks you with 
					building a shell interpreter in C, the shell should imitate Bash as best it can. 
					The shell should handle the following -
					{shellInfo.moduleList.text.map((module, idx) => {
										return <ul key={idx} className="my-5 md:pl-5 font-bold">- {module}</ul>})}
					<br/>
					Along with those the following builtin commands were to be implemented
					{shellInfo.builtInList.text.map((module, idx) => {
										return <ul key={idx} className="my-5 md:pl-5 font-bold">- {module}</ul>})}
					<br/>
					<br/>
					I built this program with <a href="">Xriera</a>, we split the project into 2 parts - 
					<br/>
					<br/>
					Input parsing - Myself
					<br/><br/>
					Execution - Xavi
					<br/><br/>
					</span>
					<span>
					The parsing involved taking the input, sansitising it, checking for errors before storing it
					in parts to be sent to the execution. The data structure we used was a 2d array of nested structs, each struct was made of 2 parts
					the command double pointer and an ENUM specifying the type of command (CMD, R_INPUT, R_OUTPUT, HEREDOC).
					The parser basic workflow would be -
					<br/>
					<br/>
						<ul>- User input</ul>
						<ul>- Syntax error checks</ul>
						<ul>- Enviromental variable checks</ul>
						<ul>- Handle Heredoc</ul>
						<ul>- Split input by pipes</ul>
						<ul>- Split each individual command into strings</ul>
						<ul>- Send each command to execution</ul>
					<br/>
					Once the execution recieves the formatted command it will create child processes based on the
					amount of pipes in the command, the command will then be executed using the execve function
					and return the output to the specified file descriptor and correct exit code.
					<br/>
					<br/>
					This a tricky project due to the level of memory management needed vs our experience level but one that 
					taught a lot about low level concepts such as signals, child & parent processes and shell architecture.

					<br/>
					<br/>
					Now feel free to check out the codebase with the link below or play around with
					the program at the top of the page!
				</span>
					<div>
						<PongButton text="See codebase" url="https://github.com/tcampbel22/custom_shell_interpreter"/>
					</div>
					<BackButton link="/" text="Go to home page" isDark={isDark}/>
				</div>
            <Footer />
        </div>
    );
};