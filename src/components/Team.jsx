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
          className="mb-2 !text-base !font-semibold text-gray-600"
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
    img: `https://res.cloudinary.com/ddjikayiy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1727430422/WhatsApp_Image_2024-09-27_at_15.09.11_f2a8c7bb_ylbnkx.jpg`,
    name: "Aastha Sharma",
    title: "Events Team",
    linkedin: "https://www.linkedin.com/in/pratik-ghosh-q02840284",
  },
  {
    img: `https://res.cloudinary.com/ddjikayiy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1727431994/dikshant_p4owci.jpg`,
    name: "Dikshant Vats",
    title: "Events Team",
    linkedin: "https://www.linkedin.com/in/pratik-ghosh-q02840284",
  },
  {
    img: `https://res.cloudinary.com/ddjikayiy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1727431992/anant_ru8h0v.jpg`,
    name: "Anant Ranjan",
    title: "Events Team",
    linkedin: "https://www.linkedin.com/in/pratik-ghosh-q02840284",
  },
  {
    img: `https://res.cloudinary.com/ddjikayiy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1727434819/fest_single_pic_fe88dh.jpg`,
    name: "Saurav Dwivedi",
    title: "Events Team",
    linkedin: "https://www.linkedin.com/in/sauravdwivedi1001/",
  },
  {
    img: `https://res.cloudinary.com/ddjikayiy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1727429075/pratikghosh_dupb0f.jpg`,
    name: "Pratik Ghosh",
    title: "Web Design Team",
    linkedin: "https://www.linkedin.com/in/pratik-ghosh-b02840284",
  },
  {
    img: `https://res.cloudinary.com/ddjikayiy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1727431990/abhiraj_uel8q8.jpg`,
    name: "Abhiraj Kumar",
    title: "Web Design Team",
    linkedin: "https://www.linkedin.com/in/abhiraj-kumar-b060a0236/",
  },
  {
    img: "https://res.cloudinary.com/ddjikayiy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1727434669/Ankit_mwqjpk.jpg",
    name: "Ankit Gupta",
    title: "Web Design Team",
    linkedin: "https://www.linkedin.com/in/ankit-gupta-52a54b226/",
  },
  {
    img: "https://res.cloudinary.com/ddjikayiy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1727431994/Anish_Barnwal_o2ixrr.jpg",
    name: "Anish Kumar Barnwal",
    title: "Web Design Team",
    linkedin: "https://www.linkedin.com/in/anish-kumar-barnwal-458383227/",
  },

  {
    img: "https://res.cloudinary.com/ddjikayiy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1727432027/mayukk_ujgq7p.jpg",
    name: "Mayukh Bandyopadhyay",
    title: "Web Design Team",
    linkedin: "https://www.linkedin.com/in/mayukh-bandyopadhyay-1a7775229/",
  },

  {
    img: `https://res.cloudinary.com/ddjikayiy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1727432043/lakshya_u5p3ub.jpg`,
    name: "Lakshaya Saini",
    title: "Finance Team",
    linkedin: "https://www.linkedin.com/in/pratik-ghosh-q02840284",
  },

  {
    img: "https://res.cloudinary.com/ddjikayiy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1727435805/Anish_Mishra_ywpn2v.jpg",
    name: "Anish Mishra",
    title: "Design Team",
    linkedin: "https://www.linkedin.com/in/anish-k-mishra/",
  },

  {
    img: "https://res.cloudinary.com/ddjikayiy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1727432028/moumita_twknsk.jpg",
    name: "Moumita Das",
    title: "Design Team",
    linkedin: "https://www.linkedin.com/in/pratik-ghosh-q02840284",
  },

  {
    img: "https://res.cloudinary.com/ddjikayiy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1727431991/Amargeet_ypuhzu.jpg",
    name: "Amarjeet",
    title: "Design Team",
    linkedin: "https://www.linkedin.com/in/pratik-ghosh-q02840284",
  },

  {
    img: `https://res.cloudinary.com/ddjikayiy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1727432084/saket_nxy7o6.jpg`,
    name: "Saket kumar",
    title: "Hospitality Team",
    linkedin: "https://www.linkedin.com/in/pratik-ghosh-q02840284",
  },
  {
    img: `https://res.cloudinary.com/ddjikayiy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1727432083/sangam_cakkzn.jpg`,
    name: "Sangam Kumar Pandey",
    title: "Hospitality Team",
    linkedin: "https://www.linkedin.com/in/pratik-ghosh-q02840284",
  },
  {
    img: `https://res.cloudinary.com/ddjikayiy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1727432083/Ritesh_g4vkf9.jpg`,
    name: "Ritesh Kumar",
    title: "Hospitality Team",
    linkedin: "https://www.linkedin.com/in/pratik-ghosh-q02840284",
  },
  {
    img: "https://res.cloudinary.com/ddjikayiy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1727431991/amitesh_b0n4dt.jpg",
    name: "Amitesh Oraon",
    title: "Hospitality Team",
    linkedin: "https://www.linkedin.com/in/pratik-ghosh-q02840284",
  },
  {
    img: "https://res.cloudinary.com/ddjikayiy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1727431990/AbhinavDaswant_sluve4.jpg",
    name: "Abhinav Dashwant",
    title: "Publicity Team",
    linkedin: "https://www.linkedin.com/in/pratik-ghosh-q02840284",
  },

  {
    img: `https://res.cloudinary.com/ddjikayiy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1727431991/aditisingh_qedfo4.jpg`,
    name: "Aditi Singh",
    title: "Publicity Team",
    linkedin: "https://www.linkedin.com/in/pratik-ghosh-q02840284",
  },
  {
    img: `https://res.cloudinary.com/ddjikayiy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1727431990/aditi_qmtmwl.jpg`,
    name: "Aditi",
    title: "Publicity Team",
    linkedin: "https://www.linkedin.com/in/pratik-ghosh-q02840284",
  },
  {
    img: `https://res.cloudinary.com/ddjikayiy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1727431994/anishdas_hznnho.jpg`,
    name: "Anish Das",
    title: "Resource Team",
    linkedin: "https://www.linkedin.com/in/pratik-ghosh-q02840284",
  },
  {
    img: `https://res.cloudinary.com/ddjikayiy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1727432081/ravi_fngsel.jpg`,
    name: "Ravi Kumar",
    title: "Resource Team",
    linkedin: "https://www.linkedin.com/in/pratik-ghosh-q02840284",
  },
  {
    img: `https://res.cloudinary.com/ddjikayiy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1727431991/alok_ur9a3p.jpg`,
    name: "Aalok Praveen",
    title: "Sponshorship Team",
    linkedin: "https://www.linkedin.com/in/pratik-ghosh-q02840284",
  },
  {
    img: `https://res.cloudinary.com/ddjikayiy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1727432109/pratham_ixthje.jpg`,
    name: "Pratham Pathak",
    title: "Sponshorship Team",
    linkedin: "https://www.linkedin.com/in/pratik-ghosh-q02840284",
  },
  {
    img: "https://res.cloudinary.com/ddjikayiy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1727431994/debjyotidey_badzvc.jpg",
    name: "Debjyoti Dey",
    title: "Logistics Team",
    linkedin: "https://www.linkedin.com/in/pratik-ghosh-q02840284",
  },

  {
    img: "https://res.cloudinary.com/ddjikayiy/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1727432081/priyanshu_cfbzv9.jpg",
    name: "Priyanshu Kumar",
    title: "Press and Media Team",
    linkedin: "https://www.linkedin.com/in/pratik-ghosh-q02840284",
  },
];

export function TeamSection12() {
  return (
    <section className="min-h-screen py-8 px-8 lg:py-28">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {members.map((props, key) => (
            <TeamCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection12;
