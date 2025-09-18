import { Helmet } from "react-helmet-async";
import Heading from "../components/Heading";
import { motion } from "framer-motion";
import PortfolioCard from "../components/PortfolioCard";
import portfolioData from "../assets/portfolioData";

const Showcase = () => {
	return (
		<>
			<Helmet>
				<title>Portfolio Showcase | S M Morshed Projects | MERN Stack Applications</title>
				<meta name="description" content="Explore S M Morshed's portfolio showcase featuring MERN Stack projects including DevArt, Hungry Dev, Toy Vortex, and more. View live demos and GitHub repositories." />
				<meta name="keywords" content="Portfolio Projects, MERN Stack Projects, React Applications, Node.js Projects, MongoDB Projects, Web Development Portfolio, DevArt, Hungry Dev, Toy Vortex" />
				<meta name="author" content="S M Morshed" />
				<meta name="robots" content="index, follow" />

				{/* Open Graph / Facebook */}
				<meta property="og:type" content="website" />
				<meta property="og:url" content="https://portfolio.smmorshed.tech/showcase" />
				<meta property="og:title" content="Portfolio Showcase | S M Morshed Projects" />
				<meta property="og:description" content="Explore my MERN Stack portfolio projects including DevArt, Hungry Dev, Toy Vortex, and more. View live demos and source code." />
				<meta property="og:image" content="https://portfolio.smmorshed.tech/Morshed.jpg" />
				<meta property="og:site_name" content="S M Morshed Portfolio" />
				<meta property="og:locale" content="en_US" />

				{/* Twitter */}
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://portfolio.smmorshed.tech/showcase" />
				<meta property="twitter:title" content="Portfolio Showcase | S M Morshed Projects" />
				<meta property="twitter:description" content="Explore my MERN Stack portfolio projects including DevArt, Hungry Dev, Toy Vortex, and more." />
				<meta property="twitter:image" content="https://portfolio.smmorshed.tech/Morshed.jpg" />

				{/* Additional SEO */}
				<link rel="canonical" href="https://portfolio.smmorshed.tech/showcase" />
				
				{/* Structured Data */}
				<script type="application/ld+json">
				{JSON.stringify({
					"@context": "https://schema.org",
					"@type": "WebSite",
					"name": "S M Morshed Portfolio Showcase",
					"url": "https://portfolio.smmorshed.tech/showcase",
					"description": "Portfolio showcase featuring MERN Stack projects by S M Morshed",
					"author": {
						"@type": "Person",
						"name": "S M Morshed"
					}
				})}
				</script>
				<script type="application/ld+json">
				{JSON.stringify({
					"@context": "https://schema.org",
					"@type": "ItemList",
					"name": "Portfolio Projects",
					"description": "Collection of MERN Stack projects by S M Morshed",
					"url": "https://portfolio.smmorshed.tech/showcase",
					"numberOfItems": portfolioData.length,
					"itemListElement": portfolioData.map((project, index) => ({
						"@type": "ListItem",
						"position": index + 1,
						"item": {
							"@type": "SoftwareApplication",
							"name": project.title,
							"description": project.description,
							"url": `https://portfolio.smmorshed.tech/showcase/project/${project.title}`,
							"image": project.imageUrl,
							"applicationCategory": "WebApplication",
							"operatingSystem": "Web Browser"
						}
					}))
				})}
				</script>
			</Helmet>
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
