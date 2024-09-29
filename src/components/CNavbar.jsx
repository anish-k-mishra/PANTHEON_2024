import React, { useEffect, useState } from "react";
import logoNavbar from "../assets/logo-navbar.png";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  IconButton,
} from "@material-tailwind/react";
import {
  UserCircleIcon,
  CubeTransparentIcon,
  CodeBracketSquareIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  PowerIcon,
  Bars2Icon,
  RocketLaunchIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";

// Profile menu items
const profileMenuItems = [
  {
    name: "dashboard",
    label: "Dashboard",
    icon: UserCircleIcon,
  },
  {
    name: "",
    label: "Sign Out",
    icon: PowerIcon,
  },
];

function ProfileMenu({ isLoggedIn, setIsLoggedIn, setIsLoading }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <>
      {isLoggedIn && (
        <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
          <MenuHandler>
            <Button
              variant="text"
              color="blue-gray"
              className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
            >
              <Avatar
                variant="circular"
                size="sm"
                alt="User Avatar"
                className="border border-gray-900 p-0.5"
                src="https://as2.ftcdn.net/v2/jpg/00/65/77/27/1000_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"
              />
              <ChevronDownIcon
                strokeWidth={2.5}
                className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""
                  }`}
              />
            </Button>
          </MenuHandler>
          <MenuList className="p-1">
          {profileMenuItems.map(({ name, label, icon }, key) => {
  const isLastItem = key === profileMenuItems.length - 1;
  return (
    <MenuItem
      key={key}
      onClick={() => {
        if (isLastItem) {
          setIsLoading(true);
          localStorage.removeItem("token");
          setIsLoggedIn(false);
          setTimeout(() => {
            router.push("/");
            setIsLoading(false);
          }, 1000);
        } else if (name === "dashboard") {
          router.push("/dashboard");
        }
        closeMenu();
      }}
      className={`flex items-center gap-2 rounded ${
        isLastItem
          ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
          : ""
      }`}
    >
      {React.createElement(icon, {
        className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
        strokeWidth: 2,
      })}
      <Typography
        as="span"
        variant="small"
        className={`font-normal ${isLastItem ? "text-red-500" : ""}`}
      >
        {label}
      </Typography>
    </MenuItem>
  );
})}

          </MenuList>
        </Menu>
      )}
    </>
  );
}

// Nav list items
const navListItems = (isLoggedIn) => [
  { name: "", label: "Home", icon: UserCircleIcon },
  { name: "about", label: "About Us", icon: UserCircleIcon },
  { name: "leaderboard", label: "Leaderboard", icon: UserCircleIcon },
  { name: "faq", label: "FAQs", icon: CubeTransparentIcon },
  { name: "events", label: "Events", icon: CodeBracketSquareIcon },
  {
    name: isLoggedIn ? "joinTeam" : "create",
    label: isLoggedIn ? "Join Team" : "Sign Up",
    icon: CodeBracketSquareIcon,
  },
  { name: "archives", label: "Archives", icon: CodeBracketSquareIcon },
];

function NavList({ isLoggedIn, setIsLoggedIn, setIsNavOpen, isMobileView }) {
  return (
    <ul className="mt-2 mb-4 flex flex-col gap-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      {navListItems(isLoggedIn).map(({ name, label, icon }, key) => (
        <li key={key}>
          <Link href={`/${name}`} passHref>
            <Typography
              as="a"
              variant="small"
              color="gray"
              className="font-medium text-blue-gray-500"
              onClick={() => {
                if (isMobileView === "true") {
                  setIsNavOpen(false);
                }
              }}
            >
              <MenuItem className="flex items-center gap-2 lg:rounded-full">
                {React.createElement(icon, { className: "h-[18px] w-[18px]" })}
                <span className="text-gray-900">{label}</span>
              </MenuItem>
            </Typography>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function CNavbar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 960) setIsNavOpen(false);
    });
  }, []);

  return (
    <>
      {isLoading && (
        <div className="fixed top-0 left-0 z-50 w-screen h-screen bg-gray-900 opacity-75 flex items-center justify-center">
          <div className="loader border-t-4 border-b-4 border-white w-12 h-12 rounded-full animate-spin"></div>
        </div>
      )}

      <Navbar className="mx-auto max-w-screen-xl p-2 rounded-none md:rounded-full lg:pl-6 lg:mt-2">
        <div className="relative mx-auto flex items-center justify-between text-blue-gray-900">
          <Image src={logoNavbar} alt="logo" height={50} width={50} />
          <div className="hidden lg:block">
            <NavList
              isLoggedIn={isLoggedIn}
              setIsLoggedIn={setIsLoggedIn}
              setIsNavOpen={setIsNavOpen}
              isMobileView={"false"}
            />
          </div>
          <IconButton
            size="sm"
            color="blue-gray"
            variant="text"
            onClick={toggleIsNavOpen}
            className="ml-auto mr-2 lg:hidden"
          >
            <Bars2Icon className="h-6 w-6" />
          </IconButton>

          <div className="flex items-center gap-2">
            {!isLoggedIn && (
              <Link href="/sign-in">
                <Button size="sm" variant="text">
                  <span>Log In</span>
                </Button>
              </Link>
            )}
            {isLoggedIn && (
              <ProfileMenu
                isLoggedIn={isLoggedIn}
                setIsLoggedIn={setIsLoggedIn}
                setIsLoading={setIsLoading}
              />
            )}
          </div>
        </div>
        <MobileNav open={isNavOpen} className="overflow-scroll">
          <NavList
            isLoggedIn={isLoggedIn}
            setIsLoggedIn={setIsLoggedIn}
            setIsNavOpen={setIsNavOpen}
            isMobileView={"true"}
          />
        </MobileNav>
      </Navbar>
    </>
  );
}
