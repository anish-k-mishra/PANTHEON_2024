"use client";
import React from "react";
import {
  Card,
  CardBody,
  Avatar,
  IconButton,
  Typography,
} from "@material-tailwind/react";

import { FaLinkedin } from "react-icons/fa";

//import p1 from '../assets/p1.jpg'; // Import your first image
//import pd2 from '../assets/pd2.jpeg'; // Import your second image (adjust the filename as necessary)
//import pd3 from '../assets/pd3.jpeg'; // Import your third image (adjust the filename as necessary)

function TeamCard({ img, name, title, linkedin }) {
  return (
    <Card className="rounded-lg bg-[#FAFAFA] border-2" shadow={false}>
      <CardBody className="text-center">
        <Avatar
          src={img}
          alt={name}
          variant="circular"
          size="xxl"
          className="mx-auto mb-6 object-top"
        />
        <Typography
          variant="h5"
          color="blue-gray"
          className="!font-medium text-lg"
        >
          {name}
        </Typography>
        <Typography
          color="blue-gray"
          className="mb-2 !text-base !font-semibold text-black"
        >
          {title}
        </Typography>
        <div className="flex items-center justify-center gap-1.5">
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500"
          >
            <FaLinkedin />
          </a>
        </div>
      </CardBody>
    </Card>
  );
}

const members = [
  {
    img: `https://res.cloudinary.com/ddjikayiy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1727431990/Aditya_ec0mnx.jpg`,
    name: "Aditya Raj",
    title: "Student Coordinnator",
    linkedin: "https://www.linkedin.com/in/pratik-ghosh-q02840284",
  },
  {
    img: `https://res.cloudinary.com/ddjikayiy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1727431993/ayushi_fqncxj.jpg`,
    name: "Ayushi Chakraborty",
    title: "Student Coordinnator",
    linkedin: "https://www.linkedin.com/in/pratik-ghosh-q02840284",
  },
  {
    img: `https://res.cloudinary.com/ddjikayiy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1727431993/aniket_ba0c5l.jpg`,
    name: "Aniket Sourav",
    title: "Co-Convener",
    linkedin: "https://www.linkedin.com/in/pratik-ghosh-q02840284",
  },
];

export function TeamSection12() {
  return (
    <section className="min-h-screen py-8 px-8 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {members.map((props, key) => (
            <TeamCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection12;
