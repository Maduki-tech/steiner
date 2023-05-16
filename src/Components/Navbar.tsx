import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import logo from "~/../public/logo 1.png";

export default function Navbar() {
  return (
    <div className="navbar md:flex-col bg-base-100">
      <MobileMenu />
      <div className="navbar-end md:navbar-center flex justify-center">
        <Link href="/" className="w-28 md:w-40">
          <Image src={logo} alt="logo" />
        </Link>
      </div>

      <DesktopMenu />
    </div>
  );
}

function DesktopMenu() {
  const { pathname } = useRouter();

  return (
    <div className="hidden md:flex">
      <ul className="menu horizontal">
        <NavItem path="/" currentPath={pathname}>
          Home
        </NavItem>
        <NavItem path="/leistungen" currentPath={pathname}>
          Unsere Leistungen
        </NavItem>
        <NavItem path="/about" currentPath={pathname}>
          Über uns
        </NavItem>
        <NavItem path="/kontakt" currentPath={pathname}>
          Kontakt
        </NavItem>
        <NavItem path="/jobs" currentPath={pathname}>
          Jobs
        </NavItem>
      </ul>
    </div>
  );
}

function NavItem({ path, currentPath, children } : {path: string, currentPath: string, children: React.ReactNode}) {
  const isActive = currentPath === path;
  const linkClassName = isActive ? "border-y-2 border-yellow-500" : "";

  return (
    <li>
      <Link href={path} className={linkClassName}>
        {children}
      </Link>
    </li>
  );
}

function MobileMenu() {
  return (
    <div className="md:hidden navbar-start">
      <div className="dropdown">
        <label tabIndex={0} className="btn-ghost btn-circle btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
        >
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/leistungen">Unsere Leistungen</Link>
          </li>
          <li>
            <Link href="/about">Über uns</Link>
          </li>
          <li>
            <Link href="/kontakt">Kontakt </Link>
          </li>

          <li>
            <Link href="/kontakt">Jobs </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
