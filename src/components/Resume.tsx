import React from "react";

export const Resume:React.FC = () => {
	return (
		<div className="md:max-w-screen-2xl mx-auto h-screen">
			<iframe src="/cv.pdf" width="100%" height="100%"></iframe>
		</div>
	);
};
