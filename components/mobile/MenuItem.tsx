import { NextPage } from 'next';
import Link from 'next/link';
import { motion } from "framer-motion";

interface MenuItemProps {
  to: string;
  title: string;
}

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 20,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const MenuItem: NextPage<MenuItemProps> = ({ to, title }) => {
  return (
    <Link href={to}>
      <a
        className="text-3xl px-4 py-2 mr-2 no-select"
        href={to}
        //activeclassName="font-semibold text-primary-400"
      >
        <motion.div variants={variants}>{title}</motion.div>
      </a>
    </Link>
  );
}
export default MenuItem;
