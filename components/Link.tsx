import { NextPage } from 'next';
import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface NLinkProps {
  href: string;
  children: any;
}

const NLink: NextPage<NLinkProps> = ({
  href,
  children
}) => {
  const router = useRouter();

  let className = children.props.className || '';
  if (router.pathname === href) {
    className = `${className} text-white bg-blue-900`
  }

  return (
    <Link href={href}>
      {React.cloneElement(children, { className })}
    </Link>
  )
}

export default NLink;