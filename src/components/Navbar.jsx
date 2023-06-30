import { useState, useEffect } from "react";
import Socials from "./Socials";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const svgPathVariant1 = {
	open: { d: "M3.06061 2.99999L21.0606 21" },
	closed: { d: "M0 9.5L24 9.5" },
};

const svgPathVariant2 = {
	open: { d: "M3.00006 21.0607L21 3.06064" },
	moving: { d: "M0 14.5L24 14.5" },
	closed: { d: "M0 14.5L15 14.5" },
};

const firstVariant = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			type: "spring",
			stiffness: 100,
			delay: 0.5,
		},
	},
	closed: { y: -300, opacity: 0 },
};
const secondVariant = {
	open: {
		x: 0,
		opacity: 1,
		transition: {
			type: "spring",
			stiffness: 100,
			delay: 0.5,
		},
	},
	closed: { x: -100, opacity: 0 },
};

const thirdVariant = {
	open: {
		x: 0,
		opacity: 1,
		transition: {
			type: "spring",
			stiffness: 100,
			delay: 0.75,
		},
	},
	closed: { x: -100, opacity: 0 },
};

const fourthVariant = {
	open: {
		x: 0,
		opacity: 1,
		transition: {
			type: "spring",
			stiffness: 100,
			delay: 1,
		},
	},
	closed: { x: -100, opacity: 0 },
};

const fifthVariant = {
	open: {
		x: 0,
		opacity: 1,
		transition: {
			type: "spring",
			stiffness: 100,
			delay: 1.25,
		},
	},
	closed: { x: -100, opacity: 0 },
};

const sixthVariant = {
	open: {
		x: 0,
		opacity: 1,
		transition: {
			type: "spring",
			stiffness: 100,
			delay: 1.5,
		},
	},
	closed: { x: -100, opacity: 0 },
};

