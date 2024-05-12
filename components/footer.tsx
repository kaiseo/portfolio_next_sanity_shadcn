import Link from "next/link";
import React from "react";

const Footer = () => {
  const emailAddress = "kaiseo.dev@gmail.com";

  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-6xl m-auto text-white flex flex-wrap justify-between">
        {/* About Section */}
        <div className="p-5 w-48">
          <div className="text-xs uppercase text-gray-400 font-medium">
            About
          </div>
          <Link className="my-3 block" href="/about">
            About Us <span className="text-teal-600 text-xs p-1"></span>
          </Link>
          <Link className="my-3 block" href="/blog">
            Blog <span className="text-teal-600 text-xs p-1"></span>
          </Link>
          <Link className="my-3 block" href="/privacy">
            Privacy Policy <span className="text-teal-600 text-xs p-1"></span>
          </Link>
        </div>

        {/* Quick Links Section */}
        <div className="p-5 w-48">
          <div className="text-xs uppercase text-gray-400 font-medium">
            Quick Links
          </div>
          <Link className="my-3 block" href="/">
            Home <span className="text-teal-600 text-xs p-1"></span>
          </Link>
          <Link className="my-3 block" href="/services">
            Services <span className="text-teal-600 text-xs p-1"></span>
          </Link>
          <Link className="my-3 block" href="/contact">
            Contact <span className="text-teal-600 text-xs p-1"></span>
          </Link>
        </div>

        {/* Contact Section */}
        <div className="p-5 w-48">
          <div className="text-xs uppercase text-gray-400 font-medium">
            Contact
          </div>
          <Link className="my-3 block" href="tel:123-456-7890">
            123-456-7890 <span className="text-teal-600 text-xs p-1"></span>
          </Link>
          <Link className="my-3 block" href={`mailto:${emailAddress}`}>
            {emailAddress} <span className="text-teal-600 text-xs p-1"></span>
          </Link>
        </div>

        {/* Social Media Section */}
        <div className="p-5 w-48">
          <div className="text-xs uppercase text-gray-400 font-medium">
            Follow Us
          </div>
          <Link className="my-3 block" href="https://www.facebook.com/">
            Facebook <span className="text-teal-600 text-xs p-1"></span>
          </Link>
          <Link className="my-3 block" href="https://www.twitter.com/">
            Twitter <span className="text-teal-600 text-xs p-1"></span>
          </Link>
          <Link className="my-3 block" href="https://www.instagram.com/">
            Instagram <span className="text-teal-600 text-xs p-1"></span>
          </Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-700">
        <div className="max-w-6xl m-auto text-gray-400 text-center p-4">
          © 2024 KAITHEDEV. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
