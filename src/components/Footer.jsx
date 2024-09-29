"use client";
import { Typography } from "@material-tailwind/react";

const SITEMAP = [
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Executive Body", href: "/about" },
      { name: "Our Team", href: "/about" },
      { name: "Events", href: "/events" },
    ],
  },
  {
    title: "Help Center",
    links: [
      {
        name: "Linkedin",
        href: "https://www.linkedin.com/company/pantheon-bit-mesra/",
      },
      {
        name: "Instagram",
        href: "https://www.instagram.com/pantheon_techfest?igsh=MXUyZGExamV1eDFyaA==",
      },
      {
        name: "Facebook",
        href: "https://www.facebook.com/bitmesra.pantheon?mibextid=ZbWKwL",
      },
      { name: "Contact Us", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        name: "Blog",
        href: "https://docs.google.com/document/d/1OyF7CCddg9UUBSiCgxWryoTxRXusVirrZK47m4xbo0I/edit?usp=sharing",
      },
      {
        name: "Newsletter",
        href: "https://docs.google.com/document/d/1OyF7CCddg9UUBSiCgxWryoTxRXusVirrZK47m4xbo0I/edit?usp=sharing",
      },
      {
        name: "Pantheon Bible",
        href: "https://docs.google.com/document/d/1OyF7CCddg9UUBSiCgxWryoTxRXusVirrZK47m4xbo0I/edit?usp=sharing",
      },

      {
        name: "Resource Directory",
        href: "https://docs.google.com/document/d/1OyF7CCddg9UUBSiCgxWryoTxRXusVirrZK47m4xbo0I/edit?usp=sharing",
      },
    ],
  },
];

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="relative w-full bg-gradient-to-r from-gray-300 to-gray-400">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid w-full grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
          {SITEMAP.map(({ title, links }, key) => (
            <div key={key} className="w-full">
              <Typography
                variant="small"
                color="blue-gray"
                className="mb-4 font-bold uppercase opacity-50 text-black"
              >
                {title}
              </Typography>
              <ul className="space-y-1">
                {links.map(({ name, href }, key) => (
                  <Typography
                    key={key}
                    as="li"
                    color="blue-gray"
                    className="font-normal"
                  >
                    <a
                      href={href}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                    >
                      {name}
                    </a>
                  </Typography>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
          <Typography
            variant="small"
            className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
          >
            &copy; {currentYear}{" "}
            <a href="/" className="hover:underline">
              Pantheon
            </a>
            . All Rights Reserved.
          </Typography>
          <div className="flex gap-4 text-blue-gray-900">
            {/* Add social media icons or links here if needed */}
          </div>
        </div>
      </div>
    </footer>
  );
}
