import { HeaderMini } from "./HeaderText";

type ProjectProps = {
	projectName: string;
	link: string;
	image?: string;
	stack?: string;
}
export const Project:React.FC<ProjectProps> = ({ projectName, link, image, stack }) => {
	return (
		<div>
			<a 	href={link} 
				target="_blank"
				rel="noopener noreferrer" 
				style={{backgroundImage: `url(${image})`}}
				className='bg-cover bg-center w-full h-48 md:h-96 mb-5
					bg-gray-200 shadow-md shadow-black mb-1 rounded-md
					font-bold text-gray-100 dark:text-gray-100
					transform hover:scale-105 hover:shadow-sm transition-all duration-300 ease-in-out
					flex items-center justify-center'
					>
			</a>
			<div className="flex flex-col md:flex-row md:justify-between items-center justify-center">
				<HeaderMini text={projectName}/>
				<p className="md:text-md text-sm dark:text-gray-100">{stack}</p>
			</div>
		</div>
	);
};