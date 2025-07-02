type ProjectProps = {
	projectName: string;
	link: string;
	image?: string;
}
export const Project:React.FC<ProjectProps> = ({ projectName, link, image }) => {
	return (
		<div>
			<a 	href={link} 
				target="_blank"
				rel="noopener noreferrer" 
				style={{backgroundImage: `url(${image})`}}
				className='bg-cover bg-center w-full h-48 md:h-96
					bg-gray-200 shadow-md mb-1 text-xl md:text-4xl
					font-bold text-gray-100 text-shadow dark:text-gray-100
					transform hover:scale-105 transition-all duration-300 ease-in-out
					flex items-center justify-center'
					>
			</a>
			<h1 className='dark:text-white text-center font-bold text-xl md:text-3xl mt-3 mb-1'>{projectName}</h1>
		</div>
	);
};