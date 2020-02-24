import { NextPage } from 'next';
import { useCycle, motion } from 'framer-motion';
import Navigation from "./Navigation";
import BottomBar from "./BottomBar";

interface MobileMenuProps {

}

const MobileMenu: NextPage<MobileMenuProps> = ({}) => {
  const [isOpen, toggleOpen] = useCycle(false, true);

  const links = [
    {
      route: `/`,
      title: `Home`
    },
    {
      route: `/about`,
      title: `About`
    },
    {
      route: `/projects`,
      title: `Projects`
    },
    {
      route: `/blog`,
      title: `Blog`
    }
  ];

  return (
    <motion.div
      initial={false}
      animate={isOpen ? "open" : "closed"}
      className="fixed inset-x-0 bottom-0 flex flex-col block lg:hidden"
    >
      <Navigation isOpen={isOpen} links={links} />
      <BottomBar toggle={() => toggleOpen()} />
    </motion.div>
  );
}

export default MobileMenu;