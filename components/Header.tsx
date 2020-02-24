import { NextPage } from 'next';
import Link from 'next/link';
import Section from '../components/Section';
import ThemeToggle from "./ThemeToggle";
import { Linkedin } from 'react-feather';

interface HeaderProps {
  userAgent?: string;
  data?: Object;
}

const Header: NextPage<HeaderProps> = ({}) => {
  return (
    <header className="hidden lg:block">
      <Section>
        {/* <div className="mt-10">
          <Link href="/">
            <span className="text-4xl font-bold">Perry Raskin</span>"
          </Link>
        </div> */}
        <div
          className="flex items-center justify-between pb-6 my-6 border-b-2 border-blue-400">
          <nav className="-ml-4">
            {[
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
            ].map(link => (
              <Link href={link.route}>
                <a
                  className="px-4 py-2 mr-2 text-2xl rounded hover:bg-gray-300 dark-hover:bg-gray-800"
                  key={link.title}
                  href={link.route}
                >
                  {link.title}
                </a>
              </Link>
            ))}
          </nav>
          {/* <ThemeToggle /> */}
        </div>
      </Section>
    </header>
  )
}

export default Header;