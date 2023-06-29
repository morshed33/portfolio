import { motion, AnimatePresence } from "framer-motion";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import { Outlet, useLocation, useNavigation } from "react-router-dom";

const variants = {
	inactive: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.3,
			ease: "easeInOut",
			type: "tween",
			stiffness: 100,
		},
	},
	in: {
		y: 300,
		opacity: 0,
		transition: {
			duration: 0.3,
			ease: "easeInOut",
		},
	},
	out: {
		opacity: 0,
		y: -300,
		transition: {
			duration: 0.3,
			ease: "easeInOut",
		},
	},
};

const Layout = () => {
	const navigation = useNavigation();
  const location = useLocation();

	return (
		<>
			<AnimatePresence mode="wait">
				<motion.div
					key={location.pathname}
					variants={variants}
					initial="out"
					animate="inactive"
					exit="in">
					{navigation.state === "loading" ? (
						<Loader />
					) : (
						<>
							<main className="min-h-screen bg-zinc-50 dark:bg-slate-900 z-0">
								<Navbar />
								<Outlet />
							</main>
						</>
					)}
				</motion.div>
			</AnimatePresence>
		</>
	);
};

export default Layout;
