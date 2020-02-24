import { NextPage } from 'next';
import Header from './Header';
import MobileHeader from './mobile/MobileMenu';
import Footer from './Footer';

interface LayoutProps {
  children: any;
}

const Layout: NextPage<LayoutProps> = ({
  children
}) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-700">
      <Header />
      <MobileHeader />
      <main className="flex flex-col flex-1 mx-auto w-full mb-20 md:mb-6">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout;