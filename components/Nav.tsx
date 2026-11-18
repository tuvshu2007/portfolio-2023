import { Bars3Icon } from "@heroicons/react/16/solid";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

// interface Props {
//     openNav: () => void;
// }

// const links = [
//   {
//     name : 'Home',
//     path : '/'
//   },
//   {
//     name : "Service",
//     path : '/service'
//   },
//   {
//     name : 'About',
//     path : '/about'
//   },
//   {
//     name : 'Project',
//     path :'/project'
//   },
//   {
//     name : 'Blog',
//     path: '/blog'
//   },
//   {
//     name : 'Contact',
//     path : '/contact'
//   }
// ]

const Nav = () => {
  const pathname = usePathname();
  console.log(pathname);

  return (
    <div className="w-[100%] fixed z-[100000] top-0 h-[12vh] bg-[#141c27] shadow-md">
      <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
        <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
          WEB
          <span className="text-yellow-300">DEV</span>
        </h1>
        {/* <nav className="nav-link flex gap-8">
          {links.map((link, index) => {
            return (
              <Link href={link.path} key={index} className={`${link.path === pathname && "text-[#55e6a5] border-b-2 border-accent"}`}>{link.name}</Link>
            )
          })}
        </nav> */}
        <div className="nav-link">Home</div>
        <div className="nav-link">Service</div>
        <div className="nav-link">About</div>
        <div className="nav-link">Project</div>
        <div className="nav-link">Blog</div>
        <div className="nav-link">Contact</div>
        <div className="md:hidden">
          <Bars3Icon className="w-[2rem] h-[2rem] cursor-pointer text-yellow-300" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
