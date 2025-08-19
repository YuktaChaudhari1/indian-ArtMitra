import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-purple-400 to-red-400 text-white w-full shadow-lg z-50 ">
      <div className="main max-w-7xl mx-auto flex items-center justify-between px-6 py-3 ">
        {/* Logo */}
        <div className="logo flex items-start">
          <img src="logo.png" alt="logo" className="h-14 w-auto rounded-2xl" />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 text-lg font-medium">
          <ul className="flex gap-5 right">
            <li>
              <Link
                to="/artforms"
                className=" hover:text-orange-600 transition hover:underline cursor-pointer"
              >
                {" "}
                Art Forms
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className=" hover:text-orange-600 transition hover:underline cursor-pointer"
              >
                {" "}
                About
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className=" hover:text-orange-600 transition hover:underline cursor-pointer"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className=" hover:text-orange-600 transition hover:underline cursor-pointer"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {/* Mobile Nav */}
      {isOpen && (
        <ul className="md:hidden bg-gradient-to-b from-purple-400 to-red-400 px-6 py-4 space-y-3 text-lg">
          <li>
            <Link
              to="/artforms"
              className=" hover:text-orange-600 transition hover:underline cursor-pointer"
            >
              {" "}
              Art Forms
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className=" hover:text-orange-600 transition hover:underline cursor-pointer"
            >
              {" "}
              About
            </Link>
          </li>
          <li>
            <Link
              to="/faq"
              className=" hover:text-orange-600 transition hover:underline cursor-pointer"
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className=" hover:text-orange-600 transition hover:underline cursor-pointer"
            >
              {" "}
              Contact
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}

export default Header;
