import React from "react";
import { AppRoutes } from './components/AppRoutes'
import './index.css'

const App:React.FC = () => {
  return (
    <div className="bg-white dark:bg-gray-950 h-full w-full overflow-auto">
      <AppRoutes />
    </div>
  );
};

export default App;