const seventhVariant = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			type: "spring",
			stiffness: 100,
			delay: 1.75,
		},
	},
	closed: { y: 300, opacity: 0 },
};

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const [animation, setAnimation] = useState("closed");

	const handleNav = () => {
		setNav(!nav);
		setAnimation("moving");
		setTimeout(() => {
			setAnimation(animation === "closed" ? "open" : "closed");
		}, 500);
		document.querySelector("body").style.overflow = nav ? "auto" : "hidden";
	};

	const svgVariant = {
		hidden: {
			rotate: -180,
		},
		visible: {
			rotate: 0,
			transition: { duration: 1 },
		},
	};

	const pathVariant = {
		hidden: {
			opacity: 0,
			pathLength: 0,
		},
		visible: {
			opacity: 1,
			pathLength: 1,
			transition: {
				duration: 2,
				ease: "easeInOut",
			},
		},
	};

	return (
		<>
			<nav>
				<div className="flex justify-between items-center h-24 mx-auto px-4 text-zinc-800 bg-zinc-50 dark:text-zinc-50 dark:bg-slate-900 overflow-hidden">
					<div className="z-40 flex flex-row items-center justify-center p-4">
						<Link
							className="h-16 w-16"
							to="/"
							aria-label="S M Morshed | Home Page">
							<svg
								className="rounded-xl p-[1px] dark:bg-white"
								version="1.0"
								width="100%"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 105.000000 110.000000"
								preserveAspectRatio="xMidYMid meet">
								<g
									transform="translate(0, 110) scale(0.100000,-0.100000)"
									fill="#000"
									stroke="none">
									<path d="M0 550 l0 -550 525 0 525 0 0 550 0 550 -525 0 -525 0 0 -550z m690 260 c0 -82 -2 -150 -5 -150 -3 0 -21 10 -40 23 l-35 22 0 88 0 88 -52 -3 -53 -3 -3 -87 -3 -88 53 -33 c29 -19 73 -45 98 -59 l45 -26 120 69 c66 38 123 69 128 69 4 0 7 -73 7 -163 l0 -163 -40 -23 -40 -22 0 115 c0 64 -3 116 -6 116 -3 0 -44 -21 -90 -46 l-84 -45 -135 81 -135 81 0 155 0 154 135 0 135 0 0 -150z m-253 -236 l253 -147 0 -144 0 -144 -132 3 -133 3 -3 138 c-1 75 0 137 2 137 3 0 20 -9 38 -20 32 -19 33 -22 38 -97 l5 -78 53 -3 53 -3 -3 82 -3 81 -170 99 c-93 54 -173 99 -177 99 -5 0 -8 -52 -8 -115 0 -63 -2 -115 -4 -115 -3 0 -21 9 -40 21 l-36 21 0 164 c0 90 3 164 7 164 3 0 120 -66 260 -146z" />
								</g>
							</svg>
						</Link>
					</div>
					<ul className="hidden md:flex z-40">
						<li className="p-4 font-medium hover:text-purple-600 transition duration-150 ease-in-out">
							<Link to="/" aria-label="S M Morshed | Home Page">
								Home
							</Link>
						</li>
						<li className="p-4 font-medium hover:text-purple-600 transition duration-150 ease-in-out">
							<Link
								to="/about"
								aria-label="S M Morshed | About Page">
								About
							</Link>
						</li>
						<li className="p-4 font-medium hover:text-purple-600 transition duration-150 ease-in-out">
							<Link
								to="/showcase"
								aria-label="S M Morshed | Showcase Page">
								Showcase
							</Link>
						</li>

						<li className="p-4 font-medium hover:text-purple-600 transition duration-150 ease-in-out">
							<Link
								to="/blog"
								aria-label="S M Morshed | Blog Page">
								Blog
							</Link>
						</li>
						<li className="p-4 font-medium hover:text-purple-600 transition duration-150 ease-in-out">
							<Link
								to="/contact"
								aria-label="S M Morshed | Contact Page">
								Contact
							</Link>
						</li>
					</ul>
					<div className="flex flex-row mr-3 justify-center items-center md:hidden z-50 cursor-pointer">
						<div onClick={handleNav}>
							<svg width="29" height="29" viewBox="0 0 29 29">
								<motion.path
									stroke="currentColor"
									animate={animation}
									variants={svgPathVariant1}
								/>
								<motion.path
									stroke="currentColor"
									animate={animation}
									variants={svgPathVariant2}
								/>
							</svg>
						</div>
					</div>
					<ul
						className={
							nav
								? "fixed z-40 flex flex-col justify-center items-center left-0 top-0 w-full h-screen bg-zinc-50 dark:bg-slate-900 ease-in-out duration-500"
								: "fixed z-40 flex flex-col justify-center items-center left-[-100%] top-0 w-full h-screen bg-zinc-50 dark:bg-slate-900 ease-in-out duration-500"
						}>
						<motion.li
							animate={nav ? "open" : "closed"}
							variants={firstVariant}
							className="inline-flex fixed top-20 p-4">
              <Link
                className="h-16 w-16"
								to="/"
								aria-label="S M Morshed | Home Page"
								onClick={handleNav}>
								<svg
									className="rounded-xl p-[1px] dark:bg-white"
									version="1.0"
									width="100%"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 105.000000 110.000000"
									preserveAspectRatio="xMidYMid meet">
									<g
										transform="translate(0, 110) scale(0.100000,-0.100000)"
										fill="#000"
										stroke="none">
										<path d="M0 550 l0 -550 525 0 525 0 0 550 0 550 -525 0 -525 0 0 -550z m690 260 c0 -82 -2 -150 -5 -150 -3 0 -21 10 -40 23 l-35 22 0 88 0 88 -52 -3 -53 -3 -3 -87 -3 -88 53 -33 c29 -19 73 -45 98 -59 l45 -26 120 69 c66 38 123 69 128 69 4 0 7 -73 7 -163 l0 -163 -40 -23 -40 -22 0 115 c0 64 -3 116 -6 116 -3 0 -44 -21 -90 -46 l-84 -45 -135 81 -135 81 0 155 0 154 135 0 135 0 0 -150z m-253 -236 l253 -147 0 -144 0 -144 -132 3 -133 3 -3 138 c-1 75 0 137 2 137 3 0 20 -9 38 -20 32 -19 33 -22 38 -97 l5 -78 53 -3 53 -3 -3 82 -3 81 -170 99 c-93 54 -173 99 -177 99 -5 0 -8 -52 -8 -115 0 -63 -2 -115 -4 -115 -3 0 -21 9 -40 21 l-36 21 0 164 c0 90 3 164 7 164 3 0 120 -66 260 -146z" />
									</g>
								</svg>
							</Link>
						</motion.li>
						<li className="text-zinc-900 dark:text-zinc-200 text-2xl hover:text-purple-600 w-full text-center p-4">
							<motion.div
								animate={nav ? "open" : "closed"}
								variants={secondVariant}>
								<Link
									className="dark:hover:text-purple-600 transition duration-150 ease-in-out"
									to="/"
									aria-label="S M Morshed | Home Page"
									onClick={handleNav}>
									Home
								</Link>
							</motion.div>
						</li>
						<li className="text-zinc-900 dark:text-zinc-200 text-2xl hover:text-purple-600 w-full text-center p-4">
							<motion.div
								animate={nav ? "open" : "closed"}
								variants={thirdVariant}>
								<Link
									className="dark:hover:text-purple-600 transition duration-150 ease-in-out"
									to="/about"
									aria-label="S M Morshed | About Page"
									onClick={handleNav}>
									About
								</Link>
							</motion.div>
						</li>
						<li className="text-zinc-900 dark:text-zinc-200 text-2xl hover:text-purple-600 w-full text-center p-4">
							<motion.div
								animate={nav ? "open" : "closed"}
								variants={fourthVariant}>
								<Link
									className="dark:hover:text-purple-600 transition duration-150 ease-in-out"
									to="/showcase"
									aria-label="S M Morshed | Showcase Page"
									onClick={handleNav}>
									Showcase
								</Link>
							</motion.div>
						</li>
						<li className="text-zinc-900 dark:text-zinc-200 text-2xl hover:text-purple-600 w-full text-center p-4">
							<motion.div
								animate={nav ? "open" : "closed"}
								variants={fifthVariant}>
								<Link
									className="dark:hover:text-purple-600 transition duration-150 ease-in-out"
									to="/blog"
									onClick={handleNav}
									aria-label="S M Morshed | Blog Page">
									Blog
								</Link>
							</motion.div>
						</li>
						<li className="text-zinc-900 dark:text-zinc-200 text-2xl hover:text-purple-600 w-full text-center p-4">
							<motion.div
								animate={nav ? "open" : "closed"}
								variants={sixthVariant}>
								<Link
									className="dark:hover:text-purple-600 transition duration-150 ease-in-out"
									to="/contact"
									aria-label="S M Morshed | Contact Page"
									onClick={handleNav}>
									Contact
								</Link>
							</motion.div>
						</li>
						<div className="flex flex-col fixed justify-center items-center bottom-20 p-4">
							<motion.div
								animate={nav ? "open" : "closed"}
								variants={seventhVariant}>
								<Socials style={'inline-flex'}/>
							</motion.div>
						</div>
					</ul>
				</div>
			</nav>
		</>
	);
};

export default Navbar;
