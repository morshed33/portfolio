import { FaGithub, FaLink } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const PortfolioCard = ({
	title,
	imageUrl,
	alt,
	description,
  client,
  server,
	to,
	tags,
}) => {

  const navigate = useNavigate();
	return (
    <div onClick={() => {
      navigate(`project/${title}`)
    }} className="max-w-screen border cursor-pointer   h-full overflow-hidden rounded-lg shadow-2xl bg-white dark:bg-slate-800">
			<div className="h-48 w-full overflow-hidden">
				<img
					src={imageUrl}
					alt={alt || `${title} - MERN Stack Project by S M Morshed`}
					className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
					loading="lazy"
					width="400"
					height="192"
				/>
			</div>
			
			<div className="px-6 py-4 h-20">
				<div className="font-bold text-xl mb-2 text-zinc-900 dark:text-zinc-50">
					{title}
				</div>
				<p className="text-zinc-800 dark:text-zinc-300 text-base">
					{description}
				</p>
			</div>
			<div className="px-6 pt-4 pb-3 mt-10">
				{tags.map((tag, i) => {
					return (
						<span
							key={i}
							className="inline-flex justify-between items-center bg-zinc-100 dark:bg-zinc-50 shadow-md rounded-full px-3 py-1 text-sm font-semibold text-zinc-800 mr-2 mb-2">
							<p>{tag}</p>
						</span>
					);
				})}
			</div>
			<div className="inline-flex px-6 pt-4 pb-3">
				<p className="text-zinc-800 dark:text-zinc-50 text-base my-1">
					Links:
				</p>
				<Link
					to={client}
					target="_blank"
					aria-label="S M Morshed | Project Repository Link"
					className="text-zinc-800 dark:text-zinc-50 inline-flex gap-1 items-center font-medium text-primary-600 hover:text-purple-600 dark:hover:text-purple-600 transition duration-300 ease-in-out">
					<FaGithub className="ml-5" /> Client
        </Link>
        
				<Link
					to={server && server}
					target="_blank"
					aria-label="S M Morshed | Project Repository Link"
					className="text-zinc-800 dark:text-zinc-50 inline-flex gap-1 items-center font-medium text-primary-600 hover:text-purple-600 dark:hover:text-purple-600 transition duration-300 ease-in-out">
					<FaGithub className="ml-5" /> Server
				</Link>

				<Link
					to={to}
					target={to !== "#" ? "_blank" : null}
					aria-label="S M Morshed | Project View Live Link"
					className="text-zinc-800 dark:text-zinc-50 inline-flex gap-1 items-center font-medium text-primary-600 hover:text-purple-600 dark:hover:text-purple-600 transition duration-300 ease-in-out">
					<FaLink className="ml-5" /> Site
				</Link>
      </div>
      
		</div>
	);
};

export default PortfolioCard;
