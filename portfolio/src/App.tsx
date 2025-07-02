import React from "react";
import { AppRoutes } from './components/AppRoutes'
import { ScrollToTop } from "./components/ScrollToTop";
import './index.css'

const App:React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-950 h-full w-full font-mono">
      <ScrollToTop />
	  <AppRoutes />
    </div>
  );
};

export default App;
