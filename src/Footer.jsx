import React from "react";
import { Instagram } from "lucide-react";
import { Facebook } from "lucide-react";
import { Twitter } from "lucide-react";

function Footer() {
  return (
    <footer className=" bg-sky-950 text-white ">
      <div
        className="flex gap-28 my-20 mt-2 mb-2
     justify-center"
      >
        <div className="footer h-20 w-20  ">
          <img src="logo.png" alt="logo" className="ml-8 mt-5 rounded-3xl" />
        </div>

        <div className="footer p-5">
          <h1 className="font-bold mb-4 ">About</h1>
          <ul className="space-y-2">
            <li>About us</li>
            <li>FAQS</li>
            <li>ArtForms</li>
          </ul>
        </div>

        <div className="footer p-5">
          <h1 className="font-bold mb-4">Privacy</h1>
          <ul className="space-y-2">
            <li>Privacy Policy</li>
            <li>Terms and Conditions</li>
            <li>Contact us</li>
          </ul>
        </div>

        <div className="footer p-5">
          <h1 className="font-bold mb-4">Social</h1>
          <ul className="space-y-2">
            <li className="flex items-center gap-2">
              Instagram <Instagram size={18} />
            </li>
            <li className="flex items-center gap-2">
              Facebook <Facebook size={20} />
            </li>
            <li className="flex items-center gap-2">
              Twitter <Twitter size={18} />
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center py-4 border-t border-gray-700">
        {" "}
        © {new Date().getFullYear()} All Right Reserved
      </div>
    </footer>
  );
}

export default Footer;
