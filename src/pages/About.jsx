import { useState } from "react";
import { Helmet } from "react-helmet-async";
import morshed from "../assets/Morshed.jpg";
import {
	FaMapPin,
	FaBriefcase,
	FaUniversity,
	FaReact,
	FaBootstrap,
	FaNodeJs,
} from "react-icons/fa";
import { AiFillHtml5 } from "react-icons/ai";
import { IoLogoJavascript } from "react-icons/io";
import {
	SiTailwindcss,
	SiCss3,
	SiNextdotjs,
	SiMongodb,
	SiExpress,
} from "react-icons/si";
import { motion } from "framer-motion";
import Heading from "../components/Heading";

const About = () => {
	return (
		<>
			<Helmet>
				<title>About S M Morshed | MERN Stack Developer | Skills & Experience</title>
				<meta name="description" content="Learn about S M Morshed, a MERN Stack Developer from Dhaka, Bangladesh. Discover my skills in React, Node.js, MongoDB, Express.js, and my journey in web development." />
				<meta name="keywords" content="About S M Morshed, MERN Stack Developer, React Developer, Node.js Developer, MongoDB, Express.js, JavaScript, Web Development Skills, Programming Hero" />
				<meta name="author" content="S M Morshed" />
				<meta name="robots" content="index, follow" />

				{/* Open Graph / Facebook */}
				<meta property="og:type" content="profile" />
				<meta property="og:url" content="https://portfolio.smmorshed.tech/about" />
				<meta property="og:title" content="About S M Morshed | MERN Stack Developer" />
				<meta property="og:description" content="Professional MERN Stack Developer with expertise in React, Node.js, MongoDB, and Express.js. Learn about my skills and experience." />
				<meta property="og:image" content="https://e-commerce-test.sgp1.digitaloceanspaces.com/notneeded/users/1758213170310-Morshed.jpg" />
				<meta property="og:image:width" content="300" />
				<meta property="og:image:height" content="300" />
				<meta property="og:image:alt" content="S M Morshed - MERN Stack Developer Profile Photo" />
				<meta property="og:image:type" content="image/jpeg" />
				<meta property="og:site_name" content="S M Morshed Portfolio" />
				<meta property="og:locale" content="en_US" />

				{/* Twitter */}
				<meta property="twitter:card" content="summary_large_image" />
				<meta property="twitter:url" content="https://portfolio.smmorshed.tech/about" />
				<meta property="twitter:title" content="About S M Morshed | MERN Stack Developer" />
				<meta property="twitter:description" content="Professional MERN Stack Developer with expertise in React, Node.js, MongoDB, and Express.js." />
				<meta property="twitter:image" content="https://e-commerce-test.sgp1.digitaloceanspaces.com/notneeded/users/1758213170310-Morshed.jpg" />
				<meta property="twitter:image:alt" content="S M Morshed - MERN Stack Developer Profile Photo" />

				{/* Additional SEO */}
				<link rel="canonical" href="https://portfolio.smmorshed.tech/about" />
				
				{/* Structured Data */}
				<script type="application/ld+json">
				{JSON.stringify({
					"@context": "https://schema.org",
					"@type": "Person",
					"name": "S M Morshed",
					"jobTitle": "MERN Stack Developer",
					"description": "Professional MERN Stack Developer with expertise in React, Node.js, MongoDB, and Express.js. Passionate about creating innovative web applications.",
					"url": "https://portfolio.smmorshed.tech/about",
					"image": "https://portfolio.smmorshed.tech/Morshed.jpg",
					"sameAs": [
						"https://github.com/morshed33",
						"https://www.linkedin.com/in/s-m-morshed-/",
						"https://www.facebook.com/profile.php?id=100008050000000"
					],
					"address": {
						"@type": "PostalAddress",
						"addressLocality": "Dhaka",
						"addressCountry": "Bangladesh"
					},
					"knowsAbout": [
						"React",
						"Node.js",
						"MongoDB",
						"Express.js",
						"JavaScript",
						"Tailwind CSS",
						"Web Development",
						"MERN Stack"
					],
					"alumniOf": {
						"@type": "EducationalOrganization",
						"name": "Programming Hero"
					}
				})}
				</script>
			</Helmet>
			<section>
				<Heading title="About" paragraph="A little about me" />
				<motion.div
					initial={{ y: -100, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					transition={{ type: "spring", stiffness: 100, delay: 1 }}
					className="flex flex-col justify-center items-center mt-52 pb-20 px-6 mx-auto lg:w-2/3">
					<div className="flex flex-col min-w-0 break-words shadow-2xl rounded-xl bg-white dark:bg-slate-800">
						<div className="px-6">
							<div className="flex flex-wrap justify-center">
								<div className="w-full lg:w-2/3 px-4 lg:order-2 flex justify-center">
									<div className="relative">
										<motion.div
											initial={{ y: -100, opacity: 0 }}
											whileInView={{ y: 0, opacity: 1 }}
											transition={{
												type: "spring",
												stiffness: 100,
												delay: 0.25,
											}}>
											<img
												alt="Professional photo of S M Morshed, MERN Stack Developer"
												src={morshed}
												className="shadow-2xl rounded-full h-auto align-middle border-none absolute -m-[136px] -ml-20 lg:-ml-16"
												style={{ maxWidth: "150px" }}
												width={150}
												height={150}
												loading="lazy"
											/>
										</motion.div>
									</div>
								</div>
							</div>
							<div className="text-center mt-12">
								<h3 className="text-4xl font-semibold leading-normal mb-2 text-zinc-900 dark:text-zinc-50">
									S M Mahbub Morshed
								</h3>
								<div className="inline-flex text-sm leading-normal mt-0 mb-2 text-zinc-400 font-bold uppercase">
									<FaMapPin className="mr-2 text-lg text-zinc-400 " />
									Dhaka, Bangladesh
								</div>
								<div className="flex flex-row justify-center items-center mb-2 mt-10 text-zinc-800 dark:text-zinc-50">
									<FaBriefcase className="mr-2 text-lg text-zinc-400 dark:text-zinc-400" />
									MERN Stack Developer
								</div>
								<div className="flex flex-row justify-center items-center mb-2 text-zinc-800 dark:text-zinc-50">
									<FaUniversity className="mr-2 text-lg text-zinc-400 dark:text-zinc-400" />
									Jahangirnagar University
								</div>
							</div>
							<div className="mt-10 py-10 border-t border-zinc-200 dark:border-zinc-400 text-center">
								<div className="flex flex-wrap justify-center">
									<div className="w-full lg:w-9/12 px-4">
										<p className="mb-4 text-lg leading-relaxed text-zinc-800 dark:text-zinc-200">
											Hey there! 🖐 I&apos;m Morshed, I
											build apps for the web! I have been
											coding for around 2 years as a
											hobby, although recently i decided
											to take action and pursue a tech
											career. I am currently finished my
											MERN stack bootcamp from Programming
											Hero, and looking for chance to
											gather professional experience.
											Connect me on&nbsp;
											<a
												href="https://linkedin.com/in/morshedJU"
												target="_blank"
												className="opacity-75 underline">
												linkedin
											</a>
											&nbsp;to stay up to date on my tech
											journey!
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</motion.div>

				<Heading
					title="Skills"
					paragraph="Tech stacks where i am most proficient"
				/>
				<div className="flex flex-row flex-wrap justify-center items-center mb-40 mt-20 py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
					<motion.div
						initial={{ y: 100, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{
							type: "spring",
							stiffness: 100,
						}}>
						<div className="p-2 m-3 bg-yellow-500 rounded-full shadow-xl">
							<IoLogoJavascript className="w-7 h-7 text-white" />
						</div>
					</motion.div>
					<motion.div
						initial={{ y: 100, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{
							type: "spring",
							stiffness: 100,
							delay: 0.1,
						}}>
						<div className="p-2 m-3 bg-orange-600 rounded-full shadow-xl">
							<AiFillHtml5 className="w-7 h-7 text-white" />
						</div>
					</motion.div>
					<motion.div
						initial={{ y: 100, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{
							type: "spring",
							stiffness: 100,
							delay: 0.2,
						}}>
						<div className="p-2 m-3 bg-blue-600 rounded-full shadow-xl">
							<SiCss3 className="w-7 h-7 text-white" />
						</div>
					</motion.div>
					<motion.div
						initial={{ y: 100, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{
							type: "spring",
							stiffness: 100,
							delay: 0.3,
						}}>
						<div className="p-2 m-3 bg-zinc-600 rounded-full shadow-xl">
							<FaReact className="w-7 h-7 text-sky-400" />
						</div>
					</motion.div>
					<motion.div
						initial={{ y: 100, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{
							type: "spring",
							stiffness: 100,
							delay: 0.4,
						}}>
						<div className="p-2 m-3 bg-purple-600 rounded-full shadow-xl">
							<FaBootstrap className="w-7 h-7 text-white" />
						</div>
					</motion.div>
					<motion.div
						initial={{ y: 100, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{
							type: "spring",
							stiffness: 100,
							delay: 0.5,
						}}>
						<div className="p-2 m-3 bg-lime-600 rounded-full shadow-xl">
							<FaNodeJs className="w-7 h-7 text-white" />
						</div>
					</motion.div>
					<motion.div
						initial={{ y: 100, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{
							type: "spring",
							stiffness: 100,
							delay: 0.6,
						}}>
						<div className="p-2 m-3 bg-sky-400 rounded-full shadow-xl">
							<SiTailwindcss className="w-7 h-7 text-white" />
						</div>
					</motion.div>
					<motion.div
						initial={{ y: 100, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{
							type: "spring",
							stiffness: 100,
							delay: 0.7,
						}}>
						<div className="p-2 m-3 bg-zinc-600 rounded-full shadow-xl">
							<SiNextdotjs className="w-7 h-7 text-white" />
						</div>
					</motion.div>
					<motion.div
						initial={{ y: 100, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{
							type: "spring",
							stiffness: 100,
							delay: 0.8,
						}}>
						<div className="p-2 m-3 bg-green-600 rounded-full shadow-xl">
							<SiMongodb className="w-7 h-7 text-white" />
						</div>
					</motion.div>
					<motion.div
						initial={{ y: 100, opacity: 0 }}
						whileInView={{ y: 0, opacity: 1 }}
						transition={{
							type: "spring",
							stiffness: 100,
							delay: 0.9,
						}}>
						<div className="p-2 m-3 bg-gray-500 rounded-full shadow-xl">
							<SiExpress className="w-7 h-7 text-white" />
						</div>
					</motion.div>
				</div>
			</section>
		</>
	);
};

export default About;
