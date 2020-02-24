import { NextPage } from 'next';
import MenuItem from "./MenuItem";
import { motion } from "framer-motion";

interface NavigationProps {
  links: any;
  isOpen: boolean;
}

const menuvariants = {
  open: {
    opacity: 1
  },
  closed: {
    opacity: 0
  }
};

const navvariants = {
  open: {
    transition: { staggerChildren: 0.15, delayChildren: 0.25 }
  },
  closed: {}
};

const Navigation: NextPage<NavigationProps> = ({ links, isOpen }) => {
  return (
    <div
      className={`fixed top-0 bottom-16 inset-x-0 ${
        isOpen ? "" : "pointer-events-none"
      }`}
    >
      <motion.div
        className="relative flex flex-col items-center justify-center w-full h-screen p-4 bg-gray-200 dark:bg-gray-700"
        variants={menuvariants}
      >
        <motion.nav
          className={`flex flex-col justify-center items-center ${
            isOpen ? "" : "pointer-events-none"
          }`}
          variants={navvariants}
        >
          {links.map((link: any) => (
            <MenuItem key={link.title} to={link.route} title={link.title} />
          ))}
        </motion.nav>
      </motion.div>
    </div>
  );
}

export default Navigation;