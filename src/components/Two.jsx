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
import { FaInstagram } from "react-icons/fa";

function TeamCard({ img, name, title, linkedin }) {
  return (
    <Card className="rounded-lg bg-[#ebebf0] border-2" shadow={false}>
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
    img: `https://res.cloudinary.com/ddjikayiy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1727433486/aftab_sir_r7sloy.jpg`,
    name: "Dr Aftab Alam",
    title: "Faculty Coordinator",
    linkedin: "https://www.linkedin.com/in/pratik-ghosh-q02840284",
  },
  {
    img: `https://res.cloudinary.com/ddjikayiy/image/upload/v1727467184/WhatsApp_Image_2024-09-28_at_01.28.20_8a458a99_qbygaj.jpg`,
    name: "Dr Chanchal Kumar Mishra",
    title: "Faculty Coordinator",
    linkedin: "https://www.linkedin.com/in/pratik-ghosh-q02840284",
  },
];

export function TeamSection12() {
  return (
    <section className="min-h-screen py-8 px-8 lg:py-28">
      <div className="container mx-auto">
        <div className="mb-16 text-center lg:mb-20">
          <div className="-mt-16">
            <p className="text-5xl font-bold text-white">Our Team</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-24 md:grid-cols-2 lg:grid-cols-2">
          {members.map((props, key) => (
            <TeamCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection12;
