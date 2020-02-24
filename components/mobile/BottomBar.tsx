import { NextPage } from 'next';
import { Mail } from "react-feather";
import ThemeToggle from "../ThemeToggle";
import MenuToggle from "./MenuToggle";

interface BottomBarProps {
  toggle: any;
}

const BottomBar: NextPage<BottomBarProps> = ({ toggle }) => {
  return (
    <div className="flex justify-around items-center h-16 border-t-2 shadow-xl bg-white border-neutral-100 dark:border-neutral-700 dark:bg-neutral-800 shadow-xl mt-auto z-50 ">
      <a
        href="mailto:perry@raskin.me"
        className="w-1/3 flex justify-center"
      >
        <Mail className="h-6 w-auto" />
      </a>
      <MenuToggle toggle={toggle} />
      <div className="w-1/3 flex justify-center">
        <ThemeToggle />
      </div>
    </div>
  );
}

export default BottomBar;