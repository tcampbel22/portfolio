import React from "react";
import { HeaderCenterLarge } from "./HeaderText";
import { BackButton, LineBreak } from "./Utils";
import type { DarkProps } from "../types/types";
import { Footer } from "./Footer";

export const MinishellPage: React.FC<DarkProps> = ({ isDark }) => {
    return (
        <div className="md:max-w-screen-xl mx-auto pt-6 px-10 dark:text-gray-100">
            <div className='relative flex flex-col md:flex-row items-center justify-center'>
                <HeaderCenterLarge text="Custom Shell interpreter"/>
                <div className='flex md:absolute left-0 mt-5 md:mt-0'>
                    <BackButton link="/" text="Go to home page" isDark={isDark}/>
                </div>
            </div>
            <LineBreak />
            <div className="mt-10 flex md:flex-col max-h-150 justify-center items-center">
			<iframe
                    src="/shell.html"
                    className="w-full max-w-4xl min-h-130 bg-black border-4 border-gray-100 overflow-y-auto"
                    title="minishell"
                ></iframe> 
                
            </div>
            <Footer />
        </div>
    );
};