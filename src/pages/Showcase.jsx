import Heading from "../components/Heading";
import { motion } from "framer-motion";
import PortfolioCard from "../components/PortfolioCard";
import portfolioData from "../assets/portfolioData";

const Showcase = () => {
	return (
		<>
			<section>
				<Heading
					title="Showcase"
					paragraph="View some of recent projects"
				/>
				<div className="pb-20 px-6 mx-auto max-w-screen-xl">
					<div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
						{portfolioData.map((data, i) => {
							return (
								<motion.div
									key={data.title}
									initial={{
										opacity: 0,
										translateY: -100,
									}}
									whileInView={{ opacity: 1, translateY: 0 }}
									transition={{
										type: "spring",
										stiffness: 100,
										duration: 1.5,
										delay: 0.5 * i,
									}}>
									<PortfolioCard
										key={i}
										title={data.title}
										imageUrl={data.imgUrl}
										alt={data.alt}
										description={data.description}
										client={data.client}
										server={data.server}
										to={data.to}
										tags={data.tags}
									/>
								</motion.div>
							);
						})}
					</div>
				</div>
			</section>
		</>
	);
};

export default Showcase;
