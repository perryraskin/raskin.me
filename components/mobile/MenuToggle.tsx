import { NextPage } from 'next';
import { motion } from "framer-motion";

interface MenuToggleProps {
  toggle: any;
}

const Path = (props: any) => (
  <motion.path strokeWidth="2" strokeLinecap="round" {...props} />
);

const MenuToggle: NextPage<MenuToggleProps> = ({ toggle }) => {
  return (
    <div
      onClick={toggle}
      className="focus:outline-none w-1/3 flex justify-center"
    >
      <svg
        className="stroke-current"
        width="23"
        height="23"
        viewBox="0 0 23 23"
      >
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" }
          }}
        />

        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" }
          }}
        />
      </svg>
    </div>
  );
}

export default MenuToggle;