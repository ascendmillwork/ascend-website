"use client";

import Logo from "@/assets/images/logo.png";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "../utils/Button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="px-4 sm:px-6 md:px-10 py-4 fixed top-0 left-0 right-0 z-50">
      <div className="bg-white px-4 sm:px-6 md:px-10 py-4 flex items-center justify-between rounded-md border border-accent lightest-bg relative">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image src={Logo} height={30} width={165} alt="Logo" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:block absolute left-1/2 transform -translate-x-1/2">
          <ul className="flex gap-8 text-[16px] font-medium">
            <li>
              <Link href="/" className="hover:text-gray-700">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-gray-700">
                About us
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="hover:text-gray-700">
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-gray-700">
                Services
              </Link>
            </li>
          </ul>
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <Button
            ButtonText="Get A Quote"
            ButtonUrl="/contact"
            ButtonTextColor="text-black"
          />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Nav */}
        <div
          className={`absolute top-full left-0 w-full border-t mt-3 rounded-md border border-accent lightest-bg transition-all duration-300 ease-in-out lg:hidden ${
            isOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-2 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col p-4 space-y-4 text-[16px] font-medium">
            <li>
              <Link href="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" onClick={() => setIsOpen(false)}>
                About us
              </Link>
            </li>
            <li>
              <Link href="/portfolio" onClick={() => setIsOpen(false)}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link href="/services" onClick={() => setIsOpen(false)}>
                Services
              </Link>
            </li>
            <li>
              <Button
                ButtonText="Get A Quote"
                ButtonUrl="/contact"
                ButtonTextColor="text-black"
              />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
