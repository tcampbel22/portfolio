import React from "react";
import { AppRoutes } from './components/AppRoutes'
import { ScrollToTop } from "./components/ScrollToTop";
import { useState, useEffect } from "react";
import './index.css'

const App:React.FC = () => {
	const [darkMode, setDarkMode] = useState(false);
	
		useEffect(() => {
			const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
			setDarkMode(mediaQuery.matches);
			const handleLightMode = (event: MediaQueryListEvent) => {
				setDarkMode(event.matches);
			};
			mediaQuery.addEventListener('change', handleLightMode);
			return () => {
				mediaQuery.removeEventListener('change', handleLightMode);
			};
		}, []);
	return (
    <div className="w-full bg-white dark:bg-gray-950 font-mono">
      <ScrollToTop />
	  <AppRoutes isDark={darkMode}/>
    </div>
  );
};

export default App;
