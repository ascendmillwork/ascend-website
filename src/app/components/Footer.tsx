import Logo from "@/assets/images/logo.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <section className="bg-dark text-white">
      <div className="py-24 px-4 sm:px-6 md:px-10 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-12">
          {/* Left Side: Logo + Newsletter */}
          <div className="w-full lg:w-1/2 space-y-6">
            <Image
              src={Logo}
              height={200}
              width={200}
              alt="Logo"
              className="rounded-lg bg-white p-4 px-6"
            />
            <p className="text-sm max-w-md">
              Stay up to date with our latest news and projects.
            </p>
            <form className="flex flex-col sm:flex-row w-full max-w-md gap-4 sm:gap-6 accent-background-dark p-6 rounded-lg">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white text-black rounded-md flex-1 p-4"
              />
              <Button
                type="submit"
                className="uppercase accent-background-darkest rounded-md"
              >
                Signup
              </Button>
            </form>
          </div>

          {/* Right Side: Navigation + Quick Links */}
          <div className="w-full lg:w-1/3 grid grid-cols-2 justify-items-start md:justify-items-end">
            <div>
              <p className="text-sm font-semibold mb-4 uppercase">Navigation</p>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/services">Services</Link>
                </li>
                <li>
                  <Link href="/portfolio">Portfolio</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold mb-4 uppercase">
                Quick Links
              </p>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/privacy-policy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/terms">Terms & Conditions</Link>
                </li>
                <li>
                  <Link href="/faq">FAQ</Link>
                </li>
                <li>
                  <Link href="/support">Support</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/20 py-8 px-4 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-center sm:text-left">
          <p>@ Ascend Millwork. All Rights Reserved</p>
          <ul className="flex gap-4">
            <li>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms">Terms & Conditions</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
