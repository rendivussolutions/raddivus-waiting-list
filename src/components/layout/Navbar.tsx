"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { NavDivider } from "./NavDivider";
import { MobileNav } from "./MobileNav";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Pricing", href: "/pricing" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full border-b transition-all duration-300 ${
        isScrolled
          ? "border-border bg-background/60 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-6 py-6 lg:px-24">
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/images/landing/logo.png"
            alt="Logo"
            width={64}
            height={40}
            className="h-10 w-16 object-contain"
          />
        </Link>

        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Main navigation"
        >
          {navItems.map((item, index) => (
            <div key={item.label} className="flex items-center gap-8">
              <Link
                href={item.href}
                className="nav-link text-base font-normal leading-6"
              >
                {item.label}
              </Link>
              {index < navItems.length - 1 && <NavDivider />}
            </div>
          ))}
        </nav>

        <Link
          href="/waitlist"
          className="hidden rounded-md bg-foreground px-5 py-2 text-base font-medium leading-6 text-background transition-opacity hover:opacity-90 lg:block"
        >
          Join Waiting List
        </Link>

        <MobileNav navItems={navItems} />
      </div>
    </header>
  );
}
